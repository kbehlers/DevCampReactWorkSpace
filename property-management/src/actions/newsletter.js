import { 
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from '../actions/types';

import axios from 'axios';
import {ROOT_URL} from '../config';

export function fetchNewsletters() {
    
    return function(dispatch) {
        var token = localStorage.getItem('token');
        const headers = {headers: {authorization: token}}
        axios.get(`${ROOT_URL}/newsletters`, headers)
        .then(response => {
            dispatch( {
                type: SET_NEWSLETTERS,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    
}

export function fetchNewsletterWithId(id) {
    return {
        type: FETCH_NEWSLETTER_ID,
        payload: id
    }
}

export function createNewNewsletter(formData, success) {
    const token = localStorage.getItem('token');
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }
    return function() {
        axios.post(`${ROOT_URL}/newsletter/new`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: token
            }
        })
        .then(response => {
            console.log('POSTED')
            console.log(response.data);
            success();
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export function editNewsletter(itemId, formData, success) {
    const token = localStorage.getItem('token');
    return function() {
        axios.post(`${ROOT_URL}/newsletter/edit/${itemId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: token
                }   
            })
            .then(response => {
                console.log('POSTED')
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}