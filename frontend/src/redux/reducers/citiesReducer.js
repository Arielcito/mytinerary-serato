const initialState = {
    cities:[],
    auxiliar:[],
    loading:true,
}

const citiesReducer = (state = initialState,action) => {
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
            return{
                ...state,
                auxiliar: filtrado,
            }
        
        default:
            return state
    }
}

export default citiesReducer