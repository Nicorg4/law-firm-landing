import React from 'react'
import { ContactContainer, ContactWrapper, ContactTitle, ContactForm, ContactInput, ImageWrapper, Image, ContactFormButton, InfoWrapper, InfoTitle, InfoData} from './ContactElements'
import Image1 from '../../images/contactsection.png'

const ContactSection = () => {
    return (
        <>
            <ContactContainer id={'contact'}>
                <ContactTitle>CONTACTANOS</ContactTitle>
                <ContactWrapper>
                    <ImageWrapper>
                        <Image src={Image1}></Image>
                    </ImageWrapper>
                    <ContactForm>
                        <ContactInput placeholder={'Nombre'}></ContactInput>
                        <ContactInput placeholder={'Telefono'}></ContactInput>
                        <ContactInput placeholder={'Empresa'}></ContactInput>
                        <ContactInput placeholder={'Email'}></ContactInput>
                        <ContactInput placeholder={'Mensaje'}></ContactInput>
                        <ContactFormButton>Enviar</ContactFormButton>
                    </ContactForm>
                </ContactWrapper>
                    <InfoWrapper>
                    <InfoTitle>Nosotros
                        <InfoData>+54 0364 4421365</InfoData>
                        <InfoData>+54 9 3644 738943</InfoData>
                        <InfoData>&nbsp;</InfoData>
                        <InfoData>Urquiza 370</InfoData>
                        <InfoData>Presidencia Roque Saenz Peña</InfoData>
                        <InfoData>Chaco - Argentina</InfoData>
                    </InfoTitle>
                </InfoWrapper> 
            </ContactContainer>
            
        </>
    )
}

export default ContactSection
