import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RegisterNewMovie } from "./pages/RegisterNewMovie";
import { Synopsis } from "./pages/Synopsis";

export function MainRoute() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<RegisterNewMovie />} />
            <Route path="/sinopse" element={<Synopsis />} />
        </Routes>
    )
}