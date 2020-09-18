import React, { useContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function DataItem({ item, index, keys }) {
  const [editModeState, setEditModeState] = useState(false);
  // const myRefs= useRef([]);
  const textInput = useRef([]);
  const [lastText, setLastText] = useState("");
  function editItem() {
    setEditModeState(true);
    
    setLastText(textInput);
    console.log(textInput) // tut doljen vizivatsya massive?
  }
  function saveEdit(keys) {
    setEditModeState(false);
    // console.log(keys, textInput);    //console log
    data = {
    }                              //= JSON.parse(lastText);
    keys.forEach{ 
      function 123(textInput){item.data.object ? (dataKey) => {textInput.current[key]}}
       
    }
    EditItems(keys, data);
  }
  const cancelEdit = () => {
    // console.log(lastText);    //console log
    setEditModeState(false);
    textInput.current.innerText = lastText;
  };

  const { removeItem, EditItems } = useContext(Context);

  return (
    <tr className={"data-item"}>
      <td>
        <strong>{index + 1}</strong>
        <pre className={"field-ed"}>
          {item.data ? JSON.stringify(item.data, null, 2) : ""}
        </pre>
      </td>
      {Array.from(keys).map((key) => {
        //Array.from (передается пременная с set`ом)
        return (
          <td
            key={key}
            className={"field-ed"}
            ref={(el) => (textInput.current[key] = el)} // ref = textInput(item.data)
            contentEditable={editModeState}>
            {item.data[key]}
            {console.log(item.data)}
          </td>
        );
      })}
      <td>
        <button
          onClick={() => editItem(keys)}
          className={`mlAuto button-ed ${editModeState ? "non-disp" : ""}`}>
          Edit &#9998;
        </button>
        <button
          onClick={() => saveEdit(keys)}
          className={`mlAuto button-ed ${editModeState ? "" : "non-disp"}`}>
          SaveEdit
        </button>
        <button
          onClick={() => cancelEdit(keys)}
          className={`button-ed ${editModeState ? "" : "non-disp"}`}>
          CancelEdit
        </button>
        <button
          className={"button-ed w-7rem bg-crimson"}
          onClick={() => removeItem(item._id)}>
          &#10006;
        </button>
      </td>
    </tr>
  );
}
DataItem.propTypes = {
  keys: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  EditItems: PropTypes.func.isRequired,
};
export default DataItem;
