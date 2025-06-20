// import styles from "./Button.module.css";

function Button() {
  //3.Inline
  const styles = {
    backgroundColor: "aquamarine",
    borderRadius: "10px",
    border: "none",
    fontSize: "2rem",
    fontWeight: " bold",
    cursor: " pointer",
    padding: "10px 15px",
  };

  return (
    <>
      <button style={styles}>Button</button>
    </>
  );
}

export default Button;
