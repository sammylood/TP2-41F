import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./Concert.css";

function DetailConcert() {
    const  { id } = useParams();
    const navigate = useNavigate();

    let [concert, setConcert] = useState({ 
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
  
    useEffect(() => {
        async function fetchData(){
       const reponse = await fetch(`https://tp1-41f.onrender.com/concerts/${id}`);
       const donneesConcert = await reponse.json();
       setConcert(donneesConcert);
    }
    
    fetchData();
    }, [id]);

    async function supprimer(){
      const objRequete = {
        method: "DELETE",
      };
      const reponse = await fetch(`https://tp1-41f.onrender.com/concerts/${id}`, objRequete);

      if(reponse.ok == true){
        navigate("/liste-concerts");
      }
    }
  
  return (
    <div class="single-concert container">
    
       <div class="col-12 single-event  animate__animated animate__fadeIn animate-delay-1s">
            <figure class="events-thumbnail">
                <span><img src={`../img/${concert.poster}`} alt={concert.titre}/></span>
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h1 class="entry-title"><span>{concert.titre}</span> </h1>

                        <div class="event-location"><span>{concert.lieu}</span> </div>

                        <div class="event-date">{concert.date}</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        À partir de:<span>{concert.price}</span>
                    </div>
                </header>

                <footer class="entry-footer">
                    <span>En savoir plus</span> 
                </footer>
            </div>
            <div class="btn btn-danger" onClick={supprimer}>Supprimer le concert</div>
        </div>
    </div>
  );
}

export default DetailConcert
