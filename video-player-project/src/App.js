import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Player from "./components/player";
import Playlist from "./components/playlist";
import Transcript from "./components/transcript";


class App extends Component {
  render() {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }]
    }
    return (
      <BrowserRouter>
        <div>
          <h1>React Router Simple Starter</h1>
          {/* <ul className="header">
            <li><NavLink exact to="/">Home</NavLink> </li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul> */}
          <div className="content">
        <Route exact path="/" render={() => <Player { ...videoJsOptions } />} />
            <Route path="/" component={Playlist} />
            <Route path="/" component={Transcript} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



