import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        // <nav>
        //     <Link to="/" className="nav-link">Home</Link>
        //     <Link to=""  className="nav-link">About App</Link>
        //     <Link to=""  className="nav-link">About Author</Link>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#"><img src="../src/image/logo-ALTA.png" alt=""/></a>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link mx-3 active" aria-current="page" href="#">HOME</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/" className="nav-link mx-3" href="#">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/"  className="nav-link mx-3">EXPERIENCE</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact-us"  className="nav-link mx-3">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    )
}
