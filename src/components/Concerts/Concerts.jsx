import { useState, useEffect } from "react";
import "./Concerts.css";
import CarteConcert from "../CarteConcert/CarteConcert";

function Concerts() {
  let [concerts, setConcerts] = useState([]);

  useEffect(()=>{
    async function fetchData(){
        const reponse = await fetch("https://tp1-41f.onrender.com/liste-concerts");
        const listeConcerts = await reponse.json();
        setConcerts(listeConcerts);
    }

    fetchData();
  }, []);

    return (
        <>
            
        <div class="homepage-next-events">
        <div class="container">
            <div class="row">
                <div class="next-events-section-header">
                    <h2 class="entry-title">Nos prochains concerts</h2>
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus, pellentesque at facilisis et, scelerisque sit amet metus. Duis vel semper turpis, ac tempus libero. Maecenas id ultrices risus. Aenean nec ornare ipsum, lacinia.</p>
                </div>
            </div>

            <div class="row">
               {concerts.map((concert) => {
                    console.log(concert);
                    return <CarteConcert key={concert.id}  concert={concert}/>;
                })}
            </div>
        </div>
    </div>
  
        </>
  )
}

export default Concerts
