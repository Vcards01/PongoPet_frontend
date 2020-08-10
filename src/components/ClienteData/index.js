import React, {useState} from "react";
import {useSelector} from 'react-redux'
import {Container,StyledButton,StyledLabel,StyledP} from "../GlobalComponents/styeld"
import Modal from "../GlobalModal"
import FormData from "./ClienteDataForm"

export default function(){
    const [name,setName]= useState(useSelector(state=>state.user.name))
    const [email,setEmail] =useState(useSelector(state=>state.user.email))
    const type= useSelector(state=>state.user.userType)
    const id= useSelector(state=>state.user.id)
    const [modalStatus,setModalStatus]=useState(false);
    
    function handleEnableEdit()
    {
        setModalStatus(true)
    }
    
    return(
        <Container isWhite={true}>
                <StyledLabel>Nome:</StyledLabel><br/>
                <StyledP >{name}</StyledP>
                <StyledLabel>Email:</StyledLabel><br/>
                <StyledP >{email}</StyledP>
                <StyledButton id='edit' onClick={handleEnableEdit}>Editar</StyledButton>
                <Modal status={modalStatus} setStatus={setModalStatus}>
                    <FormData name={name} id={id} email={email} type={type} setStatus={setModalStatus} setName={setName} setEmail={setEmail} />
                </Modal>
        </Container>
    )
}