import "./Footer.css";
function Footer() {
   const date = new Date();

    return (
   
<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <figure class="footer-logo">
                    <a to="/">
                    <img src="src/assets/images/logo.png" alt="logo" />
                    </a>
                </figure>

                <nav class="footer-navigation">
                    <ul class="flex flex-wrap justify-content-center align-items-center">
                        <li><a to="/">Home</a></li>
                        <li><a to="/">About us</a></li>
                        <li><a to="/">Events</a></li>
                        <li><a to="/">News</a></li>
                        <li><a to="/">Contact</a></li>
                    </ul>
                </nav>


                <p>Copyright &copy;Tous droits réservés - {date.getFullYear()}</p>


               {/*  <div class="footer-social">
                    <ul class="flex flex-wrap justify-content-center align-items-center">
                        <li><a to="/"><i class="fa fa-pinterest"></i></a></li>
                        <li><a to="/"><i class="fa fa-linkedin"></i></a></li>
                        <li><a to="/"><i class="fa fa-instagram"></i></a></li>
                        <li><a to="/"><i class="fa fa-facebook"></i></a></li>
                        <li><a to="/"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>*/}
            </div>
        </div>
    </div>
</footer>


    );
}

export default Footer;
