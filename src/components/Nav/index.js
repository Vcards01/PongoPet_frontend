import React from "react";
import {StyledList, StyledListItens, StyledNav, StyledLink} from './styled'

export default function ({navStatus}) {

    console.log(navStatus)

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
                            <StyledLink>Buscar</StyledLink>
                        </StyledListItens>
                        <StyledListItens>
                            <StyledLink>Perfil</StyledLink>
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
