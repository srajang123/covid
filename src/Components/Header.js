import React from 'react';
import '../css/Header.css';
const Header=props=>{
    return(
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light covid-nav">
                <a className="navbar-brand covid-nav-brand" href='/'>Covid-19 Tracker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto covid-navbar-nav">
                        <li className="nav-item covid-nav-item active">
                            <a className="nav-link covid-nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item covid-nav-item">
                            <a className="nav-link covid-nav-link" href="/world">World</a>
                        </li>
                        <li className="nav-item covid-nav-item">
                            <a className="nav-link covid-nav-link" href="/countries">Countries</a>
                        </li>
                        <li className="nav-item covid-nav-item">
                            <a className="nav-link covid-nav-link" href="/about">About</a>
                        </li>
                    </ul>       
                </div>
            </nav>
        </div>
    )
}
export default Header;