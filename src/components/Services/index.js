import React from 'react'
import { ServicesContainer, ImageWrapper, Image, ServicesWrapper, ServicesTitle, ServicesSubtitle, ServiceDescription } from './ServicesElements'
import Image1 from '../../images/servicessection.png'

const ServicesSection = () => {
    return (
        <>
            <ServicesContainer id={'services'}>
                <ImageWrapper>
                    <Image src={Image1} alt={'img'}></Image>
                </ImageWrapper>
                <ServicesWrapper>
                    <ServicesTitle>SERVICIOS</ServicesTitle>
                    <ServicesSubtitle>Asistencia Jurídica
                        <ServiceDescription>Integral en derecho civil y comericial. Brindamos asesoramiento, gestion y trámite para la atención de causas civiles y comerciales.</ServiceDescription>
                    </ServicesSubtitle>
                    <ServicesSubtitle>Asesoramiento Contable
                        <ServiceDescription>Contamos con profesionales de gran trayectoria y vasta experiencia en áreas como: Balances Comerciales, Liquidación de Impuestos, Liquidación de Sueldos y Administración de Empresas</ServiceDescription>
                    </ServicesSubtitle>
                    <ServicesSubtitle>Asistencia Jurídica
                        <ServiceDescription>Integral en derecho civil y comericial. Brindamos asesoramiento, gestion y trámite para la atención de causas civiles y comerciales.</ServiceDescription>
                    </ServicesSubtitle>
                </ServicesWrapper>
            </ServicesContainer>   
        </>
    )
}

export default ServicesSection
