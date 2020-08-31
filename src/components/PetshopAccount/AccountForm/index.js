import React, {useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {Container,StyledForm,StyledLabel,StyledInput,StyledButton } from '../../GlobalComponents/styeld'
import {StyledP,ContainerBtn} from "./styled"
import api from "../../../services/api"
import * as boots from 'react-bootstrap'

export default function({states,setStatus}){

    const dispatch = useDispatch()
    const[loading,setLoading]=useState(false);

    async function handleSubmit(event){
        event.preventDefault();
        setLoading(true)
        console.log(states.codigoBanco.length)
        if(states.codigoBanco.length<=3&&states.codigoBanco.length>1&&states.agencia.length===4&&states.conta.length<=9){
            const response = await api.post("/petshop/account/update",{banco:states.codigoBanco,agencia:states.agencia,conta:states.conta,id:states.id})
            if(response.status===200)
            {
                dispatch({
                    type:'SET_ACCOUNT',
                        payload:{
                            account:{
                                banco:states.codigoBanco,
                                agencia:states.agencia,
                                conta:states.conta
                            }
                        }
                    });
                setStatus(false)
            }
        }
        else{
            document.getElementById("check").style.display="block";
        }
        
    }

    useEffect(()=>{
        setLoading(false)
        document.getElementById("check").style.display="none";
    },[states.codigoBanco,states.conta,states.agencia])

    function codBancSize(value){
        value=value.replace("*","").replace("-","").replace("+","").replace("=","").replace(";","").replace(",","").replace("\\","").replace("?","").replace("!","").replace("@","").replace("#","").replace("¨","").replace("(","").replace(")","").replace("%","").replace("$","").replace("_","").replace("º","").replace("ª","").replace(".","").replace("[","").replace("]","").replace("{","").replace("}","").replace("<","").replace(">","").replace("|","").replace("'","").replace('"',"").replace("§","").replace("°","").replace("&","").replace(":","").replace("¹","").replace("²","").replace("³","").replace("£","").replace("¢","").replace("¢","").replace("¬","").replace("©","").replace("^","").replace("~","").replace("´","").replace("`","").replace("/")
        value = value.replace(/[^\d/]+/g,'')
        if(value.length<=3)
        {
            states.setCodigoBanco(value)
        }
    }

    function agenciaSize(value){
        value=value.replace("*","").replace("-","").replace("+","").replace("=","").replace(";","").replace(",","").replace("\\","").replace("?","").replace("!","").replace("@","").replace("#","").replace("¨","").replace("(","").replace(")","").replace("%","").replace("$","").replace("_","").replace("º","").replace("ª","").replace(".","").replace("[","").replace("]","").replace("{","").replace("}","").replace("<","").replace(">","").replace("|","").replace("'","").replace('"',"").replace("§","").replace("°","").replace("&","").replace(":","").replace("¹","").replace("²","").replace("³","").replace("£","").replace("¢","").replace("¢","").replace("¬","").replace("©","").replace("^","").replace("~","").replace("´","").replace("`","").replace("/")
        value = value.replace(/[^\d/]+/g,'')
        if(value.length<=4)
        {
            states.setAgencia(value)
        }
    }

    function contaSize(value){
        value=value.replace("*","").replace("-","").replace("+","").replace("=","").replace(";","").replace(",","").replace("\\","").replace("?","").replace("!","").replace("@","").replace("#","").replace("¨","").replace("(","").replace(")","").replace("%","").replace("$","").replace("_","").replace("º","").replace("ª","").replace(".","").replace("[","").replace("]","").replace("{","").replace("}","").replace("<","").replace(">","").replace("|","").replace("'","").replace('"',"").replace("§","").replace("°","").replace("&","").replace(":","").replace("¹","").replace("²","").replace("³","").replace("£","").replace("¢","").replace("¢","").replace("¬","").replace("©","").replace("^","").replace("~","").replace("´","").replace("`","").replace("/")
        value = value.replace(/[^\d/]+/g,'')
        if(value.length<=9)
        {
            states.setConta(value)
        }
    }

    return(
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                <h2>Dados Bancários</h2>
                <StyledP id="check">Verifique os dados</StyledP>
                <StyledLabel>Código do banco</StyledLabel>
                <StyledInput type="text" value={states.codigoBanco} onChange={event =>codBancSize(event.target.value)} required/>
                <StyledLabel>Agência:</StyledLabel>
                <StyledInput type="text" value={states.agencia} onChange={event =>agenciaSize(event.target.value)} required/>
                <StyledLabel>Conta:</StyledLabel>
                <StyledInput type="text" value={states.conta} onChange={event =>contaSize(event.target.value)} required/>
                <ContainerBtn>
                <StyledButton small={true}>Salvar</StyledButton>
                {loading?<boots.Spinner animation="border" />:<></>}
            </ContainerBtn>
            </StyledForm>
        </Container>
    )
}