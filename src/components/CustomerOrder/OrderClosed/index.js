import React, {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import ClienteCart from '../OrderElement'
import {Container,ItemList} from '../OrderOpen/styled'
//API
import api from "../../../services/api"
export default function({UpdateOrder})
{
    const userId = useSelector(state=>state.user.id)
    const[pedidos,setPedidos]=useState([]);

    useEffect(()=>{
        let isActive = true;
        setPedidos([])
        const getPedidos = async ()=>{
            const response= await api.post("/customer/order/closed",{id:userId});
            console.log(response.data.pedido)
            if(response.status===200)
            {
                if(isActive){
                    setPedidos(response.data.pedidos);
                }
            }
        }   
        getPedidos()
        return () =>{isActive=false;}
    },[UpdateOrder])

    return(
        <Container>
            {pedidos.length>0?
            <ItemList>
                {pedidos.map((item,index)=>(
                    <ClienteCart
                    data={item}
                    old={true}
                    />
                ))}
            </ItemList>:<p>Sem pedidos antigos!</p>
            }
        </Container>
    )
}