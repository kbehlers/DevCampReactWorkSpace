import React, { Component } from 'react';
import Header from './headernav/header';
import NavBar from './headernav/navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <h1>DevCamp React Starter</h1>
        {this.props.children}
        <Header/>
        <NavBar/>
      </div>
    );
  }
}

export default Layout;
