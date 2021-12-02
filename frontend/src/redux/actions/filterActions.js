import axios from "axios"

const filterActions = {

    fetchCities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/cities")
            dispatch({type:'fetch',payload:res.data.response})
    }},
    filterCities: ( cities, value) => {
        return(dispatch,getState) => {
            dispatch({type:'filter',payload:{cities,value}})
        }
    },
    fetchItineraries: () => {
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/itineraries")
            dispatch({type:'fetch2',payload:res.data.response})
    }}

}

export default filterActions