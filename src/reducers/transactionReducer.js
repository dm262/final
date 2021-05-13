const DEFAULT_STATE = {
    accounts: [

    ]



};

const accountReducer = (state = DEFAULT_STATE, action) => {
    let newState = { accounts: [...state.accounts]};
    switch (action.type) {
        case 'INITIAL_LOAD':
            newState = {accounts: [...action.payload]}
            return newState;
        case 'WITHDRAW':
            const transaction = action.payload;
            const accountIndex = state.accounts.findIndex(char => char.id === transaction.id);
            const newBalance = state.accounts[accountIndex].balance - transaction.amount;
            newState.accounts[accountIndex].balance = newBalance;
            return newState;
        case 'DEPOSIT':
            const transaction1 = action.payload;
            const accountIndex1 = state.accounts.findIndex(char => char.id === transaction1.id);
            const newBalance1 = parseFloat(state.accounts[accountIndex1].balance) + parseFloat(transaction1.amount);
            newState.accounts[accountIndex1].balance = newBalance1;
            return newState;
        case 'DELETE_ACCOUNT':
            const id = action.payload;
            const accountIndex2 = newState.accounts.findIndex(char => char.id === id);
            newState.accounts.splice(accountIndex2);
            return newState;
        default:
            return state;
    }
};

export default accountReducer;