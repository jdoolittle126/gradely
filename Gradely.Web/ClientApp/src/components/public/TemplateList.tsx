import * as React from 'react';
import { connect } from 'react-redux';

const TemplateList = () => (
    <div>

        <div className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-around align-items-center py-3 bg-light">
            <h2 className="text-wrap">Templates List Page</h2>
        </div>
    </div>
);

export default connect()(TemplateList);
