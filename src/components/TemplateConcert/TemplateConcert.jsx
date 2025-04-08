
import { useNavigate } from "react-router-dom";
import 'animate.css';

function TemplateConcert(props) {
    const { concert } = props;
    const navigate = useNavigate();

    function onClicTemplate(event){
        navigate(`/concert/${concert.id}`);
    }

  return (
                

          <div class="col-12 col-lg-6 single-event  animate__animated animate__fadeIn animate-delay-1s" onClick={onClicTemplate}>
            <figure class="events-thumbnail">
                <span><img src={`img/${concert.poster}`} alt={concert.titre}/></span>
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><span>{concert.titre}</span> </h2>

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
        </div>
                );
            }


export default TemplateConcert
