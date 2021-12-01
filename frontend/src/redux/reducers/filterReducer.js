const initialState = {
    cities:[]
}
const filterReducer = (state = initialState,action) => {
    switch(action.type){
        case 'fetch':
            return{
                ...state,
                productos: action.payload
            }
        default:
            return state
        
    }

}

export default filterReducer