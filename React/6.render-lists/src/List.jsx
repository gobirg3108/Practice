import PropTypes from "prop-types";

function List(props) {
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "coconut", calories: 156 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ];

  // Sort Method

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER

  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER

  //   fruits.sort((a, b) => a.calories - b.calories); // ASCENDING ORDER

  //   fruits.sort((a, b) => b.calories - a.calories);

  // Filter Method

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; {item.calories}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
