const jobsReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return action.payload.data;
    default:
      return state;
  }
};

export default jobsReducer;