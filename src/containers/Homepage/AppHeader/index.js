import React, { useEffect, useRef, useState } from 'react';
import logo from "assets/img/logo.png"

import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "appRedux/actions/auth";

import { TAB_SIZE } from "appRedux/actions/ThemeSetting";
import Auxiliary from "utils/Auxiliary";
import UserInfo from './UserInfo';
const AppHeader = () => {
    const dispatch = useDispatch();
    const [isSticky, setSticky] = useState(false);
    const [isToggled, setToggle] = useState(false);
    const [isActive, setActive] = useState("");
    const { user, authUser } = useSelector(({ auth }) => auth);

    const { width, } = useSelector(({ settings }) => settings);

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
    const toggleHandler = () => setToggle(!isToggled)
    const closeHandler = (type) => {
        setToggle(false)
        switch (type) {
            case "about":
                setActive("about")
                break
            case "membership":
                setActive("membership")
                break
            case "publications":
                setActive("publications")
                break
            case "usefullinks":
                setActive("usefullinks")
                break
            default:
                break

        }

    }
    const handleLogout = async () => dispatch(signOutUser())

    return (
        <header id="header" className={isSticky ? "header fixed-top header-scrolled" : "header fixed-top"} ref={ref}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="#home" className="logo d-flex align-items-center">
                    <img src={logo} alt="" />
                    <span>UKEXABG </span>
                </a>

                <nav id="navbar" className={isToggled ? "navbar navbar-mobile" : "navbar"}>
                    {/* <ul>
                           <li><a className="nav-link scrollto active" href="#hero">Home</a></li> */}
                    <Scrollspy items={['about', 'membership', 'publications', 'usefullinks']} currentClassName="active">
                        <li onClick={() => closeHandler("about")}><a className={`nav-link scrollto ${isActive === "about" ? "active" : ""} `} href="#about">About</a></li>
                        <li onClick={() => closeHandler("membership")}><a className={`nav-link scrollto ${isActive === "membership" ? "active" : ""} `} href="#membership">Members</a></li>
                        <li onClick={() => closeHandler("publications")}><a className={`nav-link scrollto ${isActive === "publications" ? "active" : ""} `} href="#publications">Publications</a></li>
                        <li onClick={() => closeHandler("usefullinks")}><a className={`nav-link scrollto ${isActive === "usefullinks" ? "active" : ""} `} href="#usefullinks">Useful Links</a></li>
                        {authUser ?
                            <li className="gx-user-nav" style={{ paddingLeft: 20, cursor: 'pointer' }}><UserInfo /></li>
                            : <li  ><Link to={`signin`}> <span className="getstarted">signin</span></Link> </li>}
                    </Scrollspy>
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
                    {/*<li onClick={closeHandler}><a className="nav-link scrollto" href="#contact">Contact</a></li>
                         <li onClick={closeHandler}> <a className="getstarted scrollto" href="#about">Members signin</a></li> */}

                    {/*  </ul> */}
                    <i className={isToggled ? "bi bi-x mobile-nav-toggle" : "bi bi-list mobile-nav-toggle"} onClick={toggleHandler}></i>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;