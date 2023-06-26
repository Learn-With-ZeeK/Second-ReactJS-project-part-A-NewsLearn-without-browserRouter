import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand mx-2" href="/">NewsLearn</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link mx-3" href="/">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link mx-3" href="/">Business</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link mx-3" href="/">Entertainment</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link mx-3" href="/">Health</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link mx-3" href="/">Science </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link mx-3" href="/">Sports</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link mx-3" href="/">Technology</a>
                            </li>

                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
