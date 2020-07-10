import React,{useState} from 'react';
import {CartArea,CartHeader,CartIcon,CartText,CartBody,
    ItemArea,
    Item,
    ItemPhoto ,
    ItemInfoArea,
    ItemName,
    ItemPrice,
    ItemQuantityArea,
    ItemQtIcon,
    ItemQt} from './styled'
import Icon from "./../../assets/cart.png"
import Down from "./../../assets/menu.png"
import Plus from "./../../assets/plus_black.png"
import Minus from "./../../assets/minus_black.png"
import {useSelector,useDispatch} from 'react-redux'
export default function()
{
    const dispatch = useDispatch()
    const items= useSelector(state=>state.cart.items)
    const[show,setShow]=useState(false)

    function handleCartClick()
    {
        setShow(!show)
    }
    function handleItemChange(key,type)
    {
        dispatch({
            type:"CHANGE_ITEM",
                payload:{
                    key,type
                }
        });
    }
    return(
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src={Icon}/>
                <CartText>Meu Carrinho ({items.length})</CartText>
                {show&&
                    <CartIcon src={Down}/>
                }
                
            </CartHeader>
            <CartBody show={show}>
                <ItemArea>
                    {items.map((item,index)=>(
                        <Item key={index}> 
                            <ItemPhoto src={item.thumbnail_url}/>
                            <ItemInfoArea>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>R${(item.price*item.qt).toFixed(2)}</ItemPrice>
                            </ItemInfoArea>
                            <ItemQuantityArea>
                                <ItemQtIcon src={Minus} onClick={()=>handleItemChange(index,'-')}/>
                                    <ItemQt>{item.qt}</ItemQt>
                                <ItemQtIcon src={Plus} onClick={()=>handleItemChange(index,'+')}/>
                            </ItemQuantityArea>
                        </Item>
                    ))}
                    
                </ItemArea>
            </CartBody>
        </CartArea>


    )
}