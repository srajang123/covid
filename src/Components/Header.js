import React,{useEffect} from 'react';
import '../css/Header.css';
const Header=props=>{
    let c1,c2,c3,c4;
    c1=c2=c3=c4='nav-item covid-nav-item';
    switch(window.location.pathname)
    {
        case '/': c1+=' covid-active';
                  break;
        case '/world': c2+=' covid-active';
                break;
        case '/countries': c3+=' covid-active';
                    break;
        case '/about': c4+=' covid-active';
                break;
        default: break;
    }
    return(
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light covid-nav">
                <a className="navbar-brand covid-nav-brand" href='/'>Covid-19 Tracker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto covid-navbar-nav">
                        <li className="nav-item covid-nav-item">
                            <a className={c1} href="/">Home</a>
                        </li>
                        <li className="nav-item covid-nav-item">
                            <a className={c2} href="/world">World</a>
                        </li>
                        <li className="nav-item covid-nav-item">
                            <a className={c3} href="/countries">Countries</a>
                        </li>
                        <li className="nav-item covid-nav-item">
                            <a className={c4} href="/about">About</a>
                        </li>
                    </ul>       
                </div>
            </nav>
        </div>
    )
}
export default Header;