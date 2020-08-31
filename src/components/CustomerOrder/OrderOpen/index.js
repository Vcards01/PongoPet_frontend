import React, {useState,useEffect} from "react";
import addNotification from 'react-push-notification';
import { useSelector} from 'react-redux';
import ClienteCart from '../OrderElement'
import {Container,ItemList} from './styled'
//API
import api from "../../../services/api"
export default function({UpdateOrder})
{
    const userId = useSelector(state=>state.user.id)
    const[pedidos,setPedidos]=useState([]);
    const [times,setTimes]=useState(0)

    useEffect(()=>{
        let isActive = true;
        setPedidos([])
        const getPedidos = async ()=>{
            const response= await api.post("/customer/order/open",{id:userId});
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
                    key={index}
                    />
                ))}
            </ItemList>:<p>Você ainda não fez pedidos!</p>
            }
        </Container>
    )
}