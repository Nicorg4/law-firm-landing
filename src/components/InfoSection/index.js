import React from 'react'
import { InfoContainer, InfoSubtitle, InfoPeople, InfoTitle, InfoWrapper, InfoPeopleTitle, People, ImageWrapper, Image } from './InfoElements'
import Image1 from '../../images/infosection.png'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id={'about'}>
                 <InfoWrapper>
                    <InfoTitle>SOBRE NOSOTROS</InfoTitle>
                    <InfoSubtitle>Un estudio que trabaja como parte de su equipo, Ayudando a resolver sus problemas legales más difíciles y complejos.</InfoSubtitle>
                    <InfoSubtitle>El Estudio se encuentra ubicado en el centro de la provincia de Chaco.</InfoSubtitle>
                    <InfoSubtitle>Brindamos asesoramiento, gestión y trámite para la atención de causas civiles y comerciales dentro del territorio de la provincia del Chaco</InfoSubtitle>
                    <InfoSubtitle>Nuestro equipo tiene como principal compromiso adecuarse y entender las necesidades de cada uno de nuestros clientes</InfoSubtitle>
                    <InfoPeople>
                        <InfoPeopleTitle>Abogados
                            <People>Sergio A. Stafuza</People>
                            <People>Mariel N. Maldonado</People>
                        </InfoPeopleTitle>
                        <InfoPeopleTitle>Contadores
                            <People>Eduardo E. Haiquel</People>
                            <People>Johana V. Raffo</People>
                        </InfoPeopleTitle>
                    </InfoPeople>
                 </InfoWrapper>
                 <ImageWrapper>
                    <Image src={Image1} alt={'img'}></Image>
                </ImageWrapper>
            </InfoContainer>   
        </>
    )
}

export default InfoSection
