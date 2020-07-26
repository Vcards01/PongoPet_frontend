import React from 'react';
import { useHistory} from "react-router-dom";
import { useSelector} from 'react-redux';
import { Container, Titulo } from './styled';

export default ({setNavStatus}) => {
    const history = useHistory();
    setNavStatus('petshop')
    const type= useSelector(state=>state.user.userType)

    function CheckType()
    {
        switch(type) {
            case 'cliente':
                history.push("/Cliente")
                return false
                break;
            case 'petshop':
                return true
                break;
            default:
                break;
        }
    }
    const check=CheckType()

    return (
        {check}?
        <Container>
            <Titulo>Tela3</Titulo>
            <button onClick={()=>history.goBack()}>Voltar</button>
        </Container>:<></>
    );
}