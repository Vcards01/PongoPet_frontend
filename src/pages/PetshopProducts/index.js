import React, {useState,useEffect} from "react";
import { useSelector} from 'react-redux';
import {} from './styled';
import { Container, CategoryArea,CategoryList,ItemArea,ItemList } from '../CustomerHome/styled';
import {StyledButton} from "../../components/GlobalComponents/styeld"

import api from "./../../services/api"
//Componentes globais
import CategoryItem from '../../components/GlobalCategoryItem'
import ItemElement from '../../components/CustomerProductElement'
import Modal from '../../components/GlobalModal'
import ProductNew from '../../components/PetshopProducts/ProductsNew'
import ProductEdit from '../../components/PetshopProducts/ProductsEdit'

export default function({setNavStatus,setFooterStatus}){
    setNavStatus('petshop')
    setFooterStatus('petshop')

    const userId= useSelector(state=>state.user.id)
    const petName= useSelector(state=>state.user.petshop_name)
    const[activeCategory,setActiveCategory] = useState('Todas categorias');
    const[categories,setCategories]=useState([]);
    const[items,setItems]=useState([]);
    const [modalNewStatus,setModalNewStatus]=useState(false);
    const [modalEditStatus,setModalEditStatus]=useState(false);
    const[modalData,setModalData]=useState({})

     //Effect de categorias
    useEffect(()=>{
        let isActive = true;
        const getCategories = async ()=>{
            const cat = await api.post("/itens/list_categories");
            if(cat.status===200){
                if(isActive){
                    setCategories(cat.data);
                }
            }
        };
        getCategories();
        return () =>{isActive=false;}
    },[]);

    useEffect(()=>{
        let isActive = true;
        setItems([])
        const getItems = async ()=>{
            const items = await api.post("/petshop/list_itens",{activeCategory,id:userId});
            if(items.status===200)
            {
                if(isActive){
                    setItems(items.data);
                }
            }
    }   
        getItems()
        return () =>{isActive=false;}
    },[activeCategory])

    function handleItemClick()
    {
        setModalNewStatus(true)
    }
    function handleProductClick(data)
    {
        setModalData(data)
        setModalEditStatus(true)
    }
    return(
        <Container>
            <StyledButton onClick={handleItemClick}>Adicionar novo Produto ou Serviço</StyledButton>
            <Modal status={modalNewStatus}  setStatus={setModalNewStatus}>
                <ProductNew setModalStatus={setModalNewStatus} userId={userId} petName={petName}/>
            </Modal>
            {categories.length>0 && 
            <CategoryArea>
                <CategoryList>
                    <CategoryItem title="Todas categorias" activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    {categories.map((item,index)=>(
                        <CategoryItem key={index} title={item} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                    ))}
                </CategoryList>
            </CategoryArea>
            }
            {items.length>0 &&
                <ItemArea>
                    <ItemList>
                        {items.map((item,index)=>(
                            <ItemElement
                                key={index}
                                data={item}
                                onClick={handleProductClick}
                            />
                        ))}
                    </ItemList>
                </ItemArea>
            }
            <Modal status={modalEditStatus}  setStatus={setModalEditStatus}>
                <ProductEdit data={modalData} setModalStatus={setModalEditStatus}/>
            </Modal>
        </Container>
    )
}