import React, { Component } from 'react';

import Header from "./header";

class Home extends Component {
  render() {
    return (
      <div className='home'>
      { Header("Bottega Mad Libs", "Fill out the fields below and click the generate button to see the Mad Lib Story.") }
      </div>
    );
  }
}


export default Home;