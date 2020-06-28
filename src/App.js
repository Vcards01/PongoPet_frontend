import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Router from './router'

import { Container, Header,Footer , PageBody,Logo,MiniLogo,StyledP,StyledA } from './AppStyled';
import Nav from './components/Nav'


export default () => {
    const[navStatus,setNavStatus] = useState("home")

    return (
            <Container>
                <Header>
                    <Logo/>
                    <Nav navStatus={navStatus}/>
                </Header>
                <PageBody>
                    <Router setNavStatus={setNavStatus}/>
                </PageBody>
                <Footer>
                    <StyledP>Desenvolvimento:<br/>Victor Hugo Cardoso</StyledP>
                    <MiniLogo/>
                    <StyledP>Creditos:<br/>
                    Logo <StyledA href="http://www.freepik.com">Designed by Primm / Freepik</StyledA><br/>
                    Artes e Imagens <StyledA href="http://www.freepik.com">Designed by Freepik</StyledA></StyledP>
                </Footer>
            </Container>
    );
}