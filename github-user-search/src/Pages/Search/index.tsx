import FormSearch from 'core/components/FormSearch';
import { Perfil } from 'core/types/Perfil';
import { makeRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import ImageLoader from './component/loaders/imageLoader';
import InfoLoader from './component/loaders/infoLoader';



import './styles.scss';

const Search = () => {
   
    const [perfil, setPerfil] = useState<Perfil>();
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(()=>{
       setIsLoading(false);
       makeRequest({url:`${localStorage.getItem('userGit')}`})
            .then(response => setPerfil(response.data))
            .finally(()=>{
                setIsLoading(true);
    })
       
    },[perfil]);

    return (
        
        <div >
            
            <FormSearch text="Encontre um perfil GitHub"/>
          
         
         
            <div className="git-hub-perfil-container">
                 <div className="git-hub-box-align">  
                   
                        <div className="col2">
                            {isLoading ?  <ImageLoader /> : (
                                <img src={perfil?.avatar_url} 
                                    alt={perfil?.avatar_url } 
                                    className="git-hub-perfil-foto"
                                />
                                )}
                        </div>
                   
            
                        <div className="git-hub-box-align">
                            
                            <div className=" box-repositorios-info">
                                  <div> Repositórios públicos: {perfil?.public_repos}</div>
                            </div>
                            <div className=" box-seguidores-info">
                                    Seguidores: {perfil?.followers}
                            </div>
                            <div className=" box-seguindo-info">
                                    Seguindo: {perfil?.following}
                                   
                            </div>
                          
                            <div className="git-hub-perfil-dados git-hub-dados-align">
                            
                             {isLoading ? <InfoLoader /> : ( 
                               <> 
                                    <div className="informacoes-title">
                                        <div> Informações</div>
                                        </div>
                                    <div className="informacoes-box informacoes-text">
                                            <div>Empresa: {perfil?.company} </div>
                                        </div>
                                        <div className="informacoes-box informacoes-text">
                                            <div>Website/Blog: {perfil?.blog}</div>
                                        </div>
                                        <div className="informacoes-box informacoes-text">
                                            <div> Localidade: {perfil?.location}</div>
                                        </div>
                                        <div className="informacoes-box informacoes-text">
                                            <div>Membro desde: {perfil?.created_at} </div>

                                        </div>   
                                </>  
                             )}
                            </div>
                            
                       </div>  
                      
                       
                   
               </div> 
                   
               <div className="col-2 git-hub-button-perfil">
                   <a href={`http://github.com/${perfil?.login}`}>
                    <button 
                        className="git-hub-button-perfil-text btn btn-primary git-hub-button-perfil">
                        Ver perfil
                   </button>
                   </a> 
                   
               </div>  
               
               
            </div> 
           
           
            
            
        </div> 
       
    )
}

export default Search; 