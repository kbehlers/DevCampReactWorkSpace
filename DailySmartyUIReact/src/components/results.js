import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';

import SearchBar from './searchBar';
import ResultsPosts from './resultsPosts';

class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }
    render() {
        return (
            <div className=''>
                <Logo size={55}/>
                <SearchBar page='results' onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                <ResultsPosts/>
            </div>
        )
    }
}
export default connect(null,actions)(Results);