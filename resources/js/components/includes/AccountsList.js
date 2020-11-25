import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function AccountsList() {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        getAccounts()
    }, [])

    const getAccounts = () => {
        axios.get(`http://127.0.0.1:8000/api/accounts`)
             .then(response => {
                const res = response.data
                console.log(res)
                setAccounts(res)
             })
    }

    return (
        <div className="col-md-4">
            <h1 className="mt-5">Billeteras</h1>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Crear nueva billetera
            </button>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>SALDO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(item => (
                            <tr>
                                <th key={ item.id }>{ item.id }</th>
                                <th>{ item.balance }</th>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AccountsList;

if (document.getElementById('accounts-list')) {
    ReactDOM.render(<AccountsList />, document.getElementById('accounts-list'));
}
