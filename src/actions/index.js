export const initialLoad = (accounts) => {
    return {
        type: 'INITIAL_LOAD',
        payload: accounts
    }
}
export const withdraw = (name, amount, id) => {
    return {
        type: 'WITHDRAW',
        payload: {
            name, amount, id
        }
    }
}

export const deposit = (name, amount, id) => {
    return {
        type: 'DEPOSIT',
        payload: {
            name, amount, id
        }
    }
}

export const deleteAccount = (id) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: {
            id,
        }
    }
}
