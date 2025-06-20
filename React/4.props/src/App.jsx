// props = read only properties that are shared between components.
//         A parent component can send data to a child component.

//         < Component key =value/>

import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Gobi" age={22} isStudent={true} />
      <Student name="Chandru" age={12} isStudent={true} />
      {/* defaultProps */}
      <Student />
    </>
  );
}

export default App;
