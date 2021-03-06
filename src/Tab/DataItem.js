import React, { useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const DataItem = ({ item, index, keys }) => {
  const [editModeState, setEditModeState] = useState(false);
  const textInput = useRef([]);
  const editItem = () => {
    setEditModeState(true);
    console.log(textInput);
  }
  const saveEdit = keys => {
    setEditModeState(false);
    let data = {};
    keys.forEach((key) => {
      let newValue = textInput.current[key]?.innerText;
      if (newValue && newValue !== "\n") {
        data[key] = newValue;
      }
    });
    EditItems(item._id, data);
  }
  const cancelEdit = () => {
    setEditModeState(false);
    keys.forEach((key) => {
      let textInputCurrent = textInput?.current[key];
      let dataCurrent = item?.data[key];
      if (textInputCurrent && dataCurrent) {
        textInputCurrent.innerText = dataCurrent;
      }
    });
  };

  const { removeItem, EditItems } = useContext(Context);

  return (
    <tr className={"data-item"}>
      <td>
        <strong>{index + 1}</strong>
        <pre 
        >
          {item.data ? JSON.stringify(item.data, null, 2) : ""}
        </pre>
      </td>
      {keys.map((key) => {
        return (
          <td
            key={key}
            ref={(el) => (textInput.current[key] = el)}
            contentEditable={editModeState}>
            {item.data ? item.data[key] : ""}
          </td>
        );
      })}
      <td className="td-action-button">
        <button
          onClick={() => editItem(keys)}
          className={`mlAuto button-ed button-ed1 ${editModeState ? "non-disp" : ""}`}>
          Edit &#9998;
        </button>
        <button
          onClick={() => saveEdit(keys)}
          className={`mlAuto button-ed button-ed2 ${editModeState ? "" : "non-disp"}`}>
          Save Edit
        </button>
        <button
          onClick={() => cancelEdit(keys)}
          className={`button-ed button-ed2 ${editModeState ? "" : "non-disp"}`}>
          Cancel Edit
        </button>
        <button
          className={"button-ed del-button"}
          onClick={() => removeItem(item._id)}>
          &#10006;
        </button>
      </td>
    </tr>
  );
}
DataItem.propTypes = {
  keys: PropTypes.object.isRequired,
  index: PropTypes.number,
  EditItems: PropTypes.func.isRequired,
};
export default DataItem;
