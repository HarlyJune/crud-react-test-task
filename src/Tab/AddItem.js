import React, { useRef } from "react";
import PropTypes from "prop-types";

function AddItem({ onCreate, keys, setKeys }) {
  const textInput = useRef([]);
  const addFieldKey = "addField";

  function submitHandler(event) {
    event.preventDefault();
    var data = {};
    keys.forEach((key) => {
      var newValue = textInput?.current[key]?.value;
      if (newValue) {
        data[key] = newValue;
      }
    });
    console.warn(data);
    onCreate(data);
    // onCreate()
  }

  function addKey(e) {
    var el = textInput.current[addFieldKey];
    var name = el.value;
    if (name) {
      var newKeys = [...keys, name];
      setKeys(newKeys);
      el.value = "";
    }
  }

  return (
    <div >
      <div style={{ display: "block" }}>
        <input
          key={addFieldKey}
          className={"field-ed ml-0"}
          ref={(el) => (textInput.current[addFieldKey] = el)}
          type='text'
          name={addFieldKey}
          placeholder={"+ 'new field'"}
        />
        <button className={"button-ed"} onClick={addKey}>
          &#10010; field
        </button>
      </div>
      <div className={"data-item pl-0 "}>
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

        <button className={"button-ed"} onClick={submitHandler}>
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
