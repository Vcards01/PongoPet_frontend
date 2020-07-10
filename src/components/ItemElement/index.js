import React from 'react'
import {Container,ItemPhotoArea,ItemPhoto ,ItemInfoArea,ItemName,ItemPrice,
    ItemDescription,ItemButtomArea,ProductButton} from './styled'
import NextButton from './../../assets/next.png'

export default function({data,onClick}){

    function handleClick()
    {
        onClick(data);
    }

    return(
        <Container onClick={handleClick}>
            <ItemPhotoArea>
                <ItemPhoto src={data.thumbnail_url}/>
            </ItemPhotoArea>
            <ItemInfoArea>
                <ItemName>{data.name}</ItemName>
                <ItemPrice>R${data.price}</ItemPrice>
                <ItemDescription>{data.description}</ItemDescription>
            </ItemInfoArea>
            <ItemButtomArea>
                <ProductButton src={NextButton}/>
            </ItemButtomArea>
        </Container>
    )
}