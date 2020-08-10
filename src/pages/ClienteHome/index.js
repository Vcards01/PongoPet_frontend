import React,{useState,useEffect} from 'react';
import { useHistory} from "react-router-dom";
import { useSelector} from 'react-redux';
import { Container, CategoryArea,CategoryList,ItemArea,ItemList } from './styled';
//API
import api from "./../../services/api"
//Componentes globais
import CategoryItem from './../../components/GlobalCategoryItem'
import Modal from "./../../components/GlobalModal"
//Componentes cliente
import ItemElement from '../../components/ClienteItemElement'
import Cart from './../../components/ClienteCart'
import ModalItems from '../../components/ClienteItemOpen'
let searchTimer = null;

export default ({setNavStatus,setFooterStatus,search}) => {
    //Definições
    setNavStatus('cliente')
    setFooterStatus('cliente')

    const history = useHistory();
    const type= useSelector(state=>state.user.userType)

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
        let isActive = true;
        const getCategories = async ()=>{
            const cat = await api.post("/listCategories");
            if(cat.status===200){
                if(isActive){
                    setCategories(cat.data);
                }
            }
        };
        getCategories();
        return () =>{isActive=false;}
    },[]);

    //Effect de pesquisa
    useEffect(()=>{
        let isActive = true;
        clearTimeout(searchTimer);   
        searchTimer=setTimeout(()=>{
            if(isActive){
                setActiveSearch(search);
            }
        },1000);
        return () =>{isActive=false;}
    },[search])

    //Effect de filtro
    useEffect(()=>{
        let isActive = true;
        setItems([])
        const getItems = async ()=>{
            const items = await api.post("/listItems",{activeCategory,activeSearch});
            if(items.status===200)
            {
                if(isActive){
                    setItems(items.data);
                }
            }
    }   
        getItems()
        return () =>{isActive=false;}
    },[activeCategory,activeSearch])

    //Abir modal do produto
    function handleProductClick(data)
    {
        setModalData(data);
        setModalStatus(true);
    }

    //Verifica o tipo de usuario para limitar acesso
    function CheckType()
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

    const check=CheckType()

    return (
        {check}?
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
            </>:<></>
    );
}