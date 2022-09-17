using System.Security.Claims;
using Gradely.DataAccess.DataAccess;
using Gradely.Web.Auth;
using Gradely.Web.Auth.Interfaces;
using Gradely.Web.Auth.Scope;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace Gradely.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            var domain = $"https://{Configuration["Auth:Tenant"]}.{Configuration["Auth:Region"]}.auth0.com/";

            services.AddAuthorization(options =>
            {
                // User Permissions
                options.AddPolicy("users:view", 
                    policy => policy.Requirements.Add(new HasScopeRequirement("users:view", domain)));
                options.AddPolicy("users:edit",
                    policy => policy.Requirements.Add(new HasScopeRequirement("users:edit", domain)));
                options.AddPolicy("users:delete",
                    policy => policy.Requirements.Add(new HasScopeRequirement("users:delete", domain)));
                options.AddPolicy("users:create",
                    policy => policy.Requirements.Add(new HasScopeRequirement("users:create", domain)));

                // Term Permissions
                options.AddPolicy("term:view",
                    policy => policy.Requirements.Add(new HasScopeRequirement("term:view", domain)));
                options.AddPolicy("term:edit",
                    policy => policy.Requirements.Add(new HasScopeRequirement("term:edit", domain)));
                options.AddPolicy("term:delete",
                    policy => policy.Requirements.Add(new HasScopeRequirement("term:delete", domain)));
                options.AddPolicy("term:create",
                    policy => policy.Requirements.Add(new HasScopeRequirement("term:create", domain)));

                // Template Permissions
                options.AddPolicy("template:view",
                    policy => policy.Requirements.Add(new HasScopeRequirement("template:view", domain)));
                options.AddPolicy("template:edit",
                    policy => policy.Requirements.Add(new HasScopeRequirement("template:edit", domain)));
                options.AddPolicy("template:delete",
                    policy => policy.Requirements.Add(new HasScopeRequirement("template:delete", domain)));
                options.AddPolicy("template:create",
                    policy => policy.Requirements.Add(new HasScopeRequirement("template:create", domain)));
            });

            services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

            services.AddSingleton<IAuth0Client>(
                new Auth0Client(
                    Configuration["Auth:Tenant"],
                    Configuration["Auth:Region"],
                    Configuration["Auth:ClientId"],
                    Configuration["Auth:ClientSecret"]
                ));

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.Authority = domain;
                options.Audience = "http://localhost:3000";
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    NameClaimType = ClaimTypes.NameIdentifier
                };
            });

            services.AddDbContext<GradelyContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("Default"));
            });

            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
