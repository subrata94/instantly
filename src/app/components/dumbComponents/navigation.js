import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="abcd" className="navbar-brand">Instantly</Link>
            <ul className="navbar-nav">
                <li><Link to="#"></Link></li>
                <li><Link to="#"></Link></li>
                <li><Link to="#"></Link></li>
            </ul>
        </nav>
    )
};