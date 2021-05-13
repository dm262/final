import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navigation.css';

class Navigation extends React.Component {
    state = { currentPage: '/' }

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/')} to="/"
                          onClick={event => this.onTabClick(event, '/')}>
                        Dashboard
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className= {this.isActiveTab('/transactions')} to="/transactions"
                          onClick={event => this.onTabClick(event, '/transactions')}>
                        Transactions
                    </Link>
                </li>
            </ul>
        )
    }

};

export default Navigation;