export const getJobs = (company) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  console.log("params: " + company);
  console.log(baseEndpoint + company)

  return (dispatch) => {
    fetch(baseEndpoint + company)
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response.json();
        }
        console.log(response)
      })
      .then((json) => {
        console.log("dispa");
        return dispatch({ type: "GET_JOBS", payload: json });
      })

      .catch((err) => console.log(err));
  };
};
