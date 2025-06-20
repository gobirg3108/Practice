function Button() {
  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time's`);
  //   } else {
  //     console.log(`${name} Stop click me`);
  //   }
  // };

  const handleClick = (e) => (e.target.textContent = "Ouch 😩");

  return (
    <>
      {/* it's also have double click handler */}
      {/* <button onClick={() => handleClick("Bro")}>Click Me 😊 </button> */}
      {/* it also use Pictures */}
      <button onDoubleClick={(e) => handleClick(e)}>Click Me 😊</button>
    </>
  );
}

export default Button;
