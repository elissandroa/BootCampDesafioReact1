import React from 'react';
import Navbar from 'core/components/Navbar';
import './core/assets/styles/custom.scss';
import Routes from 'Routes';



const App = () => {
    return (
        <div>
        <Navbar text="Bootcamp DevSuperior"/>
            <div>
               <Routes />
            </div>
        </div>
     );
}

export default App;