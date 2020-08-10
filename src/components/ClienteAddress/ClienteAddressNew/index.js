import React, {useState} from "react";
import {useDispatch} from "react-redux"
import api from '../../../services/api'
import AddressForm from '../ClienteAddressForm'

export default function({addressList,setModalStatus,userId})
{

    const [cep,setCep]= useState("");
    const [estado,setEstado]= useState("");
    const [cidade,setCidade]= useState("");
    const [bairro,setBairro]= useState("");
    const [rua,setRua]= useState("");
    const [numero,setNumero]= useState("");
    var states={
        cep,setCep,
        estado,setEstado,
        cidade,setCidade,
        bairro,setBairro,
        rua,setRua,
        numero,setNumero,
    }
    const dispatch = useDispatch();
    
    async function handleSubmit(event)
    {
        event.preventDefault();
        var data={cep:cep,estado:estado,cidade:cidade,bairro:bairro,rua:rua,numero:numero}
        addressList.push(data)
        const response=  await api.post("/update_address",{id:userId,data:addressList})
        if(response.data.status==="400")
        {
            alert("Erro de comunicação com o servidor!")
        }
        else{
            dispatch({type:'SET_ADDRESS'});
            setModalStatus(false)
            resetInputs()
        }   
    }
    
    function resetInputs()
    {
        setCep("")
        setEstado("")
        setCidade("")
        setBairro("")
        setRua("")
        setNumero("")
    }

    return(
        <AddressForm actionSubmit={handleSubmit} states={states} isNew={true}/>
    )
}