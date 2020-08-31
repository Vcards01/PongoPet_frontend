import React, {useState,useEffect} from "react";
import {useDispatch} from "react-redux"
import api from '../../../services/api'
import AddressForm from '../AddressForm'

export default function({data,addressList,userId,setModalStatus})
{
    const [cep,setCep]= useState(data.cep);
    const [estado,setEstado]= useState(data.estado);
    const [cidade,setCidade]= useState(data.cidade);
    const [bairro,setBairro]= useState(data.bairro);
    const [rua,setRua]= useState(data.rua);
    const [numero,setNumero]= useState(data.numero);
    const [id,setId]=useState(data.id)
    
    useEffect(()=>{
        setCep(data.cep)
        setEstado(data.estado)
        setCidade(data.cidade)
        setBairro(data.bairro)
        setRua(data.rua)
        setNumero(data.numero)
        setId(data.id)
    },[data.cep,data.estado,data.cidade,data.bairro,data.rua,data.numero,data.id]);
    
    var states={
        cep,setCep,
        estado,setEstado,
        cidade,setCidade,
        bairro,setBairro,
        rua,setRua,
        numero,setNumero,
    }
    
    const dispatch = useDispatch();
    const [save,setSave]=useState(false)
    const [delete_,setDelete_]=useState(false)
    
    async function handleSubmit(event)
    {
        event.preventDefault();
        console.log(save)
        console.log(delete_)
        if(delete_)
        {
            setDelete_(false)
            console.log(id)
            console.log(addressList)
            addressList.splice(id,1)
            console.log(addressList)
        }
        else if(save)
        {   
            setSave(false)
            addressList[id].cep=cep
            addressList[id].estado=estado
            addressList[id].cidade=cidade
            addressList[id].bairro=bairro
            addressList[id].rua=rua
            addressList[id].numero=numero
        }
        const response=  await api.post("/customer/update_address",{id:userId,data:addressList})
        if(response.data.status==="400")
        {
            alert("Erro de comunicação com o servidor!")
        }
        else{
            dispatch({type:'SET_ADDRESS'});
            setModalStatus(false)
        }
    }

    return(
        <AddressForm actionSubmit={handleSubmit} actionSave={setSave} actionDelete={setDelete_} isEdit={true} states={states}/>
    )
}