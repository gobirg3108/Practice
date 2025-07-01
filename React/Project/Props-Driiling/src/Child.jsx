import GrandChild from "./GrandChild";

function Child(props) {
  return (
    <>
      <div>
        <p>This is Child Component:{props.name}</p>
      </div>
      <GrandChild name={props.name} />
    </>
  );
}

export default Child;
