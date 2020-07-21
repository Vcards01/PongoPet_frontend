import React, {useState} from "react";
import {Container,CategoryArea,CategoryList} from './styled'
import CategoryItem from './../../components/CategoryItem'

export default function(){
        //States de funcionamento
        const[activeCategory,setActiveCategory] = useState('Dados Pessoais');

    return(
        <Container>
            <CategoryArea>
                    <CategoryList>
                        <CategoryItem title="Dados Pessoais" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <CategoryItem title="Endereços" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        <CategoryItem title="Pagamento" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    </CategoryList>
            </CategoryArea>
        </Container>
    )
}