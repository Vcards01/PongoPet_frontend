import React,{useState} from 'react';
import { Container, MainImg,SecondImg,LoginContainer,SubContainer,StyledP  } from './styled';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import FormLogin from "./../../components/GlobalLogin"
import Modal from "../../components/GlobalModal"
import Cadastro from "../../components/GlobalRegister"
import UpdatePass from "../../components/GlobalUpdatePass"

import mainImg from '../../assets/HappyPets.png'
import secondImg from '../../assets/QuemSomos.png'

import api from "../../services/api"

export default({setNavStatus,setFooterStatus,}) => {
    
    setNavStatus('home')
    setFooterStatus("")
    const history = useHistory();
    const [modalStatus,setModalStatus]=useState(false);
    const [modalPassStatus,setModalPassStatus]=useState(false);
    const token= useSelector(state=>state.user.token)
    const type= useSelector(state=>state.user.userType)

    async function check()
    {
        const response = await api.get("/check",{
            headers:{authorization:token}
        })
        if(response.data.status==="401"){
            return true
        }
        switch(type) {
            case 'cliente':
                history.push("/Customer")
                break;
            case 'petshop':
                history.push("/Petshop")
                break;
            default:
                break;
        }
        return false
    }
    const checked=check()
    return (
        {checked}?
            <Container>
                <SubContainer>
                    <LoginContainer>
                        <FormLogin setStatus={setModalStatus} setPassStatus={setModalPassStatus}/>
                    </LoginContainer>
                    <MainImg src={mainImg}/>
                </SubContainer>
                <SubContainer>
                    <StyledP id="Quemsomos">Pongo Pet é uma iniciativa que busca aproximar PetShops de seus clientes por meio
                        da web.<br/>
                        Para o PetShop é simples,cadastre sua loja, seus serviços e produtos,e já está tudo pronto.<br/>
                        Para o cliente,mais simples ainda,cadastre suas informações e busque aquilo que você precisa.
                    </StyledP >
                    <SecondImg src={secondImg}/>
                </SubContainer>
                <Modal status={modalStatus} setStatus={setModalStatus}>
                    <Cadastro setStatus={setModalStatus}></Cadastro>
                </Modal>
                <Modal status={modalPassStatus} setStatus={setModalPassStatus}>
                    <UpdatePass setStatus={setModalPassStatus}/>
                </Modal>
            </Container>  :<></>
    );
}