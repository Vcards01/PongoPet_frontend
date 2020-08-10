import React from "react";
import {Container,ItemPhotoArea,ItemPhoto,ItemInfoArea,} from './styled';
import img from "../../../assets/place.png"
export default function({addressData,addressId,onClick}){
    
    
    function handleClick()
    {
        addressData.id=addressId
        onClick(addressData)
    }

    return(
        <Container onClick={handleClick}>
            <ItemPhotoArea>
                <ItemPhoto src={img}/>
            </ItemPhotoArea>
            <ItemInfoArea>
                <p>{addressData.cidade},{addressData.estado}</p>
                <p>{addressData.rua},{addressData.numero},{addressData.bairro}</p>
            </ItemInfoArea>
        </Container>
    )
}