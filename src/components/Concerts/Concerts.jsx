import { useState, useEffect } from "react";
import "./Concerts.css";
import CarteConcert from "../CarteConcert/CarteConcert";

function Concerts() {
  let [concerts, setConcerts] = useState([]);

  useEffect(()=>{
    async function fetchData(){
        const reponse = await fetch("https://tp1-41f.onrender.com/concerts");
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
                    <h2 class="entry-title">Our next events</h2>
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus, pellentesque at facilisis et, scelerisque sit amet metus. Duis vel semper turpis, ac tempus libero. Maecenas id ultrices risus. Aenean nec ornare ipsum, lacinia.</p>
                </div>
            </div>

            <div class="row">
               {concerts.map((concert) => {
                    return <CarteConcert key={concert.id}  concert={concert}/>;
                })}
{/* 
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="next-event-wrap">
                        <figure>
                            <a href="#"><img src="images/next1.jpg" alt="1" /></a>

                            <div class="event-rating">7.9</div>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">TED Talk California</h3>

                            <div class="posted-date">Saturday <span>Jan 27, 2018</span></div>
                        </header>

                        <div class="entry-content">
                            <p>Eget lacus at mauris sagittis varius. Etiam ut ven enatis dui. Nullam tellus risus, pellentesque.</p>
                        </div>

                        <footer class="entry-footer">
                            <a href="#">En savoir plus</a>
                        </footer>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4">
                    <div class="next-event-wrap">
                        <figure>
                            <a href="#"><img src="images/next1.jpg" alt="1" /></a>

                            <div class="event-rating">9.9</div>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">Ultra Music Miami</h3>

                            <div class="posted-date">Saturday <span>Jan 27, 2018</span></div>
                        </header>

                        <div class="entry-content">
                            <p>Lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus, pellentesque at facili.</p>
                        </div>

                        <footer class="entry-footer">
                            <a href="#">En savoir plus</a>
                        </footer>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  
        </>
  )
}

export default Concerts
