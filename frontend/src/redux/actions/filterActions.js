import axios from "axios"

const filterActions = {
    fetchCities: (dispatch, getState) => {
        axios.get("http://localhost:4000/api/cities")
        .then(res => dispatch({type:'fetch',payload:res.data.respuesta}))
    },
    filter: ( cities, value) => {
        return(dispatch,getState) => {
            cities.filter(
                (city) =>
                  city.title.toLowerCase().replace(/ /g, "").startsWith(value) ||
                  city.country.toLowerCase().replace(/ /g, "").startsWith(value)
              );
        }
    }
}

export default filterActions