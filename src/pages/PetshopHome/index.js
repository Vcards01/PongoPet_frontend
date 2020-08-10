import React ,{useState,useEffect}from 'react';
import { useHistory} from "react-router-dom";
import { useSelector} from 'react-redux';
import { Container,ItemList } from './styled';
import Solicitações from "../../components/PetshopPedidos/PetshopPedidosNew"
import api from '../../services/api'

export default ({setNavStatus}) => {
    const history = useHistory();
    setNavStatus('petshop')
    var stop=""
    const[pedidos,setPedidos]=useState([]);
    const type= useSelector(state=>state.user.userType)
    const userId= useSelector(state=>state.user.id)

    useEffect(()=>{
        let isActive = true;
        setPedidos([])
        const getPedidos = async ()=>{
            const response= await api.post("/myPedidos",{id:userId});
            console.log(response.data.pedido)
            if(response.status===200)
            {
                if(isActive){
                    setPedidos(response.data.pedido);
                }
            }
        }   
        getPedidos()
        return () =>{isActive=false;}
    },[])


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
            <h2>Solicitações</h2>
            <ItemList>
            {pedidos.map((item,index)=>(
                <Solicitações
                    key={index}
                    pedido={item}
                />
            ))}
            </ItemList>

        </Container>:<></>
    );
}