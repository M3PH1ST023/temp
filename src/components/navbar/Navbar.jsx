import "./navbar.css";
import logo from "../../assets/images/logo.jpg";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header className="flex f-between">
                <div className="logo">
                    <img src={logo} />
                </div>

                <div className="nav-toggle">
                    <i class="bx bx-menu"></i>
                </div>

                <nav className="flex f-around">
                    <div className="link-container flex f-center">
                        <Link className="link">
                            Data Centers <i class="bx bxs-down-arrow"></i>
                        </Link>
                        <div className="dropdown f-column">
                            <Link className="link">Americas Data Centers</Link>
                            <Link className="link">
                                Europe, Middle East, and Africa Data Centers
                            </Link>
                            <Link className="link">
                                Asia-Pacific Data Centers
                            </Link>
                            <Link className="link">Colocation Services</Link>
                            <Link className="link">Datacenter excellence</Link>
                            <Link className="link">Ecosystem Discovery</Link>
                        </div>
                    </div>
                    <div className="link-container flex f-center">
                        <Link className="link">
                            Products and Services{" "}
                            <i class="bx bxs-down-arrow"></i>
                        </Link>
                        <div className="dropdown f-column">
                            <Link className="link">Digital Services</Link>
                            <Link className="link">Data Center Services</Link>
                            <Link className="link">
                                Interconnection Services
                            </Link>
                            <Link className="link">Supportive Services</Link>
                        </div>
                    </div>
                    <div className="link-container flex f-center">
                        <Link className="link">
                            Solutions <i class="bx bxs-down-arrow"></i>
                        </Link>
                        <div className="dropdown f-column">
                            <Link className="link">Compute</Link>
                            <Link className="link">Networking</Link>
                            <Link className="link">Storage</Link>
                            <Link className="link">Gain Agility</Link>
                            <Link className="link">Increase performance</Link>
                            <Link className="link">Expand Market reach</Link>
                            <Link className="link">Maintain control</Link>
                            <Link className="link">Optimise cost</Link>
                            <Link className="link">Build resilience</Link>
                            <Link className="link">Private AI</Link>
                            <Link className="link">Sustainability</Link>
                        </div>
                    </div>
                    <div className="link-container flex f-center"></div>
                    <div className="link-container flex f-center"></div>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default NavBar;
