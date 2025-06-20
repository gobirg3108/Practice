// proTypes = a mechanism that ensure that the passed value
//            is of the correct datatype.
//            age:PropType.number

// import PropTypes from "prop-types";

// defaultProps = default values for props in case they are not
//                passed from the parent component
//                name:"Guest"

function Student(props) {
  return (
    <>
      <div className="student">
        <p>Name : {props.name}</p>
        <p>Age: {props.age}</p>
        <p>isStudent: {props.isStudent ? "YES" : "NO"}</p>
      </div>
    </>
  );
}

// proType (Debugging)
// Student.propType = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool,
// };

//defaultProps

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
