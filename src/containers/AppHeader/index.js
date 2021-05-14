import React, { useEffect, useRef, useState } from 'react';
import logo from "../../assets/img/logo.png"
const AppHeader = () => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setSticky(true)
        } else {
            setSticky(false)
        }
        /* if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        } */
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    useEffect(() => {
        if (window.scrollY > 50) {
            setSticky(true)
        } else {
            setSticky(false)
        }
        /*  if (ref.current) {
             setSticky(ref.current.getBoundingClientRect().top <= 0);
         } */
    }, [window.scrollY])
    return (
        <header id="header" className={isSticky ? "header fixed-top header-scrolled" : "header fixed-top"} ref={ref}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="#hero" className="logo d-flex align-items-center">
                    <img src={logo} alt="" />
                    <span>UKEXABG </span>
                </a> 

                <nav id="navbar" className="navbar">
                    <ul>
                        {/*   <li><a className="nav-link scrollto active" href="#hero">Home</a></li> */}
                        <li><a className="nav-link scrollto active" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#membership">Membership</a></li>
                        <li><a className="nav-link scrollto" href="#publications">Publications</a></li>
                    {/*     <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
                        {/*  <li><a href="blog.html">Blog</a></li>
                         <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><a className="getstarted scrollto" href="#about">Members signin</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;