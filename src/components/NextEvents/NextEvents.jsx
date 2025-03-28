import "./NextEvents.css";

function NextEvents() {
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
                <div class="col-12 col-sm-6 col-md-4">
                    <div class="next-event-wrap">
                        <figure>
                            <a href="#"><img src="images/next1.jpg" alt="1" /></a>

                            <div class="event-rating">8.9</div>
                        </figure>

                        <header class="entry-header">
                            <h3 class="entry-title">U2 Concert in Detroitt</h3>

                            <div class="posted-date">Saturday <span>Jan 27, 2018</span></div>
                        </header>

                        <div class="entry-content">
                            <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus.</p>
                        </div>

                        <footer class="entry-footer">
                            <a href="#">Buy Tikets</a>
                        </footer>
                    </div>
                </div>

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
                            <a href="#">Buy Tikets</a>
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
                            <a href="#">Buy Tikets</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default NextEvents;
