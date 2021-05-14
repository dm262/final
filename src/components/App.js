import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AccountList from "./AccountList";
import PageTabs from "./PageTab";
import AddNewAccount from "./AddNewAccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import { setAccounts } from "../actions";


class App extends React.Component {

    state = {
        view: 'page1',
    };

    componentDidMount() {

        this.getData();

    }

    getData() {
        axios.get('http://my-json-server.typicode.com/donark87/IS322-Final-Project-React-redux/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {

        });
    }

    onViewChange(view) {
        this.setState({ view });
    }

    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }



    render() {
        const { view } = this.state;

        switch (view) {
            case 'page1':
                return (this.wrapPage(
                    <AccountList />
                ));
            case 'page2':
                return (this.wrapPage(
                    <AddNewAccount />
                ));
            case 'page3':
                return (this.wrapPage(
                    <Deposit />
                ));
            case 'page4':
                return (this.wrapPage(
                    <Withdraw />
                ));
            default:
                return (this.wrapPage(
                    <h2>Invalid Tab, choose another</h2>
                ));
        }

    }

}
const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors
    };
};

export default connect(mapStateToProps, { setAccounts })(App);