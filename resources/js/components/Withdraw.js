import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { DataContext } from './includes/ServiceProvider'

function Withdraw() {
    const { accounts, setAccounts, getAccounts } = useContext( DataContext )

    const [datosEntrada, setDatosEntrada] = useState({
        originAccount: '',
        amount: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        withdraw(
            datosEntrada.originAccount,
            datosEntrada.amount
        )
    }

    const withdraw = (origin, amount) => {
        const data = {
            "type": "withdraw",
            "origin": origin,
            "amount": amount
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
            [ e.target.name ] : e.target.value
        })
    }

    return (
        <div className="mt-5">
            <h1 className="text-center mt-2">Retirar</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="originAccount"
                        value={ datosEntrada.originAccount }
                        onChange={ handleChange }
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
                        name="amount"
                        placeholder="Monto a retirar"
                        value={ datosEntrada.amount }
                        onChange={ handleChange }
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <input
                        className="btn btn-primary text-white font-weight-bold"
                        type="submit"
                        value="Retirar"
                    />
                </div>
            </form>
        </div>
    )
}

export default Withdraw;

if (document.getElementById('withdraw')) {
    ReactDOM.render(<Withdraw />, document.getElementById('withdraw'));
}
