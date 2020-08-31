import React ,{useState,useEffect}from 'react';
import socketio from 'socket.io-client'
import { useHistory} from "react-router-dom";
import { useSelector} from 'react-redux';
import { Container,ItemList,CategoryArea,CategoryList } from './styled';
import CategoryItem from './../../components/GlobalCategoryItem'
import OrdersNew from "../../components/PetshopOrder/OrderNew"
import OrdersOpen from "../../components/PetshopOrder/OrderOpen"
import OrderClosed from "../../components/PetshopOrder/OrderClosed"
import variables from '../../services/variables.json'

export default ({setNavStatus,setFooterStatus}) => {
    setNavStatus('petshop')
    setFooterStatus('petshop')

    const history = useHistory();
    const[activeCategory,setActiveCategory] = useState('Novos');
    const type= useSelector(state=>state.user.userType)
    const userId = useSelector(state=>state.user.id)
    const [NewOrder,setNewOrder] = useState({})

    useEffect(()=>{
        const socket =socketio(variables.BACKEND_URL,{
            query:{userId}
        })

        socket.on('order_request', data=>{
            setNewOrder(data)
        })
    },[])

    function CheckType()
    {
        switch(type) {
            case 'cliente':
                history.push("/Customer")
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
            <CategoryArea>
                    <CategoryList>
                        <CategoryItem title="Novos" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <CategoryItem title="Em andamento" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <CategoryItem title="Finalizados" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    </CategoryList>
            </CategoryArea>
            {activeCategory==="Novos"?<OrdersNew newOrder={NewOrder}/>:
             activeCategory==="Em andamento"?<OrdersOpen/>:
             activeCategory==="Finalizados"?<OrderClosed/>:<></>
            }
        </Container>:<></>
    );
}