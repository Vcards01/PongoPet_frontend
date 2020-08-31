import React,{useState,useEffect} from 'react';
import {CartArea,CartHeader,CartIcon,CartText,CartBody,
    ItemArea,
    Item,
    ItemPhoto ,
    ItemInfoArea,
    ItemName,
    ItemPrice,
    ItemQuantityArea,
    ItemQtIcon,
    ItemQt,
    DataArea,
    StyledSelect,
    StyledP } from './styled'

import {StyledButton} from '../GlobalComponents/styeld'
import Icon from "./../../assets/cart.png"
import Down from "./../../assets/menu.png"
import Plus from "./../../assets/plus_black.png"
import Minus from "./../../assets/minus_black.png"
import {useSelector,useDispatch} from 'react-redux'
import api from "../../services/api"
export default function()
{
    const dispatch = useDispatch()
    const items= useSelector(state=>state.cart.items)
    const enderecos = useSelector(state=>state.user.address)
    const payments = useSelector(state=>state.user.payments)
    const userId= useSelector(state=>state.user.id)
    const userName = useSelector(state=>state.user.name)
    const[show,setShow]=useState(false)
    const[address,setAdress] = useState("")
    const[payment,setPayment]=useState("")

    useEffect(()=>{
        var e=document.getElementById("selectEndereco")
        try{
        var enderecoValue=e?e.options[e.selectedIndex].value:"";
        }catch{
            setAdress("")
        }
        setAdress(enderecoValue)
        var p=document.getElementById("selectPagamento")
        var pagamentoValue=p?p.options[p.selectedIndex].value:"";
        formatPayment(pagamentoValue)
        console.log(enderecoValue)
        console.log(pagamentoValue)
    },[document.getElementById("selectPagamento")])

    useEffect(()=>{
        if(enderecos.length<1)
        {
            let field=document.getElementById("confirmar")
            if(field)
            {
                field.disabled = true;
                field.style.backgroundColor="#b7b7b7"
            }

        }
        else{
            let field=document.getElementById("confirmar")
            if(field)
            {
                field.disabled = false;
                field.style.backgroundColor="#FFB74E"
            }

        }
    },[enderecos,document.getElementById("confirmar")])

    function formatPayment(value)
    {
        let val=value.split("-")[0].trim()
        if(val>1)
        {
            val=val-2
            setPayment(payments[val])
        }
        else{
            setPayment("Dinheiro") 
        }
               
    }

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

    function numberEdit(number)
    {
        number="**** **** **** "+number.substring(12,16)
        return number
    }

    async function handleSubmit()
    {
        const response=  await api.post("/customer/pedido",{items:items,user:userId,endereco:address,pagamento:payment,cliente_name:userName})
        alert("Pedido realizado com sucesso,aguardando a confirmação do Petshop")
        dispatch({type:"RESET"});
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
                {items.length>0 &&
                    <>
                    <DataArea>
                        {enderecos.length>0?
                            <>
                            <StyledP >Endereço:</StyledP >
                            <StyledSelect  id="selectEndereco" onChange={event =>setAdress(event.target.value)}>
                                {enderecos.map((item,index)=>(
                                    <option key={index}>{item.rua},{item.numero}</option>
                                ))}
                            </StyledSelect>
                            </>:<StyledP >Cadastre um endereço</StyledP >
                        }
                        <StyledP >Pagamento:</StyledP >
                        <StyledSelect id="selectPagamento" onChange={event =>formatPayment(event.target.value)}>
                            <option>1 - Dinheiro</option>
                            {payments.map((item,index)=>(
                                <option key={index}>{index+2} - {numberEdit(item.number)}</option>
                            ))}
                        </StyledSelect>
                    </DataArea>
                    <StyledButton id="confirmar" onClick={handleSubmit}>Finalizar</StyledButton>
                    </>
                }
            </CartBody>
        </CartArea>


    )
}