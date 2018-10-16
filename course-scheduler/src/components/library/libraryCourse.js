import React, { Component } from 'react';
class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label htmlFor="" className="library-course__title">Problem Solving</label>
                {/* TODO: ICON COMPONENT  */}
                {/* TODO: ARROW COMPONENT */}
                {/* TODO: ACTION BUTTON COMPONENT */}
                <div className="library-course__description">
                    <label htmlFor="">Course Description</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam quis repellendus officiis minus ut ipsam mollitia quia non fugiat.</p>
                </div>
            </div>
        )
    }
}
export default LibraryCourse;