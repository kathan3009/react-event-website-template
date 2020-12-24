import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'

const Navbar = () => {

    return (
        <header className="header">
            <h1 class="logo"><Link className="nav-link" to="/">TechFest</Link></h1>
            <ul class="main-nav">
                <li> <Link to='/events' className="nav-link">Events</Link> </li>
                <li> <Link to='/member' className="nav-link">Members</Link> </li>
                <li> <Link to='/faqs' className="nav-link">FAQS</Link> </li>
                <li> <Link to='/contact' className="nav-link">Contact</Link> </li>
            </ul>

        </header>
    )

}
export default Navbar