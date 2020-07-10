import React, {useState} from "react";
import {StyledList, StyledListItens, StyledNav, StyledLink , SearchInput} from './styled'

export default function ({navStatus,search,onSearch}) {

    const [inputActive,setInputActive]=useState(search==""?false:true)

    function handleInputFocus(){
        setInputActive(true)
    }

    function handleInputBlur(){
        if(search===""){
            setInputActive(false)
        } 
    }

    function handleOnchange(e)
    {
        onSearch(e.target.value)
    }


    function handleLogin()
    {
        document.getElementById("login").focus(); 
    }
    function handleQuemsomos()
    {
        document.getElementById("Quemsomos").scrollIntoView();
    }

    return (
        <StyledNav>
            <StyledList>
                {(navStatus==="home")?
                    <>
                        <StyledListItens>
                            <StyledLink onClick={handleLogin}>Login</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink onClick={handleQuemsomos}>Quem Somos</StyledLink>
                        </StyledListItens>
                    </>
                    :(navStatus==="cliente")?
                    <>
                        <StyledListItens>
                            <StyledLink >Inicio</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink>Pedidos</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink>Perfil</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <SearchInput type="text"
                            placeholder="O que deseja buscar?"
                            active={inputActive}
                            value={search}
                            onChange={handleOnchange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            />
                        </StyledListItens>
                    </>:<>
                        <StyledListItens>
                            <StyledLink >Produtos e Serviços</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                                <StyledLink>Pedidos</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                                <StyledLink>Perfil</StyledLink>
                        </StyledListItens>
                    </>
                }
            </StyledList>
        </StyledNav>
    );
}
