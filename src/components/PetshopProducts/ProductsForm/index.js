import React, {useState,useMemo} from "react";
import {StyledForm,StyledLabel,StyledInput,StyledButton,AreaButton } from '../../GlobalComponents/styeld'
import {StyledTextArea,StyledSelect,FileLabel,FileInput,FileImg,ContainerBtn} from "./styled"
import camera from '../../../assets/camera.svg'
import * as boots from 'react-bootstrap'

export default function({actionSubmit,states,actionSave,actionDelete,isNew,isEdit})
{

    const[loading,setLoading]=useState(false);
    const preview = useMemo(
        ()=>{
            return states.thumbnail?URL.createObjectURL(states.thumbnail):null
        },[states.thumbnail]
    )

    function setSave()
    {
        setLoading(true)
        actionSave(true)
    }

    function setDelete()
    {
        setLoading(true)
        actionDelete(true)
    }
    return(
        <StyledForm onSubmit={actionSubmit}>
            <FileLabel hasThumb={states.thumbnail?true:false} style={{backgroundImage:`url(${preview?preview:states.thumbPreview})`}}>
                <FileInput type="file" onChange={event=>states.setThumbnail(event.target.files[0])}/>
                <FileImg hasThumb={states.thumbnail?true:false} src={camera}/>
            </FileLabel>
            <StyledInput placeholder="Nome" type="text" value={states.name|| ''} onChange={event => states.setName(event.target.value)} required/>
            <StyledInput placeholder="Preço" type="number" min="1.00" step="0.01" max="2500" value={states.price|| ''} onChange={event => states.setPrice(event.target.value)} required/>
            <StyledTextArea placeholder="Pequena Descrição" type="text" value={states.description|| ''} onChange={event => states.setDescription(event.target.value)} required/>
            <StyledSelect palceholder="Categorias" name="categoria" onChange={event =>states.setCategory(event.target.value)}>
                <option value="Serviço">Serviço</option>
                <option value="Produto">Produto</option>
            </StyledSelect>           
            <AreaButton id="edit" isNew={isNew}>
                <StyledButton onClick={setSave} small={true}>Salvar</StyledButton>
                <StyledButton onClick={setDelete} small={true}>Excluir</StyledButton>
                {loading?<boots.Spinner animation="border" />:<></>}
            </AreaButton>
            <ContainerBtn>
                <StyledButton id="newSave" isEdit={isEdit}>Salvar</StyledButton>
            </ContainerBtn>
            
        </StyledForm>
    )
}