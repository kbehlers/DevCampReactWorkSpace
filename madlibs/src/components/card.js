import React, {Component} from 'react';

import Input from './input'

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'blue',
            pluralNoun: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log(event.target.value)
        this.setState({color:event.target.value})
    }
    render() {
        return (
            <div className="card">
            <h1>{this.state.color}</h1>

                { Input('Number', 'Noun' ) }
                { Input('Items', 'Plural Noun' ) }
                <input onChange={(event) => this.handleInputChange(event)}/>
            </div>
        )
    }
}

export default Card;