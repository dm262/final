import React from 'react';
import { connect } from 'react-redux';

import { deposit } from '../actions';
import { withdraw } from '../actions';
import { deleteAccount } from "../actions";

class AccountList extends React.Component {

    renderList (i) {
        let accountArr = this.props['accounts'];
        accountArr = accountArr.filter(acc => {
            if(i == 1){
                if(acc._id % 2 !== 0){
                    return true;
                }
                else {
                    return false
                }
            }
            else if (i == 2){
                if(acc._id % 2 == 0){
                    return true;
                }
                else {
                    return false
                }
            }

        });

        return accountArr.map(acc => {
            return (
                <div className="card" style={{width: '18rem'}} key={acc.id}>
                    <div className="card-body">
                        <h5 className="card-title">Account # { acc._id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Name: {acc.name}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Balance: <h6 class="text-primary" style={{display:'inline'}}>${acc.balance}</h6></h6>
                        <button type='button' onClick={() => {this.props.deposit(acc._id,10)}} className="btn btn-success">
                            Deposit $10
                        </button>
                        <button type='button' onClick={() => {this.props.withdraw(acc._id,10)}} className="btn btn-danger" style={{marginLeft: '10px'}}>
                            Withdraw $10
                        </button><br/>
                        <button type='button' onClick={() => {this.props.deleteAccount(acc._id)}} className="btn btn-warning" style={{marginTop: '10px'}}>
                            Delete Account
                        </button>
                    </div>
                </div>

            );


        });


    }


    render() {
        let accountListOdd = this.renderList(1);
        let accountListEven = this.renderList(2);

        return <div>
            <ul className="list-group list-group-horizontal" >
                <li className="list-group-item list-group-item-secondary" ><ul className="list-group" style={{listStyleType:'none'}}> <li>{ accountListOdd }</li></ul> </li>
                <li className="list-group-item list-group-item-secondary" ><ul className="list-group" style={{listStyleType:'none'}}> <li>{ accountListEven }</li></ul> </li>
            </ul>
        </div>




    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts

    }

};
export default connect(mapStateToProps, {deposit, withdraw, deleteAccount}) (AccountList);
