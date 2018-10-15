import React, { Component } from 'react';
class Clock extends Component {
    render() {
        return (
            <div className="clock">
            
                <div className="clock__days">
                    <label htmlFor="" className="clock__title">DAYS</label>
                    <label htmlFor="" className="clock__amount"></label>
                </div>
                <div className="clock__hours">
                    <label htmlFor="" className="clock__title">HOURS</label>
                    <label htmlFor="" className="clock__amount"></label>
                </div>
                <div className="clock__minutes">
                    <label htmlFor="" className="clock__title">MINUTES</label>
                    <label htmlFor="" className="clock__amount"></label>
                </div>
                <div className="clock__seconds">
                    <label htmlFor="" className="clock__title">SECONDS</label>
                    <label htmlFor="" className="clock__amount"></label>
                </div>
            </div>
        )
    }
}
export default Clock