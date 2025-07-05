import { useReducer } from "react";

function Form() {
  const initialState = { name: "", email: "", password: "" };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    return { ...state, [action.field]: action.value };
  }

  return (
    <>
      <h1>Form Handling</h1>
      <form>
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ field: "name", value: e.target.value })}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="email"
          value={state.email}
          onChange={(e) => dispatch({ field: "email", value: e.target.value })}
          placeholder="Email"
          autoComplete="email"
        />
        <br />
        <br />
        <input
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({ field: "password", value: e.target.value })
          }
          placeholder="Password"
          autoComplete="current-password"
        />
      </form>
    </>
  );
}

export default Form;
