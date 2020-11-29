import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { DataContext } from './includes/ServiceProvider'

function Transfer() {

    const { accounts, setAccounts, getAccounts } = useContext( DataContext )

    const [datosEntrada, setDatosEntrada] = useState({
        originAccount: '',
        destinationAccount: '',
        amount: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        transfer(
            datosEntrada.originAccount,
            datosEntrada.destinationAccount,
            datosEntrada.amount
        )
    }

    const transfer = (origin, destination, amount) => {
        const data = {
            "type": "transfer",
            "origin": origin,
            "destination": destination,
            "amount": amount,
        }

        axios.post(`http://127.0.0.1:8000/api/event`, data)
             .then(response => {
                 setAccounts(Array.from(response.data))
             })
        console.log(data);
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
            <h1 className="text-center mt-2">Transferir</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="originAccount"
                        value={ datosEntrada.originAccount }
                        onChange={ handleChange }
                    >
                        <option>Seleccione billetera de origen</option>
                        {
                            accounts.map(item => (
                                <option key={ item.id }>
                                    { item.id } - $ { item.balance }
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <select
                        className="form-control"
                        name="destinationAccount"
                        value={ datosEntrada.destinationAccount }
                        onChange={ handleChange }
                    >
                        <option>Seleccione billetera de destino</option>
                        {
                            accounts.map(item => (
                                <option key={ item.id }>
                                    { item.id } - $ { item.balance }
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        name="amount"
                        placeholder="Monto a transferir"
                        value={ datosEntrada.amount }
                        onChange={ handleChange }
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <input
                        className="btn btn-primary text-white font-weight-bold"
                        type="submit"
                        value="Transferir"
                    />
                </div>
            </form>
        </div>
    )
}

export default Transfer;

if (document.getElementById('transfer')) {
    ReactDOM.render(<Transfer />, document.getElementById('transfer'));
}
