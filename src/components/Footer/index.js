import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRigths, SocialMediaItem, SocialMediaItems } from './FooterElements'
import {FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    {/* <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Sobre Nosotros</FooterLinkTitle>
                                    <FooterLink to='/'>Como funciona</FooterLink>
                                    <FooterLink to='/'>Testimonios</FooterLink>
                                    <FooterLink to='/'>Terminos y condiciones</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
                                    <FooterLink to='/'>Facebook</FooterLink>
                                    <FooterLink to='/'>LinkedIn</FooterLink>
                                    <FooterLink to='/'>Twitter</FooterLink>
                                    <FooterLink to='/'>Whatsapp</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer> */}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                
                            </SocialLogo>
                            <WebsiteRigths>
                            ♣ {new Date().getFullYear()} Todos los derechos reservados - Estudio juridico STAFUZA - MICHLIG
                            </WebsiteRigths>
                            <SocialMediaItems>
                                <SocialMediaItem href='/' target='_blank' aria-label='Facebook'> Facebook </SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='Facebook'> LinkedIn </SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='Facebook'> Twitter </SocialMediaItem>
                                <SocialMediaItem href='/' target='_blank' aria-label='Facebook'> Whatsapp </SocialMediaItem>
                            </SocialMediaItems>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
