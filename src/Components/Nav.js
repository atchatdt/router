import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                {/* Menu */}
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                        <div className="container">
                        <Link to="/">Home</Link>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                               
                                <li>
                                <Link  className="nav-link js-scroll-trigger" to="/tin">Danh sách tin</Link>
                                </li>
                                
                                <li>
                                <Link  className="nav-link js-scroll-trigger" to="/tin-chi-tiet">Tin chi tiết</Link>
                                </li>
                                
                                <li>
                                <Link  className="nav-link js-scroll-trigger" to="/lien-he">Liên hệ</Link>
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                    </nav>
                {/* End Menu */}

            </div>
        )
    }
}
