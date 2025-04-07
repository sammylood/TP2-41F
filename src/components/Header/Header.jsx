import "./Header.css"
import { NavLink, Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";


function Header() {
    const {jeton, connexion, deconnexion} = useContext(AuthContext) //importation du context avec les données voulues
    const formRef = useRef();

    async function envoiFormulaire(evenement){
    try{   
    evenement.preventDefault(); //Bloquer l'envoi
        const {mdp, courriel} = formRef.current;

        //Récupérer le body
        const body  = {mdp: mdp.value, courriel: courriel.value };
        const options = {
            body: JSON.stringify(body),
            headers:{
                "Content-Type":"application/json",
            },
            method: "POST",
        };
    let URL = "http://localhost:3000/utilisateurs/connexion";
        const reponse = await fetch(URL, options);
        const donnees = await reponse.json();
        if(reponse.ok){
            // console.log(donnees);
            connexion(donnees.jeton);//Sauvegarder l'info si la connexion est bonne
        } else{
            //Affiche erreur
        }
    
        console.log(donnees);
    }catch(erreur){
        console.log(erreur);
    }
}
  return (
    <>
    <header class="site-header">
        <div class="header-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-10 col-lg-2 order-lg-1">
                        <div class="site-branding">
                            <div class="site-title">
                            <a to="/"> <img src="src/assets/images/logo.png" alt="logo" /> </a>
                            </div>{/* .site-title */}
                        </div>{/* .site-branding */}
                    </div>{/* .col */}

                    <div class="col-2 col-lg-7 order-3 order-lg-2">
                        <nav class="site-navigation">
                            <div class="hamburger-menu d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>{/* .hamburger-menu */}
                        {/* TO DO : Fix Menu responsive */}

                            <ul>
                                <li><NavLink to ={"/"}>Home</NavLink></li>
                                <li><NavLink to ={"/"}>About us</NavLink></li>
                                <li><NavLink to ={"/liste-concerts"}>Concerts</NavLink></li>
                                <li><NavLink to ={"/"}>News</NavLink></li>
                                <li><NavLink to ={"/"}>Contact</NavLink></li>
                            </ul>
                        </nav>{/* .site-navigation */}
                    </div>{/* .col */}

                    <div class="col-lg-3 d-none d-lg-block order-2 order-lg-3">

                    {!jeton && (
                        <form action="" ref={formRef} onSubmit={envoiFormulaire}>
                            <label htmlFor="courriel">Courriel</label>
                            <input className="input-entry" type="email" name="courriel" id="courriel" placeholder="courriel" />
                            <label htmlFor="mdp">Mot de passe</label>
                            <input className="input-entry" type="password" name="mdp" id="mdp" />
                            <input className="btn gradient-bg" type="submit" value="Connexion" />
                        </form>
                    )}
                    {jeton && <div className="btn gradient-bg" onClick={deconnexion}>Deconnexion</div>}    

                        
                        {/* <div class="buy-tickets">
                            <Link class="btn gradient-bg" to={"/"}>Buy Tickets</Link>
                        </div> */}
                        {/* .buy-tickets */}
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container-fluid */}
        </div>{/* .header-bar */} 
    </header>{/* .site-header */}
    </>
  );

}

export default Header;
