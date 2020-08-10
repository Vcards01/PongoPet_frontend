import React, {useState} from "react";
import {Container,ElementArea,ElementList,StyledButton} from "../GlobalComponents/styeld"
import Modal from "../GlobalModal"
import PaymentNew from "./ClientePaymentNew"
import PaymentEdit from './ClientePaymentEdit'
import PaymentElement from './ClientePaymentElement'
import 'react-credit-cards/es/styles-compiled.css';
import {useSelector} from "react-redux"

export default function(){
    const [modalNewStatus,setModalNewStatus]=useState(false);
    const [modalEditStatus,setModalEditStatus]=useState(false);
    const[modalData,setModalData]=useState({})
    const userId= useSelector(state=>state.user.id)
    const payments=useSelector(state=>state.user.payments)

    function handleClick()
    {
        setModalNewStatus(true)
    }

    function handleEditPayment(data)
    {
        setModalData(data)
        setModalEditStatus(true)
    }
    return(
        <Container>
            <ElementArea>
                <ElementList size={payments.length}>
                    {payments.map((item,index)=>(
                        <PaymentElement
                            key={index} 
                            paymentData={item}
                            paymentId={index}
                            onClick={handleEditPayment}
                        />
                    ))}
                </ElementList>
            </ElementArea>
            <Modal status={modalEditStatus}  setStatus={setModalEditStatus}>
                <PaymentEdit 
                    data={modalData}
                    paymentList={payments}
                    userId={userId}
                    setModalStatus={setModalEditStatus}
                />
            </Modal>
            <StyledButton onClick={handleClick}>Adicionar novo metodo de pagamento</StyledButton>
            <Modal status={modalNewStatus}  setStatus={setModalNewStatus}>
                <PaymentNew paymentList={payments} userId={userId} setModalStatus={setModalNewStatus}/>
            </Modal>
        </Container>
    )
}