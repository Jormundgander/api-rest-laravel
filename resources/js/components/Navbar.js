import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Account from './Account';
  import Deposit from './Deposit';
  import Transfer from './Transfer';
  import Withdraw from './Withdraw';
  import AccountsList from './includes/AccountsList'

function Navbar() {
    return (
        <Router>
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/accounts" className="nav-link active">Cuentas</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/deposit" className="nav-link">Depositar</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/transfer" className="nav-link">Transferir</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/withdraw" className="nav-link">Retirar</Link>
                    </li>
                </ul>
            </div>

            <div className="row w-50">
                <div className="col-md-8">
                    <AccountsList />
                </div>
            </div>

            <Switch>
                <Route path="/accounts">
                    <div className="row">
                        <div className="col-md-8">
                            <Account />
                        </div>
                    </div>
                </Route>
                <Route path="/deposit">
                    <div className="row">
                        <div className="col-md-8">
                            <Deposit />
                        </div>
                    </div>
                </Route>
                <Route path="/transfer">
                    <div className="row">
                        <div className="col-md-8">
                            <Transfer />
                        </div>
                    </div>
                </Route>
                <Route path="/withdraw">
                    <div className="row">
                        <div className="col-md-12">
                            <Withdraw />
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
