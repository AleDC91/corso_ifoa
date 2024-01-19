const jobsReducer = (
  state = {
    jobs: {
      jobsList: [],
      loading: false,
      error: "",
    },
  },
  action
) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        jobsList: action.payload.data,
        loading: false,
        error: "",
      };

    case "SET_ERROR":
      return {
        loading: false,
        error: action.payload,
      }

    case "SET_LOADING":
      return {
        loading: true,
        error: ""
      }  
    default:
      return state;
  }
};

export default jobsReducer;
