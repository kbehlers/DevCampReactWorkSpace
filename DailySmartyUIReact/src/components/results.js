import React, { Component } from 'react';
import Logo from './logo';

import SearchBar from './searchBar';

class Results extends Component {
    render() {
        return (
            <div className=''>
                <Logo size={55}/>
                <SearchBar/>
            </div>
        )
    }
}
export default Results;