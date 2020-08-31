const initialState = {
    address:[],
    payments:[],
    petshop_name:"",
    contato:"",
    token:"",
    userType:"",
    name: "",
    email:"",
    id:"",
    account:{},
};

export default (state = initialState, action) => {
    let address = state.address
    let payments = state.payments
    switch(action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.payload.token,userType:action.payload.userType,
                name:action.payload.name,email:action.payload.email,id:action.payload.id,
                address:action.payload.address,payments:action.payload.payments,petshop_name:action.payload.petshop_name,
                contato:action.payload.contato,account:action.payload.account
            };
            break;
        case 'SET_DATA':
            return {...state, name:action.payload.name,email:action.payload.email,contato:action.payload.contato,petshop_name:action.payload.petshop_name};
            break;
        case 'SET_ADDRESS':
            return {...state, address:address};
            break;
        case 'SET_PAYMENT':
            return {...state, payments:payments};
            break;
        case 'SET_ACCOUNT':
            return {...state, account:action.payload.account}
    }

    return state;
}