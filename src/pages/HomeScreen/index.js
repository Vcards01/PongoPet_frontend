import React,{useState} from 'react';
import { Container, MainImg,SecondImg,LoginContainer,SubContainer,StyledP  } from './styled';

import FormLogin from "./../../components/LoginForm"
import Modal from "./../../components/Modal"
import Cadastro from "./../../components/CadastroForm"

import mainImg from '../../assets/HappyPets.png'
import secondImg from '../../assets/QuemSomos.png'

export default({setNavStatus,setFooterStatus,}) => {
    
    setNavStatus('home')
    setFooterStatus("")
    const [modalStatus,setModalStatus]=useState(false);
    return (
            <Container>
                <SubContainer>
                    <LoginContainer>
                        <FormLogin setStatus={setModalStatus}/>
                    </LoginContainer>
                    <MainImg src={mainImg}/>
                </SubContainer>
                <SubContainer>
                    <StyledP id="Quemsomos">Pongo Pet é uma iniciativa que busca aproximar PetShops de seus clientes por meio
                        da web.<br/>
                        Para o PetShop é simples,cadastre sua loja, seus serviços e produtos,e já ta tudo pronto.<br/>
                        Para o cliente,mais simples ainda,cadastre suas informações e busque aquilo que você precisa.
                    </StyledP >
                    <SecondImg src={secondImg}/>
                </SubContainer>
                <Modal status={modalStatus} setStatus={setModalStatus}>
                    <Cadastro setStatus={setModalStatus}></Cadastro>
                </Modal>
            </Container>
    );
}