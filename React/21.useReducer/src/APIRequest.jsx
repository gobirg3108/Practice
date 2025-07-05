import { useReducer, useEffect } from "react";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function APIRequest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1" // Free test API
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    fetchData();
    return () => dispatch({ type: "RESET" }); // Cleanup on unmount
  }, []);

  if (state.loading) return <div className="loading">Loading...</div>;
  if (state.error)
    return (
      <div className="error">
        Error: {state.error}
        <button onClick={fetchData}>Retry</button>
      </div>
    );

  return (
    <div className="data">
      <h2>API Data:</h2>
      <pre>{JSON.stringify(state.data, null, 2)}</pre>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default APIRequest;
