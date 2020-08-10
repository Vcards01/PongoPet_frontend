import React, {useEffect} from "react";
import {StyledForm,StyledLabel,StyledInput,StyledButton,AreaButton } from '../../GlobalComponents/styeld'
import cepApi from 'cep-promise'

export default function({states,actionSubmit,actionSave,actionDelete,isNew,isEdit})
{
    function handleCepCheck(value){
        var cep =value.replace(/[^\d]+/g,'');
        console.log(cep.length)
        if (cep.length>8){
            return false
        }
        states.setCep(cep)
        if(cep.length===0)
        {
            states.setEstado("")
            states.setCidade("")
            states.setBairro("")
            states.setRua("")
        }
        if (cep.length<8 ){
            return false
        }
        else{
            cepApi(cep).then((response) => {
                states.setEstado(response.state)
                states.setCidade(response.city)
                states.setBairro(response.neighborhood)
                states.setRua(response.street)
            })
        }
    }

    function setSave()
    {
        actionSave(true)
    }

    function setDelete()
    {
        actionDelete(true)
    }

    return(
        <StyledForm onSubmit={actionSubmit}>
            <StyledInput placeholder="CEP" type="text" value={states.cep|| ''} onChange={event => handleCepCheck(event.target.value)} required/>
            <StyledInput placeholder="Estado" type="text" value={states.estado|| ''} onChange={event => states.setEstado(event.target.value)} required/>
            <StyledInput placeholder="Cidade" type="text" value={states.cidade|| ''} onChange={event => states.setCidade(event.target.value)} required/>
            <StyledInput placeholder="Bairro" type="text" value={states.bairro|| ''} onChange={event => states.setBairro(event.target.value)} required/>
            <StyledInput placeholder="Rua" type="text" value={states.rua|| ''} onChange={event => states.setRua(event.target.value)} required/>
            <StyledInput placeholder="Número" type="number" min="1" value={states.numero|| ''} onChange={event => states.setNumero(event.target.value)} required/>
            <AreaButton id="edit" isNew={isNew}>
                <StyledButton  onClick={setSave} small={true}>Salvar</StyledButton>
                <StyledButton  onClick={setDelete} small={true}>Excluir</StyledButton>
            </AreaButton>
            <StyledButton id="newSave" isEdit={isEdit}>Salvar</StyledButton>
        </StyledForm>
    )
}