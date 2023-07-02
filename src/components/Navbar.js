import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">M News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Business</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Entertainment</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">General</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Health</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Science</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Sports</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Technology</a></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </>
        )
    }
}

export default Navbar