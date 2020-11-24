import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Deposit() {

    const handleSubmit = (e) => {
        e.preventDefault()
        deposit(
            e.target.destination.value,
            e.target.amount.value
        )
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
        <div>
            <form onSubmit={ handleSubmit }>
                <input
                    id="destinationAccount"
                    placeholder="Cuenta a depositar"
                    name="destination"
                />

                <input
                    id="amount"
                    placeholder="Monto a depositar"
                    name="amount"
                />

                <input
                    className="btn btn-primary text-white font-weight-bold"
                    type="submit"
                    value="Depositar"
                />
            </form>
        </div>
    )
}

export default Deposit;

if (document.getElementById('deposit')) {
    ReactDOM.render(<Deposit />, document.getElementById('deposit'));
}
