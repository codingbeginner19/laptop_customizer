import React from "react";

import FeatureList from "./FeatureList/FeatureList";
import storedFeatures from "../FEATURES/Features";

const mainForm = (props) => {
  const features = Object.keys(storedFeatures).map((feature, idx) => {
    const featureHash = feature + "-" + idx; //"Processor-0"
    /* feature option used to be here */
    return (
      <FeatureList
        key={"fl-" + idx}
        featureHash={featureHash}
        feature={feature}
        selected={props.selected}
        updateFeature={props.updateFeature}
      />
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
};

export default mainForm;
