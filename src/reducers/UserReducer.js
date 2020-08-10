const initialState = {
    address:[],
    payments:[],
    petshop_name:"",
    token:"",
    userType:"",
    name: "",
    email:"",
    id:"",
};

export default (state = initialState, action) => {
    let address = state.address
    let payments = state.payments
    switch(action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.payload.token,userType:action.payload.userType,
                name:action.payload.name,email:action.payload.email,id:action.payload.id,
                address:action.payload.address,payments:action.payload.payments,petshop_name:action.payload.petshop_name
            };
            break;
        case 'SET_DATA':
            return {...state, name:action.payload.name,email:action.payload.email};
            break;
        case 'SET_ADDRESS':
            return {...state, address:address};
            break;
        case 'SET_PAYMENT':
            return {...state, payments:payments};
            break;
    }

    return state;
}