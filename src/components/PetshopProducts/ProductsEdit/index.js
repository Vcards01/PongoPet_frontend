import React, {useState,useEffect} from "react";
import api from '../../../services/api'
import ProductForm from '../ProductsForm'

export default function({data,userId,setModalStatus}){

    const [thumbnail,setThumbnail]=useState(null)
    const [thumbPreview,setThumPreview]=useState(data.thumbnail_url)
    const [name,setName]=useState(data.name)
    const [category,setCategory]=useState(data.category)
    const [price,setPrice]=useState(data.price)
    const [description,setDescription]=useState(data.description)
    const [productId,setProductId]=useState(data.id)
    const [save,setSave]=useState(false)
    const [delete_,setDelete_]=useState(false)

    useEffect(()=>{

        setName(data.name)
        setCategory(data.category)
        setPrice(data.price)
        setDescription(data.description)
        setProductId(data.id)
        setThumPreview(data.thumbnail_url)
    },[data.thumbnail_url,data.name,data.category,data.price,data.description,data.id])
    
    var states={
        thumbnail,setThumbnail,name,setName,category,setCategory,price,setPrice,description,setDescription,thumbPreview}

    
    async function handleSubmit(event)
    {
        event.preventDefault();
        if(save){
            setSave(false)
            setDelete_(false)
            const data_= new FormData();
            data_.append('name',name)
            data_.append('category',category)
            data_.append('price',price)
            data_.append('description',description)
            data_.append('id',productId)
            if(thumbnail!==null)
            {
                console.log(thumbnail)
                data_.append('thumbnail',thumbnail)
            }
            const response = await api.post("/petshop/update_items",data_)
            console.log(response)
            if(response.data.ok){
                setModalStatus(false)
                window.location.reload();
            }
        }
        else if(delete_)
        {
            setSave(false)
            setDelete_(false)
            const response = await api.post("/petshop/delete_item",{id:productId})
            console.log(response)
            if(response.data.ok){
                setModalStatus(false)
                window.location.reload();
            }
        }
        
    }
    
    return(
        <ProductForm actionSubmit={handleSubmit} actionSave={setSave} actionDelete={setDelete_} isEdit={true} states={states}/>
    )
}