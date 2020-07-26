const initialState = {
    token:"",
    userType:"",
    name: "",
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.payload.token,userType:action.payload.userType};
        break;
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
    }

    return state;
}