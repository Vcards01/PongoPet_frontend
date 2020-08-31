import React,{useState}from "react";
import {StyledButton} from '../../GlobalComponents/styeld'
import {Container,ButtonArea,ContainerBtn} from './styled'
import {useSelector} from "react-redux"
import api from '../../../services/api'
import * as boots from 'react-bootstrap'

export default function({data,isNew,isOld,isCurrent})
{   
    const petId=useSelector(state=>state.user.id)
    const[loading,setLoading]=useState(false);

    async function RefuseOrAccept(option){
        var response=await api.post("/pedido/update",{id:data._id,state:option,cliente:data.cliente,price:data.item.price*data.item.qt,petId:petId})
        window.location.reload();
    }

    function setAccept()
    {
        setLoading(true)
        RefuseOrAccept("Aceito")
    }
    function setRefuse()
    {
        setLoading(true)
        RefuseOrAccept("Recusado")
    }
    function setFinal()
    {
        setLoading(true)
        RefuseOrAccept("Finalizado")
    }
    return(
        <Container isWhite={true}>
            <p>O cliente {data.cliente_name} realizou um pedido:<br/><br/>{data.item.qt} unidades de {data.item.name}  no valor de {data.item.qt*data.item.price} reais.<br/><br/> Entregar em: {data.endereco}</p>
            <ButtonArea>
                {isNew?<>
                        <StyledButton small={true} onClick={setAccept}>Aceitar</StyledButton>
                        <StyledButton small={true} onClick={setRefuse}>Recusar</StyledButton>
                </>:isCurrent?
                    <StyledButton onClick={setFinal}>Finalizar</StyledButton>:<></>
                }
                {loading?<boots.Spinner animation="border" />:<></>}
            </ButtonArea>
        </Container>
    )
}