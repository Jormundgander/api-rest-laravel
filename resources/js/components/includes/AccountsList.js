import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { DataContext } from './ServiceProvider'

function AccountsList() {

    const { accounts, setAccounts, getAccounts } = useContext( DataContext )

    const addAccount = (account) => {
        const data = {
            "type": "create",
            "origin": account,
        }

        axios.post(`http://127.0.0.1:8000/api/event`, data)
             .then(response => {
                setAccounts(Array.from(response.data))
             })
        getAccounts()
    }

    const deleteAccount = (account) => {
        const data = {
            "type": "delete",
            "origin": account,
        }

        axios.post(`http://127.0.0.1:8000/api/event`, data)
             .then(response => {
                 console.log(response.data)
             })

        getAccounts()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addAccount(e.target.account.value)
        getAccounts()
    }

    return (
        <Router>
            <div className="row">
                <div className="col-md-6">
                    <h1 className="mt-5 text-center">Billeteras</h1>
                    <span>
                        <Link to="/createAccount">Crear billetera</Link>
                    </span>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>CÓDIGO</th>
                                <th>SALDO</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                accounts.map((item, index) => (
                                    <tr>
                                        <th>{ item.id }</th>
                                        <th>{ item.balance }</th>
                                        <th className="deleteAccount"
                                            onClick={() => deleteAccount(item.id)}
                                        >x</th>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <Switch>
                    <Route path="/createAccount">
                        <div className="col-md-6 mt-5">
                            <div className="mx-auto mt-1">
                                <h1 className="text-center">Crear</h1>
                                <form onSubmit={ handleSubmit }>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            id="addAccount"
                                            placeholder="Número de billetera"
                                            name="account"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <input
                                            className="btn btn-primary text-white font-weight-bold"
                                            type="submit"
                                            value="Crear"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AccountsList;

if (document.getElementById('accounts-list')) {
    ReactDOM.render(<AccountsList />, document.getElementById('accounts-list'));
}
