import React, { Component } from 'react';
import FeatureOption from './components/FeatureOption/FeatureOption';
import FeatureList from './components/FeatureList/FeatureList';
import FeatureCart from './components/FeatureCart/FeatureCart';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;//"Processor-0"
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        const selectedOption = this.state.selected[feature].name;
        return (
          <FeatureOption itemHash={itemHash}
            feature={feature}
            item={item}
            selectedOption={selectedOption}
            updateFeature={this.updateFeature}
            currencyFormat={USCurrencyFormat}
          />
        );
      });
      return (
        <FeatureList
          featureHash={featureHash}
          feature={feature}
          options={options}
        />
      )
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <FeatureCart
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
          USCurrencyFormat={USCurrencyFormat}
        />
      )

    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        {/* could be a child component */}
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
