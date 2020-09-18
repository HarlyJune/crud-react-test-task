import React from "react";
import PropTypes from "prop-types";
import DataItem from "./DataItem";

function Tab(props) {
  let items = props.items;
  let keys = new Set();
 items.forEach((item) => {
    //метод обхода коллекции
    Object.keys(item.data).forEach((key) => keys.add(key)); //callback function (predicate) (функция которая применяется к каждому элементу коллекции)
  });

  console.log(keys.entries);
  return (
    //set
    <table>
      <tr className='head-tab'>
        <th>json</th>
        {keys
          ? Array.from(keys).map((key) => {
              //Array.from (передается пременная с set`ом)
              return (
                <th key={key} className={"head-tab"}>
                  {key}
                  {/* {item.data ? item.data.Name: ''} */}
                </th>
              );
            })
          : "nothing here"}
        <th>Actions</th>
      </tr>
      {props.items.map((item, index) => {
        return (
          <DataItem
            keys={keys}
            item={item}
            key={item._id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </table>
  );
}
Tab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default Tab;
