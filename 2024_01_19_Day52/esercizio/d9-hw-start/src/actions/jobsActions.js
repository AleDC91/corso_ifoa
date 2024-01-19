export const getJobs = (company) => {
  console.log("Dispatching getJobs action");
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  console.log("params: " + company);
  console.log(baseEndpoint + company)

  return (dispatch) => {
    dispatch({ type: "SET_LOADING" })

    
    fetch(baseEndpoint + company)
      .then((response) => {
        if (response.ok) {
          console.log( "dentro thunk" +response)
          return response.json();
        } else {
          throw new Error("Fetch error")
        }
      })
      .then((json) => {
        console.log("dispa");
        return dispatch({ type: "GET_JOBS", payload: json });
      })

      .catch((err) => {
        console.log(err);
        return dispatch({ type: "SET_ERROR", payload: err.message})
        
      });
  };
};
