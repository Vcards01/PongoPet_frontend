import React, {useState} from "react";
import {StyledList, StyledListItens, StyledNav, StyledLink , SearchInput,Exitimg} from './styled'
import history from "../../history"
import imgsair from '../../assets/sair.png'

export default function ({navStatus,search,onSearch}) {
    const [inputActive,setInputActive]=useState(search===""?false:true)
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
    function handleLogout()
    {
        localStorage.clear()
        window.location.reload();
    }
    function handleQuemsomos()
    {
        document.getElementById("Quemsomos").scrollIntoView();
    }
    function handleHome()
    {
        history.push('/Cliente')
    }
    function handleProfile()
    {
        history.push('/Profile')
    }
    function handleInit()
    {
        history.push("/")
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
                            <StyledLink onClick={handleHome}>Inicio</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink>Pedidos</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink onClick={handleProfile}>Perfil</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink onClick={handleLogout}>Sair</StyledLink>
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
                    </>:(navStatus==="petshop")?
                    <>
                        <StyledListItens>
                            <StyledLink >Produtos e Serviços</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                                <StyledLink>Pedidos</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                                <StyledLink>Perfil</StyledLink>
                        </StyledListItens>
                    </>:
                    <>
                        <StyledListItens>
                            <StyledLink onClick={handleInit} >Voltar para tela inicial!</StyledLink>
                        </StyledListItens>
                    </>
                }
            </StyledList>
        </StyledNav>
    );
}
