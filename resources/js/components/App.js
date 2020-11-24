import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

import Account from './Account';
import Deposit from './Deposit';
import Transfer from './Transfer';
import Withdraw from './Withdraw';

function App() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Account />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Deposit />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Transfer />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Withdraw />
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
