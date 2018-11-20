import React, { Component } from 'react';
class PlaylistToggle extends Component {

    handleClick() {
        document.getElementById('playlist-toggle-id').classList.toggle('change');
    }
    render() {
        return (
            <div id='playlist-toggle-id' className="playlist-toggle" onClick={this.handleClick}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        )
    }
}
export default PlaylistToggle;