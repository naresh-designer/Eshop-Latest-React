const reducer = (state,action) =>{
    switch(action.type){
        case'ADD_CART':
        if(state.find((curElm)=>curElm.id === action.curProduct.id)){
            return state.map((curElm)=>{
                if(curElm.id === action.curProduct.id){
                    return {
                        ...curElm,
                        sam:curElm.sam + 1
                    }
                }else{
                    return curElm
                }
            })
        }
        return [...state, action.curProduct]

        case 'REMOVE':
            return state.filter((curElm)=>{
                return curElm.id !== action.payload.id
            })

        case'CLEAR_CART':
            return []
        default:
            return state
    }
}

export default reducer