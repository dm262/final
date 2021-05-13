import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { initialLoad } from '../actions';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Navigation from './Navigation';
import Account  from './Account';
import './styles/index.css';


const App = (props) => {
    useEffect(() => {
        axios.get('http://my-json-server.typicode.com/dm262/final')
            .then(response => {
                props.initialLoad(response.data);
            }).catch(error => {
            return error.message;
        });
    });
    return (
        <div className='topDiv'>
            <Navigation />
            <div>
                <Route path="/" exact component={ Dashboard } />
                <Route path="/transactions" component={ Transactions } />
                <Route path="/account/:id" component={ Account } />
            </div>
        </div>
    )
}

export default connect(null, { initialLoad })(App);