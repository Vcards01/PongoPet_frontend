import React, { useState } from 'react';
import {Container} from './styled'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function({paymentData,paymentId,onClick}){
    
    function numberEdit(number)
    {
        number="**** **** **** "+number.substring(12,16)
        return number
    }


    function handleClick()
    {
        paymentData.id=paymentId
        onClick(paymentData)
    }

    return(
        <>
            <Container onClick={handleClick}>
                <Cards
                    cvc={paymentData.cvc}
                    expiry={paymentData.expiry}
                    name={paymentData.name}
                    number={numberEdit(paymentData.number)}
                    preview={true}
                    issuer={paymentData.issuer}
                />
            </Container>
        </>
    )
}