import React from "react";
import PropTypes from "prop-types";
import DataItem from "./DataItem";

function Tab(props) {
  var keys = props?.keys;
  console.info(keys, [...keys]);
  return (
    <table>
      <tr className='head-tab'>
        <th>json</th>
        {keys
          ? keys.map((key) => {
              return (
                <th key={key} className={"head-tab"}>
                  {key}
                </th>
              );
            })
          : "nothing here"}
        <th className="td-action-button">Actions</th>
      </tr>
      {props.items.map((item, index) => {
        return (
          <DataItem
            keys={props.keys}
            item={item}
            key={item._id}
            index={index}
          />
        );
      })}
    </table>
  );
}
Tab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.object.isRequired,
};
export default Tab;
