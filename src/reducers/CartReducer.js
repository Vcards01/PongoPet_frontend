const initialState = {
    items:[],
    address:[],
    discount:0,
    delivery:0,
};

export default (state = initialState, action) => {
    let items=[...state.items];
    switch(action.type) {
        case 'ADD_ITEM':
            let id =action.payload.data.id
            let index = items.findIndex(item=>item.id===id);
            if(index>-1){
                items[index].qt+=action.payload.qt;
            }
            else{
                items.push(
                    {
                    ...action.payload.data,
                    qt:action.payload.qt,
                    }
                )
            }
            return{...state,items}
        break;
        case 'CHANGE_ITEM':
            
            if(items[action.payload.key])
            {
                switch(action.payload.type){
                    case '-':
                        items[action.payload.key].qt--;
                        if(items[action.payload.key].qt <= 0)
                        {
                            items=items.filter((item,index)=>index!=action.payload.key);
                        }
                    break
                    case '+':
                        items[action.payload.key].qt++;
                    break
                }
            }
            return{...state,items}
        break
    }
    return state
}

    