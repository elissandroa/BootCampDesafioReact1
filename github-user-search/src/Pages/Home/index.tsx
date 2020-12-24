import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';
const Home = () => {
    
    const history = useHistory();
    
    const handleSearch = () => {
        localStorage.removeItem('userGit');
        localStorage.setItem('userGit', "");
        history.push("/before");
    }
    
    
    return (
    <div className="home-container">
        <h1 className="home-title">
            Desafio do Capítulo 3, Bootcamp DevSuperior
        </h1>
        <div className="home-body">
            <p className="home-text-align">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
            Favor observar as instruções passadas no capítulo sobre a elaboração
            deste projeto.<br/>
            Este design foi adaptado a partir de Ant Design System for Figma, de 
            Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
        </div>
          <div className="home-button-container home-button-text"onClick={handleSearch}>
                <button className="btn btn-primary button-home">
                    Começar
                </button>
            </div>
      </div>

);
}
export default Home;