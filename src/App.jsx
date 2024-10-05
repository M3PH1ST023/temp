import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import DataCenter from "./pages/DataCenter/DataCenter";
import ColocationServices from "./pages/dataCenter/colocation-services/ColocationServices";
import EcosystemDiscovery from "./pages/dataCenter/ecosystem-discovery/EcosystemDiscovery";
import DataExcellence from "./pages/dataCenter/data-excellence/DataExcellence";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar />}>
                        {/* HOME */}
                        <Route index element={<Home />} />

                        {/* Data center */}
                        <Route path="/data-center" element={<DataCenter />} />
                        <Route
                            path="/colocation-services"
                            element={<ColocationServices />}
                        />
                        <Route
                            path="/datacenter-excellence"
                            element={<DataExcellence />}
                        />
                        <Route
                            path="/ecosystem-discovery"
                            element={<EcosystemDiscovery />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
