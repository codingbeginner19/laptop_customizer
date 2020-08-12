import React, { Component } from 'react';

class FeatureCart extends Component {

  constructor(props) {
    super(props)
  }
  //header could be in here
  render() {

    return (
      <div className="summary__option" key={this.props.featureHash}>
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{this.props.selectedOption.name}</div>
        <div className="summary__option__cost">
          {this.props.USCurrencyFormat.format(this.props.selectedOption.cost)}
        </div>
      </div>
    );
  }
}

export default FeatureCart;