import React from 'react';
import { connect } from 'react-redux';

const renderList = (transactionList, transactionId) => {
    return transactionList.map((char, index) => {
        let classes = 'list-group-item d-flex justify-content-between align-items-center';
        let classesAmount = 'badge badge-primary badge-pull';
        if (char.type === 'withdraw'){
            classesAmount += ' badge-danger';
        }else if (char.type === 'deposit'){
            classesAmount += ' badge-success';
        }
        return (
            <li className={classes}
                key={index}>
                Transaction Id: { transactionId }
                <br />
                Account Id: { char.id }
                <br />
                Transaction Name: { char.name }
                <span className={classesAmount} >
                    { char.amount }
                </span>
            </li>
        );
    });
};

const Transactions = (props) => {
    const transactionList = renderList(props.transactions, props.transactionId);
    return (
        <div className="transactions container text-center">
            <h1>Transactions</h1>
            { transactionList }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions
    };
};

export default connect(mapStateToProps, null)(Transactions);