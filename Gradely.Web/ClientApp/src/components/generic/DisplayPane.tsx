import React, {Component} from 'react';

class DisplayPane extends React.Component<React.HTMLAttributes<HTMLDivElement>, {}> {
    render() {
        return (
            <div className={"p-1 m-1 border rounded-1 " + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default DisplayPane;
