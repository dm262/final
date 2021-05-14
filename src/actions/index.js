



export const setAccounts = accounts => {

    return {
        type: 'SET_ACCOUNTS',
        payload: {
            accounts
        }
    }
};

export const deposit = (_id, amount) => {
    return {
        type: 'DEPOSIT_MONEY',
        payload: {
            _id, amount
        }
    };
};
export const withdraw = (_id, amount) => {
    return {
        type: 'WITHDRAW_MONEY',
        payload: {
            _id, amount
        }
    };
};
export const newAccount = (name,balance) => {
    return{
        type: 'ADD_NEW_ACCOUNT',
        payload: {
            name,balance
        }
    };
};
export const deleteAccount = (_id) => {
    return{
        type: 'DELETE_ACCOUNT',
        payload: {
            _id
        }
    };
};
