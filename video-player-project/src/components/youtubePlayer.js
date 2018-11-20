import React, { Component } from 'react';
import reframe from 'reframe.js';

class YoutubePlayer extends Component {
    constructor(props) {
      super(props);
      this.init();
      this.video = '1cH2cerUpMQ' //video id
  
      window['onYouTubeIframeAPIReady'] = (e) => {
        this.YT = window['YT'];
        this.reframed = false;
        this.player = new window['YT'].Player('YTplayer', {
          videoId: this.video,
           playerVars: {
            modestbranding: '1'
        },
          events: {
            'onStateChange': this.onPlayerStateChange.bind(this),
            'onError': this.onPlayerError.bind(this),
            'onReady': (e) => {
              if (!this.reframed) {
                this.reframed = true;
                reframe(e.target.a);
              }
            }
          }
        });
      };
    }

    handleClick() {
        this.player.seekTo(100);
    }
    render() {
      const style = `.max-width-1366 { max-width: 1366px; margin: 0 auto; }`;
      return (<div className='player-wrapper'>
          <style>{style}</style>
        <div className="max-width-1366">
        <div className="embed-responsive embed-responsive-16by9" id="YTplayer">
        </div>
      </div>
        </div>
      );
    }
    init() {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  
    onPlayerStateChange(event) {
      console.log(event)
      switch (event.data) {
        case window['YT'].PlayerState.PLAYING:
          if (this.cleanTime() == 0) {
            console.log('started ' + this.cleanTime());
          } else {
            console.log('playing ' + this.cleanTime())
          };
          break;
        case window['YT'].PlayerState.PAUSED:
          if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
            console.log('paused' + ' @ ' + this.cleanTime());
          };
          break;
        case window['YT'].PlayerState.ENDED:
          console.log('ended ');
          break;
      };
    };
    //utility
    cleanTime() {
      return Math.round(this.player.getCurrentTime())
    };
    onPlayerError(event) {
      switch (event.data) {
        case 2:
          console.log('' + this.video)
          break;
        case 100:
          break;
        case 101 || 150:
          break;
      };
    };
  }
export default YoutubePlayer;