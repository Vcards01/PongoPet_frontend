import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import { useSelector} from 'react-redux';

import {Container,CategoryArea,CategoryList,StyledP,BackgroundSair,Exitimg} from './styled'
import CategoryItem from './../../components/CategoryItem'



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

        </Container>:<></>
    )
}