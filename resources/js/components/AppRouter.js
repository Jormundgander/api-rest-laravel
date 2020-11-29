import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from './Navbar';

import Deposit from './Deposit';
import Transfer from './Transfer';
import Withdraw from './Withdraw';
import AccountsList from './includes/AccountsList'

export default function AppRouter() {

    return (
        <Router>

            <div className="row">
                <div className="col-md-12">
                    <Navbar />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <AccountsList />
                </div>
                <div className="col-md-4 mx-auto mt-2 pl-5 pr-5">
                    <Switch>
                        <Route exact path="/deposit">
                            <Deposit />
                        </Route>
                        <Route path="/transfer">
                            <Transfer />
                        </Route>
                        <Route path="/withdraw">
                            <Withdraw />
                        </Route>
                    </Switch>
                </div>
            </div>

        </Router>
    )
}
