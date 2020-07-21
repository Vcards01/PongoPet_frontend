import React from 'react'
import {StyledImg,Container,StyledButton,StyledP} from './styled'
import img from "./../../assets/404-error-animate.svg"

export default function({setNavStatus}){
    setNavStatus("default")
    return(
        <>
            <Container>
                <StyledP>Opss! Algo deu errado!<br/>Este endereço não existe</StyledP>
                <StyledImg src={img}/>
                <StyledButton>Voltar para tela inicial!</StyledButton>
            </Container>
        </>
    )
}