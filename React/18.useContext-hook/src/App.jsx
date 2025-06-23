// useContext() = React Hook that allows you to share values
//                between multiple level of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <Child/>
//    </MyContext.Provider>

// CONSUMER COMPONENT
// 1. import React,{useContext} from 'react'
//    import {MyContext} from './ComponentA'
// 2. const value = useContext(MyContext)

import ComponentA from "./ComponentA";

function App() {
  return (
    <>
      <ComponentA />
    </>
  );
}

export default App;
