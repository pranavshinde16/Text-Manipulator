import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
// import "./components/styles.css"

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex pe-3">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: props.mode === "dark" ? "#091a29" : "white", color: props.mode === "dark" ? "white" : "black" }} />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>

                        <div className={`form-check form-switch text-${props.mode === "light"} ? "dark":"light" my-1 `}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}></input>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title Here",
    contact: "Contact Us",
}
 // When title and contact is not passed as props by mistake......then it refers defalutProps provided by us by Navbar.defaultProps
