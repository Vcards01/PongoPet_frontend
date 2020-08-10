import React from 'react'
import {StyledP} from './styled'
export default function({title,activeCategory,setActiveCategory})
{
    function handleCategoryClick(){
        setActiveCategory(title)
    }
    return(
        <StyledP active={activeCategory} title={title} onClick={handleCategoryClick}>
        {title} 
        </StyledP>


    )
}