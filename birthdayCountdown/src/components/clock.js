import React, { Component } from 'react';
class Clock extends Component {
    render() {
        const time = this.props.timeRemaining;
        return (
            <div className="clock">
            
                <div className="clock__days">
                    <label htmlFor="" className="clock__title clock__box">DAYS</label>
                    <label htmlFor="" className="clock__amount">{time.days}</label>
                </div>
                <div className="clock__hours">
                    <label htmlFor="" className="clock__title clock__box">HRS</label>
                    <label htmlFor="" className="clock__amount">{time.hours}</label>
                </div>
                <div className="clock__minutes">
                    <label htmlFor="" className="clock__title clock__box">MINS</label>
                    <label htmlFor="" className="clock__amount">{time.minutes}</label>
                </div>
                <div className="clock__seconds">
                    <label htmlFor="" className="clock__title clock__box">SECS</label>
                    <label htmlFor="" className="clock__amount">{time.seconds}</label>
                </div>
            </div>
        )
    }
}
export default Clock