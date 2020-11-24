import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Withdraw() {
    const [originAccount, setOriginAccount] = useState()
    const [destinationAccount, setDestinationAccount] = useState()
    const [accounts, setAccounts] = useState()

    /*useEffect(() => {
        getAccounts()
    }, [])*/

    const handleSubmit = (e) => {
        e.preventDefault()
        withdraw(
            originAccount,
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

    const withdraw = (origin, destination, amount) => {
        const data = {
            "type": "withdraw",
            "origin": origin,
            "amount": amount
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

                <input
                    id="amount"
                    placeholder="Monto a retirar"
                    name="amount"
                />

                <input
                    className="btn btn-primary text-white font-weight-bold"
                    type="submit"
                    value="Retirar"
                />
            </form>
        </div>
    )
}

export default Withdraw;

if (document.getElementById('withdraw')) {
    ReactDOM.render(<Withdraw />, document.getElementById('withdraw'));
}
