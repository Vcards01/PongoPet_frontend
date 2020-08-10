import React,{useEffect} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Container,StyledForm,StyledInput,StyledButton,AreaButton} from '../../GlobalComponents/styeld'

export default function({actionSubmit,states,setSave,setDelete,isNew,isEdit}){


    function numberSize(value)
    {
        if(value.length===17)
        {
            return false
        }
        states.setNumber(value)
    }

    function numberEdit(number)
    {
        number="**** **** **** "+number.substring(12,16)
        return number
    }

    function dateSize(value)
    {
        value=value.replace(/[a-zA-Z]/g, "");
        if(value.length<=5){
            if(value[0]>1)
            {
                value="0"+value
            }
            if(value.length===1)
            {
                states.setCheck(true)
            }
            if(value.length===2)
            {
                if(states.check){
                    if(value>12)
                    {
                        value='12'
                    }
                    if(value[1]==="/")
                    {
                        value="01"
                    }
                    value=value+"/"
                    states.setCheck(false)
                }
            }
            states.setExpiry(value)
        }        
    }
    
    function cvcSize(value)
    {
        if(value.length===4)
        {
            return false
        }
        states.setCvc(value)
    }
    
    var handleInputFocus = (e) => {
        states.setFocus({ focus: e.target.name });
    }
 
    function setStateSave()
    {
        setSave(true)
    }

    function setStateDelete()
    {
        setDelete(true)
    }

    return(
        <Container>
            <Cards
             cvc={states.cvc||""}
             expiry={states.expiry||""}
             focused={states.focus||""}
             name={states.name||""}
             number={isEdit?numberEdit(states.number||""):states.number||""}
             preview={isEdit?true:false}
             issuer={isEdit?states.issuer:""}
            />
            <StyledForm onSubmit={actionSubmit}>
                <StyledInput 
                    required 
                    readOnly={isEdit?true:false}
                    placeholder="Número" 
                    name="number" 
                    type="text" 
                    maxlength="16" 
                    value={isEdit?numberEdit(states.number||""):states.number||""} 
                    onChange={handleInputFocus} 
                    onChange={event => numberSize(event.target.value)}
                />
                <StyledInput 
                    required 
                    placeholder="Nome no cartão" 
                    name="name" 
                    type="text" 
                    value={states.name||""} 
                    onChange={handleInputFocus} 
                    onChange={event => states.setName(event.target.value)}
                />
                <StyledInput 
                    required 
                    placeholder="Data vencimento" 
                    name="expiry" 
                    type="text" 
                    value={states.expiry||""} 
                    maxlength = "5" 
                    onChange={handleInputFocus} 
                    onChange={event => dateSize(event.target.value)}
                />
                <StyledInput 
                    required={states.delete_?false:true} 
                    id='cvc' 
                    placeholder="CVC" 
                    name="cvc" 
                    type="text" 
                    value={states.cvc||""} 
                    onChange={handleInputFocus} 
                    onChange={event => cvcSize(event.target.value)}
                />
                <AreaButton  isNew={isNew}>
                    <StyledButton  onClick={setStateSave} small={true}>Salvar</StyledButton>
                    <StyledButton  onClick={setStateDelete} small={true}>Excluir</StyledButton>
                </AreaButton>
                <StyledButton isEdit={isEdit}>Salvar</StyledButton>
            </StyledForm>
        </Container>
    )
}