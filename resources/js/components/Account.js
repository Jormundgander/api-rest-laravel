import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Account() {
    const [account, setAccount] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        getAccount(e.target.account.value)
    }

    const getAccount = (account_id) => {
        axios.get(`http://127.0.0.1:8000/api/balance/${account_id}`)
             .then(response => {
                 console.log(response.data)
             })
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input
                    id="searchAccount"
                    placeholder="Busque una cuenta"
                    name="account"
                />

                <input
                    className="btn btn-primary text-white font-weight-bold"
                    type="submit"
                    value="Buscar"
                />
            </form>
        </div>
    )
}

export default Account;

if (document.getElementById('account')) {
    ReactDOM.render(<Account />, document.getElementById('account'));
}
