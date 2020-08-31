import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import { useSelector} from 'react-redux';
//Componetes estilizados
import {Container,CategoryArea,CategoryList,StyledP,BackgroundSair,Exitimg} from './styled'
//Categorias
import CategoryItem from './../../components/GlobalCategoryItem'
//Dados
import PetData from "../../components/PetshopData"
import PetSales from "../../components/PetshopSales"
import PetAccount from "../../components/PetshopAccount"


export default function({setNavStatus,setFooterStatus}){

    setNavStatus('petshop')
    setFooterStatus('petshop')

    const[activeCategory,setActiveCategory] = useState('Dados Pessoais');
    const history = useHistory();
    const type= useSelector(state=>state.user.userType)

    function checkType()
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
    const check=checkType()
    return(
        {check}?
            <Container>
                <CategoryArea>
                        <CategoryList>
                            <CategoryItem title="Dados Pessoais" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                            <CategoryItem title="Vendas realizadas" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                            <CategoryItem title="Conta Bancária" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        </CategoryList>
                </CategoryArea>
                {activeCategory==="Dados Pessoais"?<PetData/>:
                activeCategory==="Vendas realizadas"?<PetSales/>:
                activeCategory==="Conta Bancária"?<PetAccount/>:<></>
                }
            </Container>:<></>
    )

}