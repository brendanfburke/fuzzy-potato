import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"

const Nav = () => {
    return (
        <div className="nav-container">
            <Link to='/' >
                <Button>Home</Button>
            </Link>
            <Link to='/new' >
                <Button>New Listing</Button>
            </Link>
        </div>
    )
}

export default Nav