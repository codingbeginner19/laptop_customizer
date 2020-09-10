import React from "react";

import Option from "./Option/Option";
import Total from "./Total/Total";

const mainSummary = (props) => {
  //header could be in here
  const options = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];
    return (
      <Option
        key={"opt-" + idx}
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {options}
      <Total selected={props.selected} />
    </section>
  );
};
export default mainSummary;
