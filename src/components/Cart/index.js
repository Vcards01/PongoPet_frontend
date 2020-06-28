import React from 'react';
import {CartArea,CartHeader,CartIcon,CartText,CartBody} from './styled'
import Icon from "./../../assets/cart.png"

export default function()
{
    return(
        <CartArea>
            <CartHeader>
                <CartIcon src={Icon}/>
                <CartText>Meu Carrinho (x)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>


    )
}