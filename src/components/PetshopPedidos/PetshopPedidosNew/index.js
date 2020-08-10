import React, {useState,useEffect} from "react";
import {StyledButton} from '../../GlobalComponents/styeld'
import {Container,ButtonArea} from './styled'

export default function({pedido})
{
    console.log(pedido)
    return(
        <Container isWhite={true}>
            <p>O usuario {pedido.cliente_name} realizou um pedido:<br/><br/>{pedido.item.qt} unidades de <stong>{pedido.item.name}</stong>  no valor de {pedido.item.qt*pedido.item.price} reais</p>
            <ButtonArea>
                <StyledButton small={true}>Aceitar</StyledButton>
                <StyledButton small={true}>Recusar</StyledButton>
            </ButtonArea>
        </Container>
    )
}