import React from 'react';
import { connect } from 'react-redux';

import {withdraw} from '../actions';

class Withdraw extends React.Component {
    state = {_id: '', amount: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.withdraw(this.state._id,this.state.amount);
        this.setState({_id:'',amount:''})
    };


    render() {

        return(

            <div>
                <h2>Withdraw money</h2>
                <form className="form-group" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Account ID</label>
                        <input type="text" className="form-control" id="name" value={this.state._id} onChange={(e) => this.setState({ _id: e.target.value })}/>
                        <label htmlFor="amount">Withdraw Amount</label>
                        <input type="text" className="form-control" id="amount" value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })}/>

                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>

                </form>
            </div>
        )
    }
}
export default connect(null, {withdraw})(Withdraw);