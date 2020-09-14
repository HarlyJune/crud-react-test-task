import React from "react";
import PropTypes from "prop-types";
import DataItem from "./DataItem";

const styles = {
  ul: {
    width: '100%',
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function Tab(props) {
  return (
    <ul style={styles.ul}>
      {props.items.map((item, index) => {
        return (
          <DataItem
            item={item}
            key={item._id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}
Tab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};
export default Tab;
