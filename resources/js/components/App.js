import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

function App() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
