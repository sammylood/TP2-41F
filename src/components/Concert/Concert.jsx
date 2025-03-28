import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function DetailConcert() {
    const  { id } = useParams();

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
  
  return (
    <div>
    test
      <h1>{concert.titre}</h1>
    </div>
  );
}

export default DetailConcert
