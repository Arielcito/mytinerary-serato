import axios from "axios"

const itinerariesActions = {
    fetchItineraries: () => {
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/itineraries")
            dispatch({type:'fetchI',payload:res.data.response})
    }}
}
export default itinerariesActions