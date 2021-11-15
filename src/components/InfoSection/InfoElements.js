import styled from "styled-components";


export const InfoContainer = styled.div`
    background: #f9f9f9;
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

export const InfoWrapper = styled.div`
    justify-content: left;
    width: 50%;
    padding-top: 8%;

    @media screen and (max-width:600px){
        width: 100%;
        margin-top: 40%;
    }
`

export const InfoTitle = styled.h1`
    font-family: 'Prata';
    font-size: 49px;
    color: #121e33;

    @media screen and (max-width:600px){
        font-size: 32px;
}
`
export const InfoSubtitle = styled.p`
    font-family: 'Open Sans';
    font-size: 19px;
    color: #121e33;
    margin-top: 3%;

    @media screen and (max-width:600px){
        font-size: 16px;
    }
`

export const InfoPeople = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 6%;
`

export const InfoPeopleTitle = styled.h2`
    font-family: 'Prata';
    font-size: 30px;
    color: #121e33;
    margin-right: 10%;

    @media screen and (max-width:600px){
        font-size: 22px;
    }
`

export const People =  styled.p`
    font-family: 'Open Sans';
    font-size: 19px;
    color: #121e33;
    margin-top: 5px;
    font-weight: lighter;

    @media screen and (max-width:600px){
        font-size: 12px;
    }
`

export const ImageWrapper = styled.div`
    align-items: right;
    margin-top: 10%;
    margin-left: 10%;
`

export const Image = styled.img`
    height: 80%;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width:600px){
        width: 80%;
        height: 60%;
    }
`