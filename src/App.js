import React,{useState} from 'react';
import Router from './router'
import { Container, Header, PageBody,Logo} from './AppStyled';
import Nav from './components/GlobalNav'
import Footer from './components/GlobalFooter'

export default () => {
    const[navStatus,setNavStatus] = useState("home")
    const[footerStatus,setFooterStatus] = useState("")
    const [search,setSearch]= useState("")


    return (
            <Container>
                <Header>
                    <Logo/>
                    <Nav navStatus={navStatus} search={search} onSearch={setSearch}/>
                </Header>
                <PageBody>
                    <Router setNavStatus={setNavStatus}
                            setFooterStatus={setFooterStatus} 
                            search={search}
                     />
                </PageBody>
                <Footer Status={footerStatus}/>
            </Container>
    );
}