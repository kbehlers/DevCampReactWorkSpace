import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation';
import PageContent from "./page-content";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <PageContent />
      </div>
    );
  }
}

export default App;
