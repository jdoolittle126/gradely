import React from "react";

type SideBarLinkProps = {
    text: string;
    icon: string;
}

export const SideBarLink = (props: SideBarLinkProps) => {

    return (
        <>
            <div
                className={'d-flex flex-row align-items-baseline justify-content-between border border-1 px-3 py-2 rounded-2'}>
                <i className={props.icon + " me-3 fs-2"}></i>
                <p className={'fs-3 mb-0'}>{props.text}</p>
            </div>
        </>

    );
}
