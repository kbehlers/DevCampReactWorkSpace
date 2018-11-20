import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Player from "./components/player";
import YoutubePlayer from './components/youtubePlayer';
import Playlist from "./components/playlist";
import Transcript from "./components/transcript";
import PlaylistToggle from './components/playlistToggle';


class App extends Component {
  render() {
    // const videoJsOptions = {
    //   autoplay: true,
    //   controls: true,
    //   sources: [{
    //     src: 'https://d32xj74kbqkoqn.cloudfront.net/videos/guide/video_file/1054/A_Developers_Guide_for_Hacking_Procrastination_to_Achieve_Success.mp4',
    //     type: 'video/mp4'
    //   }]
    // }
    return (
      <BrowserRouter>
        <div className='layout'>
          <div className='header-element'>React Router Simple Starter</div>
          {/* <ul className="header">
            <li><NavLink exact to="/">Home</NavLink> </li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul> */}
            {/* <Route exact path="/" render={() => <Player { ...videoJsOptions } />} /> */}
            <Route exact path="/" component={YoutubePlayer} />
            <Route path="/" component={Playlist} />
            <Route path='/' component={PlaylistToggle}/>
            <Route path="/" component={Transcript} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



