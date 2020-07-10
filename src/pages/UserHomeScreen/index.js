import React,{useState,useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container, CategoryArea,CategoryList,ItemArea,ItemList } from './styled';
import Cart from './../../components/Cart'
import CategoryItem from './../../components/CategoryItem'
import ItemElement from './../../components/ItemElement'
import Modal from "./../../components/Modal"
import ModalItems from './../../components/MoldalItems'
import api from "./../../services/api"

let searchTimer = null;

export default ({setNavStatus,setFooterStatus,search}) => {
    //Definições
    setNavStatus('cliente')
    setFooterStatus('cliente')

    const history = useHistory();
    const dispatch = useDispatch();

    //States
    const[categories,setCategories]=useState([]);
    const[items,setItems]=useState([]);
    //States de funcionamento
    const[activeCategory,setActiveCategory] = useState('Todas categorias');
    const[activeSearch,setActiveSearch]=useState("");
    const [modalStatus,setModalStatus]=useState(false);
    const[modalData,setModalData]=useState({})

    //Effect de categorias
    useEffect(()=>{
        const getCategories = async ()=>{
            const cat = await api.post("/listCategories");
            if(cat.status===200){
                setCategories(cat.data);
            }
        };
        getCategories();
    },[]);

    //Effect de pesquisa
    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer=setTimeout(()=>{
            setActiveSearch(search);
        },1000);
    },[search])

    //Effect de filtro
    useEffect(()=>{
        setItems([])
        getItems()
    },[activeCategory,activeSearch])

    //Pega os intens do banco
    async function getItems()
    {
        const items = await api.post("/listItems",{activeCategory,activeSearch});
        if(items.status===200)
        {
            setItems(items.data);
        }
    }

    function handleProductClick(data)
    {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <>
        <Container>
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
            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalItems status={setModalStatus} data={modalData}></ModalItems>
            </Modal>
        </Container>
        <Cart></Cart>
        </>
    );
}