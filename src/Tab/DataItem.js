import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
    height: '3rem',
    fontSize: '1.5rem',
    fontFamily: 'consolas'
  },
  input: {
    marginRight: "1rem",
  },
  button: {
    background: "crimson",
    borderRadius: "25%",
    color: "#fff",
    border: "none",
  },
};
function DataItem({ item, index, onChange }) {
  const { removeItem } = useContext(Context);
  return (
    <li style={styles.li}>
      <span >
       
        <strong>{index + 1}</strong>
        &nbsp;
        {item.title}                                        
        {item._id}  
        {(item.__v) ? item.__v:''}
        {(item.data) ? JSON.stringify(item.data):''}
      </span>
      <button style={styles.button} onClick={() => removeItem(item._id)}>
        &times;
      </button>
    </li>
  );
}
DataItem.propTypes = {
  items: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default DataItem;
