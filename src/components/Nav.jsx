import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

const Nav = () => {
    return (
        <div className="nav-container">
            <Link className="nav-link" to='/' >
                <Button>Home</Button>
            </Link>
            <Link className="nav-link" to='/new' >
                <Button>New Listing</Button>
            </Link>
        </div>
    )
}

export default Nav