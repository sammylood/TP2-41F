import { useEffect, useState, useRef } from "react";
import "./FormAjoutConcert.css";
import { isLength, isInt, isDate, trim, escape, isEmpty, isIn } from "validator";
import { useNavigate } from "react-router-dom";

function FormAjoutConcert() {
    const formRef = useRef();
    const navigate = useNavigate();

    //==== Variables d'état
    // const [genres, setGenres] = useState([]);
    // const [formulaireValide, setFormulaireValidity] = useState(false);
    const [donneesConcert, setDonneesConcert] = useState({
        id: "",
        type: "", 
        titre: "",
        genre: "",
        poster: "",
        uri: "",
        artiste: [""],
        date: "",
        ville: "",
        lieu: "",
        prix: "", 
    });

    const [erreurs, setErreurs] = useState({
        
    });

    const [message, setMessage] = useState("");

    // Fonction qui gère les changements dans les champs
    async function onInputChange(evenement) {
        const champ = evenement.currentTarget;
        const nom = champ.name;
        let valeur = champ.value;

        //On nettoie
        // valeur = trim(valeur);

        // On crée un nouvel objet avec les nouvelles valeurs et on met à jour l'état
        const nouvellesValeur = { ...donneesConcert, [nom]: valeur };
        setDonneesConcert(nouvellesValeur);
    }

    // Fonction qui gère la soumission du formulaire
    async function onSubmitForm(evenement) {
        evenement.preventDefault();

        // Si le formulaire est valide
        // if (formulaireValide) {
        //     // On gère la base de la route du fetch
        //     let URL = import.meta.env.VITE_DEV_URL;
        //     if (import.meta.env.VITE_MODE == "PRODUCTION") {
        //         URL = import.meta.env.VITE_PROD_URL;
        //     }
        // }

            //On prépare la donnée
            const objDonnees = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(donneesConcert),
            };

            //On envoie
            const reponse = await fetch("https://tp1-41f.onrender.com/concerts", objDonnees);
            const listeConcerts = await reponse.json();
       
            // const reponse = await fetch(`${URL}/Concerts`, objDonnees);
            // const donneesReponses = await reponse.json();

            //On gère la réponse
            if (reponse.ok) {
                navigate("/Concerts");
           } 
            // else {
            //     setMessage("Veuillez corriger le formulaire");
            //     setTimeout(() => {
            //         setMessage("");
            //     }, 2000);
            // }
        
    }

    return (
        <div>

            <form action="" onSubmit={onSubmitForm} >
                <div className="input-group">
                    <label htmlFor="titre">Titre</label>
                    <input type="text" name="titre" id="titre" onChange={onInputChange} value={donneesConcert.titre} />
                    {/* {erreurs.titre && <div>{erreurs.titre}</div>} */}
                </div>

                <div className="input-group">
                    <label htmlFor="type">type</label>
                    <textarea
                        name="type"
                        id="type"
                        onChange={onInputChange}
                        value={donneesConcert.type}
                    />
                    {/* {erreurs.type && <div>{erreurs.type}</div>} */}
                </div>

                <div className="input-group">
                    <label htmlFor="artiste">Artiste</label>
                    <input
                        type="text"
                        name="artiste"
                        id="artiste"
                        onChange={onInputChange}
                        value={donneesConcert.artiste}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="text"
                        name="date"
                        id="date"
                        onChange={onInputChange}
                        value={donneesConcert.date}
                        required
                    />
                    {erreurs.date && <div>{erreurs.date}</div>}
                </div>

                <div className="input-group">
                    <label htmlFor="poster">Nom de l'image</label>
                    <input
                        type="text"
                        name="poster"
                        id="poster"
                        onChange={onInputChange}
                        value={donneesConcert.poster}
                    />
                </div>
{/* 
                <div className="input-checkbox-group">
                    <label htmlFor="genre-action">Action</label>
                    <input type="checkbox" id="genre-action" value="Action" onChange={onGenreChange} />
                    <label htmlFor="genre-drame">Drame</label>
                    <input type="checkbox" id="genre-drame" value="Drame" onChange={onGenreChange} />
                    <label htmlFor="genre-thriller">Thriller</label>
                    <input type="checkbox" id="genre-thriller" value="Thriller" onChange={onGenreChange} />
                    <label htmlFor="genre-aventure">Aventure</label>
                    <input type="checkbox" id="genre-aventure" value="Aventure" onChange={onGenreChange} />
                </div> */}

                <div className="input-group">
                     <input type="submit" value="Ajouter un Concert" /> {/*disabled={formulaireValide == false}*/} 
                </div>
            </form>
        </div>
    );
}

export default FormAjoutConcert;
