import React, { Component } from 'react';
class Discussion extends Component {
    constructor () {
        super();
        this.state = {
            pageTitle: "Discussion",
            currentTime: String(new Date())
        };
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({ currentTime: String(new Date())});
        }, 1000);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
      }
    
    componentWillUnmount() {
        clearInterval(this.liveTime);
    }
    render() {
        const { pageTitle, currentTime } = this.state;
        return (
            <div>
                <h1>{pageTitle}</h1>
                <div className="">{currentTime}</div>
            </div>
        )
    }
}
export default Discussion;