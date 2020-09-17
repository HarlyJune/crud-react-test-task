import React, { useContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function DataItem({ item, index }) {
  const [editModeState, setEditModeState] = useState(false);
  const textInput = useRef(null);
  const [lastText, setLastText] = useState("");
  function editItem(_id) {
    setEditModeState(true);
    textInput.current.focus();
    setLastText(textInput.current.innerText);
  }
  function saveEdit(_id) {
    setEditModeState(false);
    console.log(_id, textInput);
    let data = JSON.parse(textInput.current.innerText);
    EditItems(_id, data);
  }
  const cancelEdit = () => {
    console.log(lastText);
    setEditModeState(false);
    textInput.current.innerText = lastText;
  };

  const { removeItem, EditItems } = useContext(Context);

  return (
    <li className={"data-item"}>
      <span>
        <strong>{index + 1}</strong>
        &nbsp;
        {item._id}
      </span>
      <pre
        className={"field-ed"}
        ref={textInput}
        contentEditable={editModeState}>
        {item.data ? JSON.stringify(item.data, null, 2) : ""}
      </pre>
      <button
        onClick={() => editItem(item._id)}
        className={`mlAuto button-ed ${editModeState ? "non-disp" : ""}`}>
        Edit &#9998;
      </button>
      <button
        onClick={() => saveEdit(item._id)}
        className={`mlAuto button-ed ${editModeState ? "" : "non-disp"}`}>
        SaveEdit
      </button>
      <button
        onClick={() => cancelEdit(item._id)}
        className={`button-ed ${editModeState ? "" : "non-disp"}`}>
        CancelEdit
      </button>
      <button
        className={"button-ed w-7rem bg-crimson"}
        onClick={() => removeItem(item._id)}>
        &#10006;
      </button>
    </li>
  );
}
DataItem.propTypes = {
  items: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  EditItems: PropTypes.func.isRequired,
};
export default DataItem;
