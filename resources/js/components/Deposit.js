import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AccountList from './includes/AccountsList'

function Deposit() {
    const [destination, setDestinationAccount] = useState()
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        getAccounts()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        deposit(
            destination,
            e.target.amount.value
        )
        console.log(destination)
    }

    const getAccounts = () => {
        axios.get(`http://127.0.0.1:8000/api/accounts`)
             .then(response => {
                const res = response.data
                setAccounts(res)
             })
    }

    const deposit = (destination, amount) => {
        const data = {
            "type": "deposit",
            "destination": destination,
            "amount": amount,
        }

        axios.post(`http://127.0.0.1:8000/api/event`, data)
             .then(response => {
                 console.log(response.data)
             })
    }

    return (
        <div className="mt-5">
            <h1 className="text-center mt-2">Depositar</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <select
                        id="destinationAccount"
                        value={destination}
                        onChange={(e) => setDestinationAccount(e.currentTarget.value)}
                    >
                        <option>Seleccione una cuenta</option>
                        {
                            accounts.map(item => (
                                <option key={ item.id }>
                                   { item.id } - ${ item.balance }
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        id="amount"
                        placeholder="Monto a depositar"
                        name="amount"
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <input
                        className="btn btn-primary text-white font-weight-bold"
                        type="submit"
                        value="Depositar"
                    />
                </div>
            </form>
        </div>
    )
}

export default Deposit;

if (document.getElementById('deposit')) {
    ReactDOM.render(<Deposit />, document.getElementById('deposit'));
}
