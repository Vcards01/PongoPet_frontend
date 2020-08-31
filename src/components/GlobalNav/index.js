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
    function handleInit()
    {
        history.push("/")
    }
    //Routes Clientes
    function handleHome()
    {
        history.push('/Customer')
    }
    function handleProfile()
    {
        history.push('/Customer/Profile')
    }
    function handleOrder()
    {
        history.push('/Customer/Orders')
    }

    //Routes PetShop
    function handlePetshop()
    {
        history.push("/Petshop")
    }
    function handleProducts()
    {
        history.push('/Petshop/Products')
    }
    function handleProfilePet(){
        history.push('/Petshop/Profile')
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
                            <StyledLink onClick={handleOrder}>Pedidos</StyledLink>
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
                                <StyledLink onClick={handlePetshop}>Pedidos</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink onClick={handleProducts}>Produtos e Serviços</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                                <StyledLink onClick={handleProfilePet}>Perfil</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink onClick={handleLogout}>Sair</StyledLink>
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
