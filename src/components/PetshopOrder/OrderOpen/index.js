import React, {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {Container,ItemList} from '../OrderNew/styled'
import api from '../../../services/api'
import RequestElement from '../OrderElement'

export default function()
{
    const userId = useSelector(state=>state.user.id)
    var stop =""
    const[pedidos,setPedidos]=useState([]);

    useEffect(()=>{
        let isActive = true;
        setPedidos([])
        const getPedidos = async ()=>{
            const response= await api.post("/petshop/opened_orders",{id:userId});
            if(response.status===200)
            {
                console.log(response.data.pedidos)
                if(isActive){
                    setPedidos(response.data.pedidos);
                }
            }
        }   
        getPedidos()
        return () =>{isActive=false;}
    },[stop])

    return(
        <Container>
            {pedidos.length>0?
            <ItemList>
                {pedidos.map((item,index)=>(
                    <RequestElement
                    key={index}
                    data={item}
                    isCurrent={true}
                    />
                ))}
            </ItemList>:<p>Sem pedidos em andamento!</p>
            }
        </Container>
    )
}