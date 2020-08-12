import React, { Component } from 'react';

class FeatureList extends Component {

    constructor(props) {
        super(props)
    }

    //put the form here also because the fieldset is inside of the form
    render() {
        return (
            <fieldset className="feature" key={this.props.featureHash} >
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {this.props.options}
            </fieldset>
        );
    }
}

export default FeatureList;