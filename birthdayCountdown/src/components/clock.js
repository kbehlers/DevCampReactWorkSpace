import React, { Component } from 'react';
class Clock extends Component {
    render() {
        return (
            <div className="clock">
            
                <div className="clock__days">
                    <label htmlFor="" className="clock__title clock__box">DAYS</label>
                    <label htmlFor="" className="clock__amount">20</label>
                </div>
                <div className="clock__hours">
                    <label htmlFor="" className="clock__title clock__box">HRS</label>
                    <label htmlFor="" className="clock__amount"></label>
                </div>
                <div className="clock__minutes">
                    <label htmlFor="" className="clock__title clock__box">MINS</label>
                    <label htmlFor="" className="clock__amount"></label>
                </div>
                <div className="clock__seconds">
                    <label htmlFor="" className="clock__title clock__box">SECS</label>
                    <label htmlFor="" className="clock__amount"></label>
                </div>
            </div>
        )
    }
}
export default Clock