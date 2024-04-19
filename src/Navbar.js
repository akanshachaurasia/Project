import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <ul>
            <li>
                <Link to="/">Assignment</Link>
            </li>
            <li>
                <Link to="/Question1">Question1</Link>
            </li>
            <li>
                <Link to="/Question2">Question2</Link>
            </li>
            <li>
                <Link to="/Question3">Question3</Link>
            </li>
            <li>
                <Link to="/Question4">Question4</Link>
            </li>
            <li>
                <Link to="/Question5">Question5</Link>
            </li>
            <li>
                <Link to="/Question6">Question6</Link>
            </li>
            <li>
                <Link to="/Question7">Question7</Link>
            </li>
            <li>
                <Link to="/Question8">Question8</Link>
            </li>

        </ul>

    );
}
export default Navbar;