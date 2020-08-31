import React, {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {Container,StyledForm,StyledLabel,StyledInput,StyledH3,StyledP,StyledButton } from '../../components/GlobalComponents/styeld'
import api from "../../services/api"
import Modal from "../GlobalModal"
import AccountForm from "./AccountForm"
import AccountElement from "./AccountElement"

export default function()
{
    const [modalStatus,setModalStatus]=useState(false);
    const [modalEditStatus,setModalEditStatus]=useState(false);
    const account= useSelector(state=>state.user.account)
    const [codigoBanco,setCodigoBanco]=useState("");
    const [agencia,setAgencia] = useState("");
    const [conta,setConta]=useState("");
    const id= useSelector(state=>state.user.id)
    
    useEffect(()=>{
        if(!account)
        {
            setCodigoBanco("")
            setAgencia("")
            setConta("")
        }
        else{
        setCodigoBanco(account.banco)
        setAgencia(account.agencia)
        setConta(account.conta)
        }
    },[account]);

    var states={
        codigoBanco,setCodigoBanco,agencia,setAgencia,conta,setConta,id
    }
    function handleAdd()
    {
        setModalStatus(true)
    }
    function handleEdit()
    {
        setModalEditStatus(true)
    }
    return(
        <Container>
            {!account?
                <>
                    <StyledButton onClick={handleAdd}>Adicionar Conta</StyledButton>
                    <Modal status={modalStatus} setStatus={setModalStatus}>
                        <AccountForm states={states} setStatus={setModalStatus}/>
                    </Modal>
                </>:
                <>
                <AccountElement onClick={handleEdit} data={account}/>
                <Modal status={modalEditStatus} setStatus={setModalEditStatus}>
                    <AccountForm states={states} setStatus={setModalEditStatus}/>
                </Modal>
                </>
            }
        </Container>
    )
}