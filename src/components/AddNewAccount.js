import React from 'react';
import { connect } from 'react-redux';

import {newAccount} from '../actions';

class AddNewAccount extends React.Component {
    state = {name: '', balance: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.newAccount(this.state.name,this.state.balance);
        this.setState({name:'',balance:''})
    };


    render() {

        return(

            <div>
                <h2>Add New Account</h2>
                <form className="form-group" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Account Holder's Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
                        <label htmlFor="amount">Starting Amount</label>
                        <input type="text" className="form-control" id="amount" value={this.state.balance} onChange={(e) => this.setState({ balance: e.target.value })}/>

                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add Account</button>

                </form>
            </div>
        )
    }
}
export default connect(null, { newAccount})(AddNewAccount);