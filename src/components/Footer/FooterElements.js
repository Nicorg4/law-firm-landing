import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;        
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and(max-width:820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 15px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #d1d1d1;
        transition: 0.3s ease-out;
    } 
`

export const SocialMedia = styled.section`
    max-width: 1600px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 25px auto 0 auto;

    @media screen and(max-width:820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color:#fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const WebsiteRigths = styled.small`
    color: #fff;
    margin-bottom: 16px;
    margin-right: 20%;
    font-size: 19px;
    font-family: 'Open Sans';
`

export const SocialMediaItems = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
    margin-bottom: 16px;
`

export const SocialMediaItem = styled.a`
    font-family: 'Open Sans';
    font-size: 20px;
    color: white;
    margin-left: 5%;
    
`
