import colocationImg from "../../../assets/images/data-center/colocation.gif";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

import "./colocation.css";

const ColocationServices = () => {
    return (
        <div className="sub-page-container flex f-column">
            <div className="main-content flex f-column f-center">
                <h2>Colocation at Shen</h2>
                <h3>The key to your digital advantage</h3>
                <img src={colocationImg} alt="" />
                <p>
                    Harness mission-critical data center capacity at the
                    interconnection crossroads of your clouds, backbone, digital
                    ecosystems, and edge. Unlock your digital advantage with the
                    cornerstone of a modern IT architecture
                </p>
            </div>
            <div className="cards flex f-center f-column">
                <div className="card flex">
                    <div className="icon flex f-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="content flex f-column f-justify-center">
                        <h4>Build scalable hybrid infrastructure</h4>
                        <p>
                            Build adaptable and scalable hybrid infrastructure
                            with direct access to capacity across physical
                            colocation, networking, public cloud, and your
                            as-a-Service ecosystem—wherever you need it
                        </p>
                    </div>
                </div>
                <div className="card flex">
                    <div className="icon flex f-center">
                        <img src={img2} alt="" />
                    </div>
                    <div className="content flex f-column f-justify-center">
                        <h4>Scale your network</h4>
                        <p>
                            Establish hubs in locations with the most efficient
                            traffic flows—adjacent to high densities of partners
                            and network providers—with the lowest latency and
                            the highest network capacity.
                        </p>
                    </div>
                </div>
                <div className="card flex">
                    <div className="icon flex f-center">
                        <img src={img3} alt="" />
                    </div>
                    <div className="content flex f-column f-justify-center">
                        <h4>Gain edge access</h4>
                        <p>
                            Deliver world-class digital experiences by placing
                            workloads at the edge and establishing performant
                            network access to your edge locations and users.
                            Enable cloud services Enable your cloud services
                            layer by architecting at the crossroads of your
                            cloud providers’ networks to enable streamlined,
                            performant, and cost-efficient data transfer across
                            clouds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColocationServices;
