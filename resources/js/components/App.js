import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter';
import { DataContext } from './includes/ServiceProvider'


function App() {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        getAccounts()
    }, [])

    const getAccounts = () => {
        axios.get(`http://127.0.0.1:8000/api/accounts`)
             .then(response => {
                const res = Array.from(response.data)
                setAccounts(res)
            })
    }

    return (
        <DataContext.Provider value={{ accounts, setAccounts, getAccounts }}>
            <div className="pl-3 pr-3">
                <div className="row">
                    <div className="col-md-12">
                        <AppRouter />
                    </div>
                </div>
            </div>
        </DataContext.Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
