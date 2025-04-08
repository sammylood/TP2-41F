import { useState, useEffect } from "react";
import "./Concerts.css";
import CarteConcert from "../CarteConcert/CarteConcert";
import TemplateConcert from "../TemplateConcert/TemplateConcert";
import { Link } from "react-router-dom";

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
        <div class="events">
    <div class="page-header events-page-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <header class="entry-header">
                        <h1 class="entry-title">Events.</h1>
                    </header>
                </div>
            </div>
        </div>
    </div>
{/* </header>.site-header */}

<form class="events-search">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-3">
                <input type="date" placeholder="Date" />
            </div>

            <div class="col-12 col-md-3">
                <input type="text" placeholder="Event" />
            </div>

            <div class="col-12 col-md-3">
                <input type="text" placeholder="Location" />
            </div>

            <div class="col-12 col-md-3">
                <input class="btn dark-purple" type="submit" value="Search Events"/>
            </div>
        </div>
    </div>
</form>

<div class="container">
    <div class="row events-list">
        
         
               {concerts.map((concert) => {
                    console.log(concert);
                    return <TemplateConcert key={concert.id}  concert={concert}/>;
                })}
           

         {/* <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-1.jpg" alt=""/></Link>
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">U2 Concert in Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>



        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-1.jpg" alt=""/></Link>
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">U2 Concert in Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-2.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Summer Festival in Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <div class="entry-content">
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risust lacus at mauris sagittis variusut.</p>
                </div>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-3.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Costume Festival Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-4.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Summer Festival in Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <div class="entry-content">
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risust lacus at mauris sagittis variusut.</p>
                </div>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-5.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Hotel California in Concert</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <div class="entry-content">
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risust lacus at mauris sagittis variusut.</p>
                </div>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-6.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">DJ Festival in town</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>
                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-1.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">U2 Concert in Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-2.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Summer Festival in Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <div class="entry-content">
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risust lacus at mauris sagittis variusut.</p>
                </div>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-3.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Costume Festival Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-4.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Summer Festival in Detroit</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <div class="entry-content">
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risust lacus at mauris sagittis variusut.</p>
                </div>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div> */}

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-5.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">Hotel California in Concert</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>

                <div class="entry-content">
                    <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risust lacus at mauris sagittis variusut.</p>
                </div>

                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>

        <div class="col-12 col-lg-6 single-event">
            <figure class="events-thumbnail">
                <Link href="#"><img src="src/assets/images/event-6.jpg" alt=""/></Link> 
            </figure>

            <div class="event-content-wrap">
                <header class="entry-header flex justify-content-between">
                    <div>
                        <h2 class="entry-title"><Link href="#">DJ Festival in town</Link> </h2>

                        <div class="event-location"><Link href="#">Ford Field  2000 Brush St, Detroit, MI 48226, EE. UU.</Link> </div>

                        <div class="event-date">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>
                    </div>

                    <div class="event-cost flex justify-content-center align-items-center">
                        from<span>$89</span>
                    </div>
                </header>
                <footer class="entry-footer">
                    <Link href="#">Buy Tikets</Link> 
                </footer>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="load-more-btn">
                <Link class="btn dark-purple" href="#">Load More</Link> 
            </div>
        </div>
    </div>
</div>

<div class="upcoming-events-outer">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="upcoming-events">
                    <div class="upcoming-events-header">
                        <h4>Upcoming Events</h4>
                    </div>

                    <div class="upcoming-events-list">
                        <div class="upcoming-event-wrap flex flex-wrap justify-content-between align-items-center">
                            <figure class="events-thumbnail">
                                <Link href="#"><img src="src/assets/images/upcoming-1.jpg" alt=""/></Link> 
                            </figure>

                            <div class="entry-meta">
                                <div class="event-date">
                                    25<span>February</span>
                                </div>
                            </div>

                            <header class="entry-header">
                                <h3 class="entry-title"><Link href="#">Blockchain Conference</Link> </h3>

                                <div class="event-date-time">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>

                                <div class="event-speaker">Speackers: Maria Williams, Luis Smith, James Doe</div>
                            </header>

                            <footer class="entry-footer">
                                <Link href="#">Buy Tikets</Link> 
                            </footer>
                        </div>

                        <div class="upcoming-event-wrap flex flex-wrap justify-content-between align-items-center">
                            <figure class="events-thumbnail">
                                <Link href="#"><img src="src/assets/images/upcoming-2.jpg" alt=""/></Link> 
                            </figure>

                            <div class="entry-meta">
                                <div class="event-date">
                                    27<span>February</span>
                                </div>
                            </div>

                            <header class="entry-header">
                                <h3 class="entry-title"><Link href="#">Financial Conference</Link> </h3>

                                <div class="event-date-time">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>

                                <div class="event-speaker">Speackers: Maria Williams, Luis Smith, James Doe</div>
                            </header>

                            <footer class="entry-footer">
                                <Link href="#">Buy Tikets</Link> 
                            </footer>
                        </div>

                        <div class="upcoming-event-wrap flex flex-wrap justify-content-between align-items-center">
                            <figure class="events-thumbnail">
                                <Link href="#"><img src="src/assets/images/upcoming-3.jpg" alt=""/></Link> 
                            </figure>

                            <div class="entry-meta">
                                <div class="event-date">
                                    27<span>February</span>
                                </div>
                            </div>

                            <header class="entry-header">
                                <h3 class="entry-title"><Link href="#">Winter Festival</Link> </h3>

                                <div class="event-date-time">May 29, 2018 @ 8:00 Pm - May 30, 2018 @ 4:00 Am</div>

                                <div class="event-speaker">Speackers: Maria Williams, Luis Smith, James Doe</div>
                            </header>

                            <footer class="entry-footer">
                                <Link href="#">Buy Tikets</Link> 
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="newsletter-subscribe">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <header class="entry-header">
                    <h2 class="entry-title">Subscribe to our newsletter to get the latest trends & news</h2>
                    <p>Join our database NOW!</p>
                </header>

                <div class="newsletter-form">
                    <form class="flex flex-wrap justify-content-center align-items-center">
                        <div class="col-md-12 col-lg-3">
                            <input type="text" placeholder="Name"/>
                        </div>

                        <div class="col-md-12 col-lg-6">
                            <input type="email" placeholder="Your e-mail"/>
                        </div>

                        <div class="col-md-12 col-lg-3">
                            <input class="btn gradient-bg" type="submit" value="Subscribe"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>




    {/* <div class="homepage-next-events">
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
    </div> */}
  
</div>
  )
}

export default Concerts
