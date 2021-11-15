import React, {useState} from 'react'
import { HomeContainer, HomeBG, ImageBG, HomeContent, HomeH1, HomeBtnWrapper, HomeP, ArrowForward, ArrowRight } from './HomeElements'
import Image from '../../images/image1.jpg'
import { Button } from '../ButtonElement'

const HomeSection = () => {
    
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HomeContainer id="home">
            <HomeBG>
                <ImageBG src={Image}></ImageBG>
            </HomeBG>
            <HomeContent>
                <HomeH1>Ayudando a resolver sus problemas legales mas dificiles y complejos.</HomeH1>
                <HomeP></HomeP>
                <HomeBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} spy={true} exact={true} offset={-80}>
                        Descubrir mas {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
