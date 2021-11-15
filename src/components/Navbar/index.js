import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import './navbar.css'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)
    const [specialScroll, setSpecialScroll] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 0){
            setScrollNav(false)
        }if(window.scrollY >= 860){
            setScrollNav(true)
        }if (window.scrollY >= 1730){
            setScrollNav(false)
        }if (window.scrollY >= 2580){
            setScrollNav(true);
            setSpecialScroll(true)
        }else{
            setSpecialScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'  onClick={toggleHome} scrollNav={scrollNav}>
                    <div class='title'>
                        <h1> ESTUDIO JURÍDICO </h1>
                        <h2> Stafuza - Michlig </h2>
                    </div>
                </NavLogo>
                <MobileIcon scrollNav={scrollNav} onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" smooth={true} duration={500} spy={true} exact={true} offset={-80} scrollNav={scrollNav}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80} scrollNav={scrollNav}>Sobre Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact={true} offset={-70} scrollNav={scrollNav}>Servicios</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-70} scrollNav={scrollNav} specialScroll={specialScroll}>Contacto</NavBtnLink>
                    </NavBtn>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
