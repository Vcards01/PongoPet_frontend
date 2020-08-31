import React, {useState,useEffect} from "react";
import {Container,StyledForm,StyledLabel,StyledInput,StyledH3,StyledP,StyledButton } from '../../GlobalComponents/styeld'
import Modal from "../../GlobalModal"

export default function({data,onClick}){

    function handleClick(){
        onClick()
    }

    return(
        <Container isWhite={true} isClick={true} onClick={handleClick}>
            <StyledLabel>Código do banco:</StyledLabel>
            <StyledP isClick={true}>{data.banco}</StyledP>
            <StyledLabel>Agência:</StyledLabel>
            <StyledP isClick={true}>{data.agencia}</StyledP>
            <StyledLabel>Conta:</StyledLabel>
            <StyledP isClick={true}>{data.conta}</StyledP>
        </Container>
    )
}