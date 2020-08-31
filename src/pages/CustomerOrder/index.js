//Padrão
import React, {useState,useEffect} from "react";
import socketio from 'socket.io-client'
import { useSelector} from 'react-redux';
import {Container,ItemList,CategoryArea,CategoryList} from './styled'
import CategoryItem from './../../components/GlobalCategoryItem'
import OrderAccepted from '../../components/CustomerOrder/OrderOpen'
import ClienteRequestOld from '../../components/CustomerOrder/OrderClosed'
import variables from '../../services/variables.json'

export default function({setNavStatus,setFooterStatus}){
    //Definições
    setNavStatus('cliente')
    setFooterStatus('cliente')

    const[activeCategory,setActiveCategory] = useState('Em andamento');
    const userId = useSelector(state=>state.user.id)
    const [UpdateOrder,setUpdateOrder] = useState({})
    useEffect(()=>{
        const socket =socketio(variables.BACKEND_URL,{
            query:{userId}
        })

        socket.on('order_update', data=>{
            setUpdateOrder(data)
        })
    },[])

   
    return(
        <Container>
            <CategoryArea>
                    <CategoryList>
                        <CategoryItem title="Em andamento" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <CategoryItem title="Encerrados" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    </CategoryList>
            </CategoryArea>
            {activeCategory==="Em andamento"?<OrderAccepted UpdateOrder={UpdateOrder}/>:
             activeCategory==="Encerrados"?<ClienteRequestOld UpdateOrder={UpdateOrder}/>:<></>
            }
        </Container>
    )
}