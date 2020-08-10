//Padrão
import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import { useSelector} from 'react-redux';
//Componetes estilizados
import {Container,CategoryArea,CategoryList,StyledP,BackgroundSair,Exitimg} from './styled'
//Categorias
import CategoryItem from './../../components/GlobalCategoryItem'
//Dados pessoais
import ClienteData from '../../components/ClienteData'
//Endereços
import ClienteAddress from '../../components/ClienteAddress'
//Pagamentos
import ClientePayment from '../../components/ClientePayment'


export default function({setNavStatus,setFooterStatus}){

        //Definições
        setNavStatus('cliente')
        setFooterStatus('cliente')

        //States de funcionamento
        const[activeCategory,setActiveCategory] = useState('Dados Pessoais');
        const history = useHistory();
        const type= useSelector(state=>state.user.userType)



        function checkType()
        {
            switch(type) {
                case 'cliente':
                    return true
                    break;
                case 'petshop':
                    history.push("/Petshop")
                    return false
                    break;
                default:
                    break;
            }
        }
        const check=checkType()
        
    return(
        {check}?
        <Container>
            <CategoryArea>
                    <CategoryList>
                        <CategoryItem title="Dados Pessoais" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <CategoryItem title="Endereços" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <CategoryItem title="Pagamento" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    </CategoryList>
            </CategoryArea>
            {activeCategory==="Dados Pessoais"?<ClienteData/>:
             activeCategory==="Endereços"?<ClienteAddress/>:
             activeCategory==="Pagamento"?<ClientePayment/>:<></>
            }
        </Container>:<></>
    )
}