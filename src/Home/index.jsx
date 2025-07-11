import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Tcgcard from "../components/TcgCard";

import '../stylesheets/index.scss';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}

export default Homepage;