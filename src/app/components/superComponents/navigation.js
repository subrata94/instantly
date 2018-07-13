import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span><Link to="abcd">Instantly</Link></span>
        </nav>
    )
};