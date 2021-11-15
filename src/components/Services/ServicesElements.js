import styled from "styled-components";


export const ServicesContainer = styled.div`
    background: #121e33;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    height: 860px;
    position: relative;

    @media screen and (max-width:600px){
        display: flex;
        flex-direction: column;
    }
`

export const ImageWrapper = styled.div`
    width: 30%;
    margin-top: 10%;

    @media screen and (max-width:600px){
        width: 50%;
        height: 30%;
        margin-left: 25%;
    }
`

export const Image = styled.img`
    height: 80%;
    width: 80%;

    @media screen and (max-width:600px){
        width: 100%;
        height: 100%;
    }
`

export const ServicesWrapper = styled.div`
    justify-content: left;
    width: 50%;
    margin-top: 10%;

    @media screen and (max-width:600px){
        width: 100%;
    }
`

export const ServicesTitle = styled.h1`
    font-family: 'Prata';
    font-size: 49px;
    color: #f9f9f9;

    @media screen and (max-width:600px){
        font-size: 32px;
    }
`

export const ServicesSubtitle = styled.h2`
    font-family: 'Open Sans';
    font-size: 30px;
    color: #f9f9f9;
    margin-top: 5%;

    @media screen and (max-width:600px){
        font-size: 16px;
    }
`

export const ServiceDescription = styled.p`
    font-family: 'Open Sans';
    font-size: 19px;
    color: #f9f9f9;
    margin-top: 2%;
    font-weight: lighter;

    @media screen and (max-width:600px){
        font-size: 16px;
    }
`


