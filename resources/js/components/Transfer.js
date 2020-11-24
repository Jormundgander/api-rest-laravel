import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Transfer() {
    const [originAccount, setOriginAccount] = useState()
    const [destinationAccount, setDestinationAccount] = useState()
    const [accounts, setAccounts] = useState()

    /*useEffect(() => {
        getAccounts()
    }, [])*/

    const handleSubmit = (e) => {
        e.preventDefault()
        transfer(
            originAccount,
            destinationAccount,
            e.target.amount.value
        )
    }

    /*const getAccounts = () => {
        axios.get(`http://127.0.0.1:8000/api/accounts`)
             .then(response => {
                setAccounts(response.data)
                console.log(response.data)
             })
    }*/

    const transfer = (origin, destination, amount) => {
        const data = {
            "type": "transfer",
            "origin": origin,
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
                <select
                    id="originAccount"
                    value={originAccount}
                    onChange={(e) => setOriginAccount(e.currentTarget.value)}
                >
                    <option value="1">1</option>
                    <option value="100">100</option>
                </select>

                <select
                    id="destinationAccount"
                    value={destinationAccount}
                    onChange={(e) => setDestinationAccount(e.currentTarget.value)}
                >
                    <option value="Destination1">Destination1</option>
                    <option value="111">111</option>
                </select>

                <input
                    id="amount"
                    placeholder="Monto a transferir"
                    name="amount"
                />

                <input
                    className="btn btn-primary text-white font-weight-bold"
                    type="submit"
                    value="Transferir"
                />
            </form>
        </div>
    )
}

export default Transfer;

if (document.getElementById('transfer')) {
    ReactDOM.render(<Transfer />, document.getElementById('transfer'));
}
