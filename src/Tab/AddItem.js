import React, { useRef } from "react";
import PropTypes from "prop-types";

const AddItem = ({ onCreate, keys, setKeys }) => {
  const textInput = useRef([]);
  const addFieldKey = "addField";
  const submitHandler = event => {
    event.preventDefault();
    let data = {};
    keys.forEach((key) => {
      let newValue = textInput?.current[key]?.value;
      if (newValue) {
        data[key] = newValue;
      }
      textInput.current[key].value = '';
    });
    console.warn(data);
    onCreate(data);
  }
  const addKey = e => {
    let el = textInput.current[addFieldKey];
    let name = el.value;
    if (name) {
      let newKeys = [...keys, name];
      setKeys(newKeys);
      el.value = "";
    }
  }
  return (
    <div>
      <div className={"form-item"}>
        <input
          key={addFieldKey}
          className={"field-ed ml-0"}
          ref={(el) => (textInput.current[addFieldKey] = el)}
          type='text'
          name={addFieldKey}
          placeholder={"+ 'new field'"}
        />
        <button className={"add-button"} onClick={addKey}>
          &#10010; field
        </button>
      </div>
      <div className={"form-item"}>
        {keys.map((key) => {
          return (
            <input
              key={key}
              className={"field-ed ml-0 "}
              ref={(el) => (textInput.current[key] = el)}
              type='text'
              name={key}
              placeholder={key}
            />
          );
        })}

        <button className={"add-button"} onClick={submitHandler}>
          &#10010; item
        </button>
      </div>
    </div>
  );
}

AddItem.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddItem;
