import React from 'react';
import ReactDOM from 'react-dom';

import Account from "./Account";
/*import { Transfer } from "./Transfer";
import { Withdraw } from "./Withdraw";*/

function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Cuentas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Depositar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Transferir</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Retirar</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
