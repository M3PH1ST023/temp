import "./excellence.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img5 from "./images/5.jpg";
import img4 from "./images/4.jpg";
import img6 from "./images/6.png";

const DataExcellence = () => {
    return (
        <div className="sub-page-container flex f-center f-column">
            <div className="main-section bg-black flex f-center f-column">
                <h2>Experience data center excellence at Shen</h2>
                <p>
                    Streamline and scale your data center infrastructure with
                    the industry’s leading data center experts at your back.
                </p>
            </div>
            <div className="cards-e bg-black flex f-center">
                <div className="card flex f-column">
                    <div className="head">Sustainable</div>
                    <div className="number">96%</div>
                    <div className="sub-head">Renewable Coverage</div>
                    <div className="content">
                        96% of our global energy consumption is addressed by
                        renewables with worldwide sites committed to 100%
                        renewable coverage by 2030. Our data centers reflect our
                        holistic and innovative approach to sustainability.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">Reliable</div>
                    <div className="number">99.999%</div>
                    <div className="sub-head">Uptime</div>
                    <div className="content">
                        Build mission critical infrastructure on the world’s
                        most trusted and reliable data center platform.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">Secure</div>
                    <div className="number">24/7/365</div>
                    <div className="sub-head">Security</div>
                    <div className="content">
                        Equinix IBX centers feature patented multi-level
                        physical security with sophisticated biometric and video
                        technology backed by trained staff on the premises
                        24/7/365.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">Trusted</div>
                    <div className="number">10,000+</div>
                    <div className="sub-head">Customers</div>
                    <div className="content">
                        Our experts can help you streamline your data center
                        operations and optimize your infrastructure strategy.
                        Build with the world’s digital infrastructure leaders on
                        your team.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">Global</div>
                    <div className="number">260+</div>
                    <div className="sub-head">Fortune 500 companies</div>
                    <div className="content">
                        Equinix owns and operates a network of 240+
                        International Business Exchange™ (IBX®) data centers
                        located in 71 major metros around the world to make
                        interconnection easy.
                    </div>
                </div>
            </div>
            <div className="main-content-2 flex f-column">
                <h2>
                    Our experts have fine-tuned what it means to run a
                    mission-critical data center
                </h2>
                <p>
                    Equinix customers power the world’s digital economy. But
                    digital business is underpinned by physical infrastructure
                    and that infrastructure is powered and built by the world’s
                    leading data center design and operations team
                </p>
            </div>
            <div className="cards-e flex" style={{ marginLeft: "20px" }}>
                <div className="card flex f-column">
                    <div className="head">
                        <img src={img1} alt="" />
                    </div>
                    <div className="number">Certifications</div>
                    <div className="content">
                        Our data centers are certified to meet rigorous
                        environmental and energy management standards.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">
                        <img src={img2} alt="" />
                    </div>
                    <div className="number">Power</div>
                    <div className="content">
                        Our power systems include full uninterruptible power
                        supply (UPS) systems with N+1 redundancy levels or
                        greater and backup generator systems. In case of a power
                        outage, batteries turn on immediately, followed within 8
                        seconds by the generators, which power the entire data
                        center.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">
                        <img src={img3} alt="" />
                    </div>
                    <div className="number">Cooling</div>
                    <div className="content">
                        To keep equipment operating at its peak, each data
                        center houses a multicomponent temperature control
                        system running 24/7. Throughout our global footprint, we
                        continuously implement the latest cooling techniques to
                        ensure performance and use energy-saving practices.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">
                        <img src={img4} alt="" />
                    </div>
                    <div className="number">Redundancy</div>
                    <div className="content">
                        All IBXs feature built-in redundancy for power, cooling,
                        and interconnection to ensure your mission-critical
                        infrastructure stays up and running.
                    </div>
                </div>
                <div className="card flex f-column">
                    <div className="head">
                        <img src={img5} alt="" />
                    </div>
                    <div className="number">Interconnection</div>
                    <div className="content">
                        Choose from thousands of clouds, networks and digital
                        supply chain partners to optimize your digital
                        infrastructure. Easily discover, transact and innovate
                        with your customers, suppliers and partners to create
                        and consume new value.
                    </div>
                </div>
            </div>
            <div className="sub-section bg-black flex">
                <div className="image">
                    <img src={img6} alt="" />
                </div>
                <div className="content flex f-column f-justify-center">
                    <div className="heading">Built for humans</div>
                    <div className="para">
                        At the end of the day, it’s all about the people who
                        work inside the Equinix IBX. That’s why we’ve
                        implemented extra comforts and amenities to ensure a
                        positive human experience.
                        <ul>
                            <li>Foosball</li>
                            <li>Free WI-FI</li>
                            <li>Break Rooms</li>
                            <li>Free beverages & snacks</li>
                            <li>Nap pods</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataExcellence;
