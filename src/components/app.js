import React, { Component } from 'react';
import Greeting from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="madLib-heading">
            <h1>Bottega Mad Libs</h1>
            <div className="madLib-subHeading">
              Fill out the fields below and click the generate button <br/> to see the Mad Lib story.
            </div>
          </div>
          <Greeting name="Ian" />
        </div>
      </div>
    );
  }
}
