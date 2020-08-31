import React, {useState} from "react";
import {useSelector} from 'react-redux'
import {Container,StyledButton,StyledLabel,StyledP} from "../GlobalComponents/styeld"
import Modal from "../GlobalModal"
import FormData from "./DataForm"

export default function(){
    const [name,setName]= useState(useSelector(state=>state.user.name))
    const [email,setEmail] =useState(useSelector(state=>state.user.email))
    const [petName,setPetName] = useState(useSelector(state=>state.user.petshop_name))
    const [contact,setContact] = useState(useSelector(state=>state.user.contato))
    const type= useSelector(state=>state.user.userType)
    const id= useSelector(state=>state.user.id)
    const [modalStatus,setModalStatus]=useState(false);

    function handleEnableEdit()
    {
        setModalStatus(true)
    }
    
    return(
        <Container isWhite={true}>
                <StyledLabel>Proprietário:</StyledLabel><br/>
                <StyledP isClick={true}>{name}</StyledP>
                <StyledLabel>Petshop:</StyledLabel><br/>
                <StyledP isClick={true}>{petName}</StyledP>
                <StyledLabel>Contato:</StyledLabel><br/>
                <StyledP isClick={true}>{contact}</StyledP>
                <StyledLabel>Email:</StyledLabel><br/>
                <StyledP isClick={true}>{email}</StyledP>
                <StyledButton id='edit' onClick={handleEnableEdit}>Editar</StyledButton>
                <Modal status={modalStatus} setStatus={setModalStatus}>
                    <FormData name={name} email={email} petName={petName} contato={contact} id={id} type={type}
                     setName={setName} setEmail={setEmail} setPetName={setPetName} setContato={setContact} setStatus={setModalStatus}/>
                </Modal>
        </Container>
    )
}