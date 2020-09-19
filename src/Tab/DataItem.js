import React, { useContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function DataItem({ item, index, keys }) {
  const [editModeState, setEditModeState] = useState(false);
  // const myRefs= useRef([]);
  const textInput = useRef([]);
  function editItem() {
    setEditModeState(true);
    console.log(textInput) // tut doljen vizivatsya massive?
  }

  function saveEdit(keys) {
    setEditModeState(false);

    var data = {};                            
    keys.forEach( (key) => { 
      var newValue = textInput.current[key]?.innerText;
      if(newValue && newValue != "\n"){
        data[key] = newValue;
      }
    })
       
    EditItems(item._id, data);
    
  }

  const cancelEdit = () => {
    // console.log(lastText);    //console log
    setEditModeState(false);
    keys.forEach( (key) => { 
      var textInputCurrent = textInput?.current[key];
      var dataCurrent = item?.data[key];
      if(textInputCurrent && dataCurrent){
        textInputCurrent.innerText = dataCurrent;
      }
    })
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

      {keys.map((key) => {
          //Array.from (передается пременная с set`ом)  
          return (
            <td
              key={key}
              className={"field-ed"}
              ref={(el) => (textInput.current[key] = el)} // ref = textInput(item.data)
              contentEditable={editModeState}>
              {item.data ? item.data[key] : ""}
            </td>
          );
        })
      }
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
          className={"button-ed bg-crimson"}
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
