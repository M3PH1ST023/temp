import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
