import React from "react";
import PropTypes from "prop-types";
const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
  button: {
    background: "red",
    borderRadius: "30%",
    color: "#fff",
    border: "none",
  },
};
function DataItem({ item, index, onChange }) {
  const classes = []
  if (item.completed){
    classes.push('fuckOff')
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          style={styles.input}
          onChange={() => onChange(item.id)} //console.log(item.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {item.title}
      </span>
      <button style={styles.button}>&times;</button>
    </li>
  );
}
DataItem.propTypes = {
  items: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default DataItem;
