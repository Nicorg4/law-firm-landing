import styled from "styled-components";


export const ContactContainer = styled.div`
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    height: 860px;
    position: relative;

    @media screen and (max-width:600px){
        display: flex;
        flex-direction: column;
    }
`

export const ContactTitle = styled.h1`
    font-family: 'Prata';
    font-size: 49px;
    margin-top: 5%;
    text-align: center;
`

export const ContactWrapper = styled.div`
    margin-top: 3%;
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
    }
    
`

export const ImageWrapper = styled.div`
    width: 50%;
    margin-left: 8%;

    @media screen and (max-width:768px){
        width: 80%;
    }

    @media screen and (max-width:600px){
        width: 50%;
        height: 30%;
        margin-left: 25%;
    }
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    border: 2px solid black;

    @media screen and (max-width:600px){
        width: 100%;
        height: 100%;
    }
`

export const ContactForm = styled.form`
    width: 50%;
    margin-left: 8%;

    @media screen and (max-width:768px){
        margin-top: 6%;
        width: 100%;
    }
`

export const ContactInput = styled.input`
    width: 70%;
    margin-bottom: 3%;
    border: none;
    padding: 10px;
    border-bottom: 1px solid #121e33;
    background-color: #f9f9f9;
    height: 40px;
`

export const ContactFormButton = styled.button`
    background: #f9f9f9;
    white-space: nowrap;
    padding: 14px 48px;
    color: #121e33;
    font-family: 'Open Sans';
    font-size: 25px;
    outline: none;
    border: 1px solid #121e33;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-top: 7%;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #121e33;
        color: #f9f9f9;
        border: 1px solid #f9f9f9;
    }
`

export const InfoWrapper = styled.div`
    width: 50%;
    margin-left: 8%;
    margin-top: 2%;
`

export const InfoTitle = styled.h1`
    font-size: 25px;
    font-family: 'Open Sans';
`

export const InfoData = styled.h2`
    font-size: 17px;
    font-family: 'Open Sans';
`