import "./InfoSection.css";

function InfoSection() {
    return (
        <>
            <div class="homepage-info-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-4 col-lg-5">
                            <figure>
                                <img src="src/assets/images/logo.png" alt="logo" />
                            </figure>
                        </div>

                        <div class="col-12 col-md-8 col-lg-7">
                            <header class="entry-header">
                                <h2 class="entry-title">What is Agenda and why choose our services?</h2>
                            </header>

                            <div class="entry-content">
                                <p>Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus, pellentesque at facilisis et, scelerisque sit amet metus. Duis vel semper turpis, ac tempus libero. Maecenas id ultrices risus. Aenean nec ornare ipsum, lacinia volutpat urna. Maecenas ut aliquam purus, quis sodales dolor.</p>
                            </div>

                            <footer class="entry-footer">
                                <a href="#" class="btn gradient-bg">Read More</a>
                                <a href="#" class="btn dark">Register Now</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoSection;