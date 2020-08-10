import React,{useState} from 'react';
import {useDispatch} from "react-redux"
import api from "../../../services/api"
import PaymentForm from "../ClientePaymentForm"

export default function({paymentList,userId,setModalStatus}){
    
    const [cvc,setCvc]= useState("")
    const [expiry,setExpiry]= useState("")
    const [focus,setFocus]= useState("")
    const [name,setName]= useState("")
    const [number,setNumber]= useState("")
    var issuer=""
    const [check,setCheck]= useState(true)

    var states={
        cvc,setCvc,expiry,setExpiry,focus,setFocus,name,setName,number,setNumber,check,setCheck
    }
    
    const dispatch = useDispatch();
    
    async function handleSubmit(event)
    {
        event.preventDefault();
        setIssuerValue()
        if((number.length===16)&&(cvc.length===3)&&(expiry.length===5)){
            var data={number,name,expiry,cvc,issuer}
            paymentList.push(data)
            const response=  await api.post("/update_payments",{id:userId,data:paymentList})
            if(response.data.status==="400")
            {
                alert("Erro de comunicação com o servidor!")
            }
            else{
                paymentList[paymentList.length-1].cvc=""
                dispatch({type:'SET_PAYMENT'});
                setModalStatus(false)
                resetInputs()
            }
        }
    }
    
    function setIssuerValue()
    {
        console.log(number.substring(0,2))
        if(number[0]==4)
        {
            issuer='visa'
        }
        else if(number.substring(0,2)==51||number.substring(0,2)==52||number.substring(0,2)==53||number.substring(0,2)==54||number.substring(0,2)==55)
        {
            issuer='mastercard'
        }
        else if(number.substring(0,2)==56||number.substring(0,2)==57||number.substring(0,2)==58||number.substring(0,2)==59)
        {
            issuer='maestro'
        }
        else if(number.substring(0,2)==60)
        {
            issuer='hipercard'
        }
    }

    function resetInputs()
    {
        setCvc("")
        setNumber("")
        setName("")
        setExpiry("")
    }

    return(
        <PaymentForm actionSubmit={handleSubmit} states={states} isNew={true}/>
    )
}