import React from 'react';
import { useState } from 'react';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { Perfil } from 'core/types/Perfil';
import Search from 'Pages/Search';
import { useHistory } from 'react-router-dom';




type Props = {
    text:string;
}


const FormSearch = ({text}:Props) =>{

     
    const [search, setSearch] = useState('');
    const [perfil, setPerfil] = useState<Perfil>();
    
    const history = useHistory();
   
   
    const handleSearch = () =>{
        makeRequest({url:search})
        .then(response => setPerfil(response.data));
        localStorage.setItem('userGit', search);
        history.push("/search");
        
        
       
 }

    
   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       setSearch(event.target.value);
       
    }
    
    return (
        <div className="form-search-container before-page-title">
                <h1>{text}</h1>
                <input 
                    type="text" 
                    value={search}
                    className="input-text"
                    placeholder="Usuário github"
                    onSubmit={handleSearch}
                    onChange={handleOnChange}
                />
              <button className="btn btn-primary button-form-search" onClick={handleSearch}>
                  Encontrar
              </button>

              
             
        </div>
       
    );
    
}

export default FormSearch;