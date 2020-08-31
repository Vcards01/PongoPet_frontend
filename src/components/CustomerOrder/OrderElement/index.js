import React,{useState,useEffect} from 'react';
import {Container,ItemPhotoArea,ItemPhoto ,ItemInfoArea,ItemName,ItemPrice,
    ItemDescription,ItemMiniArea,ProductButton} from './styled'

export default function({data,old})
{
    return(
        <Container>
            <ItemPhotoArea>
                <ItemPhoto src={data.item.thumbnail_url}/>
            </ItemPhotoArea>
            <ItemInfoArea>
                <ItemMiniArea>
                    <ItemName>{data.item.name}</ItemName><br/>
                    <ItemDescription>{data.item.description}</ItemDescription>
                </ItemMiniArea>
                <ItemMiniArea>
                    <ItemPrice>PETSHOP: {data.item.petshop_name}</ItemPrice><br/>
                    <ItemPrice>Quantidade:{data.item.qt}</ItemPrice>
                </ItemMiniArea>
                <ItemMiniArea>
                    <ItemPrice>Status: {old?
                    data.approved==="Finalizado"?"Finalizado":"Recusado":
                    data.approved==="Aceito"?"Aceito,saindo para entrega":"Processando"}</ItemPrice><br/>
                    <ItemPrice>Preço total: R${data.item.qt*data.item.price}</ItemPrice>
                </ItemMiniArea>
            </ItemInfoArea>
        </Container>
    )
}