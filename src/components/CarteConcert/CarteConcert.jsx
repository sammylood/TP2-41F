
function CarteConcert(props) {
    const {concert} = props;
  return (
    <div className="col-12 col-sm-6 col-md-4"> 
                      <div className="next-event-wrap">
                          <figure>
                              <a href="#"><img src={`img/${concert.poster}`} alt={concert.titre} /></a>

                              {/* <div className="event-rating">7.9</div> */}
                          </figure>
                        <div className="card-event">
                          <header className="entry-header">
                              <h3 className="entry-title">{concert.titre} </h3>

                              <div className="posted-date">Saturday <span>{concert.date} </span></div>
                          </header>

                          <div className="entry-content">
                              <p>{concert.artist} {concert.lieu} </p>
                          </div>

                          <footer className="entry-footer">
                              <a href="#">En savoir plus</a>
                          </footer>
                        </div>  
                      </div>
                </div>
                );
            }


export default CarteConcert
