import React ,{}from 'react'
import "./style/Navbar.css"
import {Navbar,Nav } from 'react-bootstrap'
import { Link } from "react-scroll";
import  pdf  from './Download/resume.pdf';
import useLocalStorage from 'use-local-storage'


const customClass ="customnavlink"

const Navbars = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme =() => {
    const newTheme = theme === 'light' ? 'dark':'light';
    setTheme(newTheme);
  }

    return (   
        <div className="navbar_full resume" fixed="top" >
{/* data-theme = {theme} */}

            <Navbar  expand="lg">
            {/* <button onClick={switchTheme}>
                switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button> */}

            <Link to="home" smooth={true}><Navbar.Brand href="#home" className="folioname">Port<span>Folio</span></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="togel"/>
            <Navbar.Collapse id="basic-navbar-nav" className="togel">
            <Nav className="ml-auto ">
                <Link to="home" smooth={true }><Nav.Link href="#home" bsPrefix={customClass}  style={{ textDecoration: 'none' }} className="links pr-4">Home</Nav.Link></Link>
                <Link to="about" smooth={true }><Nav.Link href="#about" bsPrefix={customClass}  style={{ textDecoration: 'none' }} className="links pr-4">About</Nav.Link></Link>
                <Link to="skills" smooth={true }><Nav.Link href="#skills" bsPrefix={customClass}  style={{ textDecoration: 'none' }} className="links pr-4">Skills</Nav.Link></Link>
                <Link to="project" smooth={true }><Nav.Link href="#project" bsPrefix={customClass}  style={{ textDecoration: 'none' }} className="links pr-4">Projects</Nav.Link></Link>
                <a className="pr-4" href={pdf} target="_blank"> Resume </a>
                <Link to="contact" smooth={true }><Nav.Link href="#contact" bsPrefix={customClass}  style={{ textDecoration: 'none' }} className="links pr-4">Contact</Nav.Link></Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navbars




 