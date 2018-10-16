import React, { Component } from 'react';

class ScheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <label htmlFor="">{this.props.title}</label>
            </div>
        )
    }
}
export default ScheduleCourse;