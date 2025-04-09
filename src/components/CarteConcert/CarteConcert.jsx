
import { useNavigate } from "react-router-dom";
import 'animate.css';

function CarteConcert(props) {
    const { concert } = props;
    const navigate = useNavigate();


    function onClicCarte(event){
        navigate(`/concert/${concert.id}`);
    }

  return (
    <div className="col-12 col-sm-6 col-md-4 animate__animated animate__fadeIn" onClick={onClicCarte}> 
                      <div className="next-event-wrap">
                          <figure>
                             <img src={`img/${concert.poster}`} alt={concert.titre} />

                              {/* <div className="event-rating">7.9</div> */}
                          </figure>
                        <div className="card-event">
                          <header className="entry-header">
                              <h3 className="entry-title">{concert.titre} </h3>

                              <div className="posted-date">Saturday <span>{concert.date} </span></div>
                          </header>

                          <div className="entry-content">
                              <p>{concert.artist} {concert.lieu} {concert.id}</p>
                          </div>

                          <footer className="entry-footer">
                              <p>En savoir plus</p>
                          </footer>
                        </div>  
                      </div>
                </div>
                );
            }


export default CarteConcert
