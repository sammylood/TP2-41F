import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(); //Context qu'on exporte 

function AuthContextProvider(props) { //Provider de context
    const { children } = props;
    const [jeton, setJeton] = useState(null);
    const [utilisateur, setUtilisateur] = useState(null);

    useEffect(()=>{
        const jetonSauvegarde = localStorage.getItem("jeton");
        if(jetonSauvegarde && validerJeton(jetonSauvegarde)){
            setJeton(jetonSauvegarde);
        }else{
            deconnexion();
        }
    }, []);

    useEffect(()=>{
        if(validerJeton(jeton)){
            const {Nom, courriel, adminStatut} = jwtDecode(jeton);
            setUtilisateur({Nom, courriel, adminStatut}); 
        }else{
            setUtilisateur(3);
        }
    }, [jeton]);

    function validerJeton(jeton){ //Vérification du jeton
        if(!jeton) return false;
        try{
            const decode = jwtDecode(jeton);
            return decode.exp * 1000 > Date.now(); //On compare la date d'expiration du jeton avec maintenant pour voir s'il est actif
        }
        catch(error){
            return false;
        }
    }
    function connexion(nouveauJeton){ //attribuer le jeton quand on se connecte
        if(validerJeton(nouveauJeton)){
    localStorage.setItem("jeton", nouveauJeton);
    setJeton(nouveauJeton)
            setJeton(nouveauJeton);
    
        }
    }
    function deconnexion(){ //
        localStorage.removeItem("jeton")
        setJeton(null);
        setUtilisateur(null);
    }
  
    return (
    <AuthContext.Provider value={{jeton, utilisateur, validerJeton, connexion, deconnexion}}> {/*export des composants à intégrer dans l'application (page web)*/}
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
