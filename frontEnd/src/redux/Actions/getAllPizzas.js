import axios from "axios";
export const GET_ALL_PIZZAS = "GET_ALL_PIZZAS";

export const getAllPizzas =  () => {
  return async function (dispatch) {
    const result = await axios.get("http://localhost:3001/api/pizzas");
    
    return dispatch({
      type: GET_ALL_PIZZAS,
      payload: result.data,
    });
  };
}
