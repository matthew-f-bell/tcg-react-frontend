import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

import "../index.css"

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}

export default Homepage;