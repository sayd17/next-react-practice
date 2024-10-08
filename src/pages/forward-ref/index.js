import React from "react";
import { useRef } from "react";
import FormField from "./FormField";

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <>
      <form>
        <FormField label="Enter your name:" ref={ref} isRequired={true} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </form>
    </>
  );
}

export default Form;
