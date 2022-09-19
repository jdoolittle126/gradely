import * as React from 'react';
import { connect } from 'react-redux';

type FeatureProps = {
    name: string;
    image?: string;
}

class FeatureDisplay extends React.Component<FeatureProps> {

    constructor(props: FeatureProps) {
        super(props);
    }

    public render() {
        return (
        <div className="container text-center my-1">
            <div>
                    <img className="rounded w-50" src={this.props.image == '' ? 'https://cdn.discordapp.com/attachments/958887259078262804/1021263801133322310/russ.PNG' : this.props.image}/>
            </div>
            <div className="pt-2">
                <h4>{this.props.name}</h4>
                <div className="border-bottom mx-5 mb-2"></div>
                <div>
                    {this.props.children}
                </div>
            </div>
        </div>
        );
    }
}

export default FeatureDisplay;
