import { combineReducers } from "redux";


const DEFAULT_STATE = {
    accounts: [
        /*{ "_id": 1, "name": "Lannisters", "balance": 1189.78 },
         { "_id": 2, "name": "Starks", "balance": 567.71 },
         { "_id": 3, "name": "Baratheons", "balance": 31.26 },
         { "_id": 4, "name": "Targaryens", "balance": 34.75 },
         { "_id": 5, "name": "Greyjoys", "balance": 9.03 },
         { "_id": 6, "name": "Tyrells", "balance": 1133.45 },
         { "_id": 7, "name": "Martells", "balance": 737.90 },
         { "_id": 8, "name": "Tullys", "balance": 483.56 },
         { "_id": 9, "name": "Arryns", "balance": 1035.83 },
         { "_id": 10, "name": "Free Folk", "balance": -134.34 }*/
    ]
};


const sortAccounts = (state) => {
    let newState = {
        accounts: [...state.accounts]
    };
    newState.accounts.forEach(accounts => {

    });

    return newState;

};



const accountsReducer = (state= DEFAULT_STATE, action) => {
    switch(action.type) {
        case 'SET_ACCOUNTS':

            return action.payload;

        case 'DEPOSIT_MONEY':
            let currentIdDeposit = state.accounts.findIndex(acc => {
                return acc._id == action.payload._id;
            });

            state.accounts[currentIdDeposit].balance = state.accounts[currentIdDeposit].balance + parseInt(action.payload.amount);

            return sortAccounts(state);

        //  break;
        case 'WITHDRAW_MONEY':
            let currentIdWithdraw = state.accounts.findIndex(acc => {
                return acc._id == action.payload._id;
            });

            state.accounts[currentIdWithdraw].balance = state.accounts[currentIdWithdraw].balance - parseInt(action.payload.amount);

            return sortAccounts(state);
        case 'ADD_NEW_ACCOUNT':

            let name = action.payload;
            name._id = state.accounts.length + 1;
            name.balance = action.payload.balance;

            state.accounts.push(name);

            return sortAccounts(state);
        case 'DELETE_ACCOUNT':
            const currentIdDetele = state.accounts.findIndex(acc => {
                return acc._id === action.payload._id;});
            state.accounts.splice(currentIdDetele, 1);

            return sortAccounts(state);



        default :
            return state;
    }

};

export default combineReducers({
    accounts: accountsReducer
});