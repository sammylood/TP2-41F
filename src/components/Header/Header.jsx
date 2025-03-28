import "./Header.css"
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header class="site-header">
        <div class="header-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-10 col-lg-2 order-lg-1">
                        <div class="site-branding">
                            <div class="site-title">
                            <a to="/"> <img src="src/assets/images/logo.png" alt="logo" /> </a>
                            </div>{/* .site-title */}
                        </div>{/* .site-branding */}
                    </div>{/* .col */}

                    <div class="col-2 col-lg-7 order-3 order-lg-2">
                        <nav class="site-navigation">
                            <div class="hamburger-menu d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>{/* .hamburger-menu */}
                        {/* TO DO : Menu responsive */}

                            <ul>
                                <li><NavLink to ={"/"}>Home</NavLink></li>
                                <li><NavLink to ={"/"}>About us</NavLink></li>
                                <li><NavLink to ={"/concerts"}>Concerts</NavLink></li>
                                <li><NavLink to ={"/"}>News</NavLink></li>
                                <li><NavLink to ={"/"}>Contact</NavLink></li>
                            </ul>
                        </nav>{/* .site-navigation */}
                    </div>{/* .col */}

                    <div class="col-lg-3 d-none d-lg-block order-2 order-lg-3">
                        <div class="buy-tickets">
                            <Link class="btn gradient-bg" to={"/"}>Buy Tickets</Link>
                        </div>{/* .buy-tickets */}
                    </div>{/* .col */}
                </div>{/* .row */}
            </div>{/* .container-fluid */}
        </div>{/* .header-bar */} 
    </header>{/* .site-header */}
    </>
  );
}

export default Header;
