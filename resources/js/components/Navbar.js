import React from 'react';
import ReactDOM from 'react-dom';

import {
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/deposit" className="nav-link">Depositar</Link>
                </li>
                <li className="nav-item">
                    <Link to="/transfer" className="nav-link">Transferir</Link>
                </li>
                <li className="nav-item">
                    <Link to="/withdraw" className="nav-link">Retirar</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
