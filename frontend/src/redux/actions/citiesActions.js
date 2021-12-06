import axios from "axios"

const citiesActions = {

    fetchCities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/cities")
            dispatch({type:'GET_CITIES',payload:res.data.response})
    }},
    filterCities: ( cities, value) => {
        return(dispatch,getState) => {
            dispatch({type:'FILTER_CITIES',payload:{cities,value}})
        }
    }
}

export default citiesActions