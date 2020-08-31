import React, {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {Container,StyledForm,StyledLabel,StyledInput,StyledH3,StyledP,StyledButton } from '../../components/GlobalComponents/styeld'
import api from "../../services/api"

export default function(){
    const userId = useSelector(state=>state.user.id)
    const[pedidos,setPedidos]=useState([]);
    const[qtPedidos,setQtPedidos]=useState("");
    const[totalValue,setTotalValue]=useState("");

    useEffect(()=>{
        let isActive = true;
        setPedidos([])
        const getPedidos = async ()=>{
            const response= await api.post("/petshop/closed_orders",{id:userId});
            if(response.status===200)
            {
                if(isActive){
                    setPedidos(response.data.pedidos);
                }
            }
        }
       
        getPedidos()
        return () =>{isActive=false;}
    },[]);

    useEffect(()=>{
        let isActive = true;
        setTotalValue("")
        const getValue = async ()=>{
            const response= await api.post("/petshop/earn",{id:userId});
            if(response.status===200)
            {
                if(isActive){
                    setTotalValue(response.data.valor);
                }
            }
        }
       
        getValue()
        return () =>{isActive=false;}
    },[]);

    useEffect(()=>{
        let isActive = true;
        let total=0
        pedidos.forEach(pedido => {
            if(isActive){
            total+=pedido.item.price*pedido.item.qt
            }
        });
        setQtPedidos(pedidos.length)
    },[pedidos]);

    return(
        <Container isWhite={true}>
            <StyledLabel>Vendas Realizadas:</StyledLabel>
            <StyledP isClick={true}>{qtPedidos} Pedidos</StyledP>
            <StyledLabel>Total recebido das vendas:</StyledLabel>
            <StyledP isClick={true}>R${(totalValue*1).toFixed(2)}</StyledP>
        </Container>
    )
}