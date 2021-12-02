const initialState = {
    cities:[],
    auxiliar:[],
    loading:true,
    alert:true,
    itineraries:[]
}

const filterReducer = (state = initialState,action) => {
    switch(action.type){
        case 'fetch':
            return{
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
                loading:false
            }
        case 'filter':
            let filtrado = action.payload.cities.filter((city => city.title.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))
            if(filtrado === 0){
                filtrado = state.auxiliar
            }
            return{
                ...state,
                auxiliar: filtrado,
                
            }
        case 'fetch2':
            return{
                ...state,
                itineraries:action.payload
            }
        default:
            return state
    }
}

export default filterReducer