import React,{useState,useEffect} from 'react';
import {useDispatch} from "react-redux"
import api from "../../../services/api"
import PaymentForm from "../PaymentForm"

export default function({data,paymentList,setModalStatus,userId}){

    const [cvc,setCvc]= useState(data.cvc)
    const [expiry,setExpiry]= useState(data.expiry)
    const [focus,setFocus]= useState("")
    const [name,setName]= useState(data.name)
    const [number,setNumber]= useState(data.number)
    const [id,setId]= useState(data.id)
    const [issuer,setIssuer] = useState(data.issuer)
    const [check,setCheck]= useState(true)
    const [save,setSave]=useState(false)
    const [delete_,setDelete_]=useState(false)

    useEffect(()=>{
        setCvc(data.cvc)
        setExpiry(data.expiry)
        setName(data.name)
        setNumber(data.number)
        setId(data.id)
        setIssuer(data.issuer)
    },[data.cvc,data.expiry,data.name,data.number,data.id,data.issuer]);

    var states={
        cvc,setCvc,expiry,setExpiry,focus,setFocus,name,setName,number,setNumber,check,setCheck,
        issuer,delete_
    }
    
    const dispatch = useDispatch();


    async function handleSubmit(event)
    {
        event.preventDefault();
        if(delete_)
        {
            setDelete_(false)
            paymentList.splice(id,1)
            
        }
        else if((number.length===16)&&(cvc.length===3)&&(expiry.length===5)){
            if(save)
            {   
                paymentList[id].cvc=cvc
                paymentList[id].expiry=expiry
                paymentList[id].number=number
                paymentList[id].name=name
            }
        }
        const response=  await api.post("/customer/update_payments",{id:userId,data:paymentList})
        if(response.data.status==="400")
        {
            alert("Erro de comunicação com o servidor!")
        }
        else{
            if(save)
            {   
                setSave(false)
                paymentList[id].cvc=""
            }
            dispatch({type:'SET_PAYMENT'});
            setModalStatus(false)
        }
    }

    return(
        <PaymentForm  actionSubmit={handleSubmit} states={states} setSave={setSave} setDelete={setDelete_} isEdit={true}/>
    )
}