import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { DataContext } from './includes/ServiceProvider'

function Deposit() {
    const { accounts, setAccounts, getAccounts } = useContext( DataContext )

    const [datosEntrada, setDatosEntrada] = useState({
        destinationAccount: '',
        amount: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        deposit(
            datosEntrada.destinationAccount,
            datosEntrada.amount
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
                setAccounts(Array.from(response.data))
             })

        getAccounts()
    }

    const handleChange = e => {
        setDatosEntrada({
            ...datosEntrada,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="mt-5">
            <h1 className="text-center mt-2">Depositar</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="destinationAccount"
                        value={ datosEntrada.destinationAccount }
                        onChange={ handleChange }
                    >
                        <option>Seleccione una cuenta</option>
                        {
                            accounts.map((item, index) => (
                                <option key={ index }>
                                { item.id } - ${ item.balance }
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        name="amount"
                        placeholder="Monto a depositar"
                        value={ datosEntrada.amount }
                        onChange={ handleChange }
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
