import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import api from './../../services/api'
import {StyledForm,ContainerBtn,StyledInput,StyledButton,StyledLabel,StyledU,SubContainer,StyledP,StyledPara} from './styled'
import {useDispatch} from 'react-redux'
import * as boots from 'react-bootstrap'

export default function ({setStatus,setPassStatus}) {

    const dispatch = useDispatch()
    const history = useHistory();
    const[typeUser,setTypeUser] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[loading,setLoading]=useState(false);



    const handleCadastrar=(e)=>{
            setStatus(true)
        }   

    async function handleChangePass(){
        setPassStatus(true)
    }

    async function handleSubmit(event){
        event.preventDefault();
        setLoading(true)
        const response =  await api.post("/user/login",{email,password,type:typeUser,})
        if(response.data.status==="400"){
            if(response.data.error==="USUÁRIO NÃO CONFIRMADO")
            {
                document.getElementById("notConfirmed").style.display = "block";
                document.getElementById("notConfirmed").style.color = "red";
            }
            else{
            document.getElementById("exists").style.display = "block";
            document.getElementById("exists").style.color = "red";
            }
        }
        else{
            let token="Bearer "+response.data.token
            var name = response.data.user.name
            var id = response.data.user._id
            var address=response.data.user.address
            var payment = response.data.user.payment
            var petshop_name=response.data.user.petshop_name
            var contato = response.data.user.contact
            var account = response.data.user.account
            dispatch({
                type:'SET_TOKEN',
                    payload:{
                        token,
                        userType:typeUser,
                        name:name,
                        email:email,
                        id:id,
                        address:address,
                        payments:payment,
                        petshop_name:petshop_name,
                        contato:contato,
                        account:account
                    }
                });
            switch(typeUser) {
                case 'cliente':
                    history.push("/Customer")
                    break;
                case 'petshop':
                    history.push("/Petshop")
                    break;
            }
        }       
    }

    function changeEmail(value){
        document.getElementById("exists").style.display = "none"
        document.getElementById("notConfirmed").style.display = "none";
        setEmail(value)
    }
    function changePass(value){
        document.getElementById("exists").style.display = "none"
        document.getElementById("notConfirmed").style.display = "none";
        setPassword(value)
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h1>Login</h1>
            <StyledP id="notConfirmed">Conta não confirmada!<br/>Um email de confirmação foi enviado</StyledP>
            <StyledP id="exists">Usuário ou senha incorreto</StyledP>
            <StyledLabel>Email:</StyledLabel>
            <StyledInput id="login" type="email" name="email"placeholder="Seu melhor email!" onChange={event => changeEmail(event.target.value)}/>
            <StyledLabel>Senha:</StyledLabel>
            <StyledInput type="password" name="password" placeholder="Uma senha bem forte" onChange={event => changePass(event.target.value)} />
            <StyledPara>Esqueceu a senha?<StyledU onClick={handleChangePass}>Clique aqui!</StyledU></StyledPara>
            <StyledLabel>Tipo de usuário:</StyledLabel>
            <SubContainer>
                <label>
                    <input type="radio" value="petshop" name="user" onChange={event => setTypeUser(event.target.value)} />
                    PetShop
                </label>
                <label>
                    <input type="radio" value="cliente" name="user" onChange={event => setTypeUser(event.target.value)}/>
                    Cliente
                </label>
            </SubContainer>
            <StyledPara>Não tem uma conta?<StyledU onClick={handleCadastrar}>Cadastre-se aqui!</StyledU></StyledPara>
            <ContainerBtn>
                <StyledButton>Entrar</StyledButton>
                {loading?<boots.Spinner animation="border" />:<></>}
            </ContainerBtn>         
        </StyledForm>
    );}