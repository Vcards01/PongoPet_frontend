import React, {useState} from "react";
import {useDispatch} from "react-redux"
import api from '../../../services/api'
import ProductForm from '../ProductsForm'

export default function({setModalStatus,userId,petName})
{
    const [thumbnail,setThumbnail]=useState(null)
    const [name,setName]=useState("")
    const [category,setCategory]=useState("Serviço")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")

    var states={
        thumbnail,setThumbnail,name,setName,category,setCategory,price,setPrice,description,setDescription}

    async function handleSubmit(event){
        event.preventDefault();
        const data= new FormData();
        data.append('thumbnail',thumbnail)
        data.append('name',name)
        data.append('category',category)
        data.append('price',price)
        data.append('description',description)
        console.log(data)
        const response = await api.post('/petshop/new_item',data,{headers:{petshop_id:userId,petshop_name:petName}})
        if(response.data.status==="400")
        {
            alert("Erro de comunicação com o servidor!")
        }
        else{
            setModalStatus(false)
            window.location.reload();
        }   
    }

    return(
        <ProductForm actionSubmit={handleSubmit} states={states} isNew={true}/>
    )
}