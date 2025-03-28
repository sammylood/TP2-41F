import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Concert() {
    const  { id } = useParams();
    const [concert, setConcert] = useState({ titre: "", genre: "" });
  
    useEffect(() => {
        fetch(`https://tp1-41f.onrender.com/concert/${id}`)
        .then((response) => response.json())
        .then((data) => setConcert(data));
    }, [id]);
  
  return (
    <div>
    test
      <h1>{concert.titre}</h1>
    </div>
  );
}

export default Concert
