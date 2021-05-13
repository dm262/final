import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/dashboard.css';
import Balance from "./Balance";
import { deleteAccount } from "../actions";


class Dashboard extends React.Component {

    renderList() {



        return this.props.accounts.map((char, index) => {
            return(
                <div className='card' key={index}>
                    <div className='card-body justify-content-center'>
                        <h2 className='card-header'>{ char.name }'s <br /> Account</h2>
                        <Balance balance={ char.balance } id={ char.id }/>
                        <Link to ={ `/account/${char.id}` }>
                            <button type='button'
                                    className='btn btn-primary'>
                                Account Details
                            </button>
                        </Link>
                        <button type='button'
                                className='btn btn-danger'
                                onClick= { () => this.props.deleteAccount(char.id) }>
                            Delete
                        </button>
                    </div>
                </div>
            );
        });
    }

    render() {
        const accountList = this.renderList();
        return (
            <div className="dashboard container text-center">
                <h1>Dashboard</h1>
                { accountList }
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    };
};

export default connect(mapStateToProps, { deleteAccount })(Dashboard);