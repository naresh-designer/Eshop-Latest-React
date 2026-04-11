const reducer = (state,action) =>{
    switch(action.type){
        case'ADD_CART':
        return [...state, action.curProduct]

        case 'REMOVE':
            return state.filter((curElm)=>{
                return curElm.id !== action.payload.id
            })

        case'INCREASE':
            return state.map((curElm)=>{
                if(curElm.id === action.payload.id){
                    return {
                        ...curElm,
                        quantity:curElm.quantity + 1
                    }
                }
                return curElm
            })

        case'DECREASE':
            return state.map((curElm)=>{
                if(curElm.id === action.payload.id){
                    return {
                        ...curElm,
                        quantity:curElm.quantity - 1
                    }
                }
                return curElm
            })

        case'CLEAR_CART':
            return []
        default:
            return state
    }
}

export default reducer