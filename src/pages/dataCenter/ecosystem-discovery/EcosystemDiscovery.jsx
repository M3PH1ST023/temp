import "./ecosystem.css";
import img1 from "./images/1.jpg";

const EcosystemDiscovery = () => {
    return (
        <div className="sub-page-container flex f-center f-column">
            <div className="main-section flex f-center f-column">
                <h2>
                    Discover digital partners and connection opportunities in
                    minutes
                </h2>
                <p>
                    Choose from thousands of clouds, networks and digital supply
                    chain partners to optimize your digital infrastructure.
                    Easily discover, transact and innovate with your customers,
                    suppliers and partners to create and consume new value.
                </p>
            </div>
            <div className="sub-section flex">
                <div className="image">
                    <img src={img1} alt="" />
                </div>
                <div className="content flex f-column f-justify-center">
                    <div className="heading">
                        Optimize your network by connecting to service providers
                        and your supply chain
                    </div>
                    <div className="para">
                        Search for locations, partners, ecosystem density, data
                        center specs, metro topology and more through our
                        Marketplace Discovery tool. Find all service providers
                        offering the services you need in the location of your
                        choice
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcosystemDiscovery;
