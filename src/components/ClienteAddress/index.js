import React, {useState} from "react";
import {Container,ElementArea,ElementList,ElementButton,StyledButton} from "../GlobalComponents/styeld"
import {useSelector} from "react-redux"

import Modal from '../GlobalModal'
import NewAddressForm from './ClienteAddressNew'
import AddressElement from './ClienteAddressElement'
import AddressEdit from "./ClienteAddressEdit"

export default function(){
    const [modalNewStatus,setModalNewStatus]=useState(false);
    const [modalEditStatus,setModalEditStatus]=useState(false);
    const[modalData,setModalData]=useState({})
    const address=useSelector(state=>state.user.address)
    const userId= useSelector(state=>state.user.id)

    function handleNewAddress()
    {
        setModalNewStatus(true)
    }

    function handleEditAddress(data){
        setModalData(data)
        setModalEditStatus(true)

    }

    return(
        <Container>
            <ElementArea>
                <ElementList size={address.length}>
                {address.map((item,index)=>(
                    <AddressElement 
                        key={index} 
                        addressData={item}
                        addressId={index}
                        onClick={handleEditAddress}
                    />                                    
                ))}
                </ElementList>
            </ElementArea>
            <Modal status={modalEditStatus}  setStatus={setModalEditStatus}>
                <AddressEdit 
                    data={modalData}
                    addressList={address}
                    userId={userId}
                    setModalStatus={setModalEditStatus}
                />
            </Modal>
            <StyledButton onClick={handleNewAddress}>Adicionar novo endereço</StyledButton>
            <Modal status={modalNewStatus}  setStatus={setModalNewStatus}>
                <NewAddressForm 
                    addressList={address} 
                    setModalStatus={setModalNewStatus} 
                    userId={userId}>
                </NewAddressForm>
            </Modal>
        </Container>
    );
}