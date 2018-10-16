import React, { Component } from 'react';
import Icon from "../icon";
import Arrow from "../arrow";

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div class="library-course__title-arrow">
                    <label htmlFor="" className="library-course__title">Problem Solving</label>
                    {Icon("fas fa-check", 'library-course__icon')}

                </div>
                <Arrow className="library-course__arrow" />
                {/* TODO: ACTION BUTTON COMPONENT */}
                {Icon("fas fa-plus-circle", "library-course__action")}
                <div className="library-course__description">
                    <label htmlFor="">Course Description</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam quis repellendus officiis minus ut ipsam mollitia quia non fugiat.</p>
                </div>
            </div>
        )
    }
}
export default LibraryCourse;