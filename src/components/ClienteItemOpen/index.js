import React,{useState,useEffect} from 'react'
import {Container,
    ItemArea,
    ItemButtons,
    ItemPhoto,
    ItemInfoArea,
    ItemDetails,
    ItemQuantityArea,
    ItemName,
    ItemDescription,
    ItemButton,
    ItemQuantity,
    ItemQtImage,
    ItemQtText,
    ItemPrice,


} from './styled'
import {useDispatch} from "react-redux"

import Minus from "./../../assets/minus.png"
import Plus from "./../../assets/plus.png"

export default function({data,status})
{
    const [qt,setqt] = useState(1); 
    const dispatch = useDispatch();


    useEffect(()=>{
        setqt(1)
    },[data])

    function handleCancelButton()
    {
        status(false)
    }

    function handleMinusQt()
    {
        if(qt >1)
        {
            setqt(qt-1)
        }
    }

    function handlePlusQt()
    {
        setqt(qt+1)
    }

    function handleAddtoCart()
    {
        dispatch({
            type:'ADD_ITEM',
            payload:{data,
            qt}
        })
        status(false)
    }
    return(
        <Container>
            <ItemArea>
                <ItemPhoto src={data.thumbnail_url} />
                <ItemInfoArea>
                    <ItemDetails>
                        <ItemName>{data.name}</ItemName>
                        <br/><ItemDescription>Petshop:{data.petshop_name}</ItemDescription><br/>
                        <ItemDescription>{data.description}</ItemDescription>
                        <ItemPrice small={true} >Valor unitario: R${(data.price*1).toFixed(2)}</ItemPrice>
                    </ItemDetails>
                    <ItemQuantityArea>
                        <ItemQuantity>
                            <ItemQtImage onClick={handleMinusQt} src={Minus}/>
                            <ItemQtText>{qt}</ItemQtText>
                            <ItemQtImage onClick={handlePlusQt} src={Plus}/>
                        </ItemQuantity>
                        <ItemPrice>R${(data.price*qt).toFixed(2)}</ItemPrice>
                    </ItemQuantityArea>
                </ItemInfoArea>
            </ItemArea>
            <ItemButtons>
                <ItemButton small={true} onClick={handleCancelButton}>Cancelar</ItemButton>
                <ItemButton onClick={handleAddtoCart}>Adicionar ao carrinho</ItemButton>
            </ItemButtons>
        </Container>
    )

}