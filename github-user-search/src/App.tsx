import React from 'react';
import Navbar from 'core/components/Navbar';
import './core/assets/styles/custom.scss';
import Home from 'Pages/Home';


const App = () => {
    return (
        <div>
        <Navbar text="Bootcamp DevSuperior"/>
            <div>
                <Home />
            </div>
        </div>

        
    );
}

export default App;