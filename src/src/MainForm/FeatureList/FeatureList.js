import React, { Component } from "react";
import FeatureOption from "./FeatureOption/FeatureOption";
import storedFeatures from "../../FEATURES/Features";
import USCurrencyFormat from "../../USCurrencyFormat/USCurrencyFormat";

import slugify from "slugify";

class FeatureList extends Component {
  render() {
    const options = storedFeatures[this.props.feature].map((item, idx) => {
      const itemHash = slugify(JSON.stringify(item));
      const selectedOption = this.props.selected[this.props.feature].name;
      return (
        <FeatureOption
          key={"fo-" + idx}
          itemHash={itemHash}
          feature={this.props.feature}
          item={item}
          selectedOption={selectedOption}
          updateFeature={this.props.updateFeature}
          currencyFormat={USCurrencyFormat}
        />
      );
    });

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default FeatureList;
