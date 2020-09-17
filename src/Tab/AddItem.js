import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}
function AddItem({ onCreate }) {
  const input = useInputValue("");
  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form className={"data-item pl-0"} onSubmit={submitHandler}>
      <input className={"field-ed ml-0"} {...input.bind} />
      <button className={"button-ed w-7rem"} type='submit'>
        Add!&#10010;
      </button>
    </form>
  );
}

AddItem.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddItem;
