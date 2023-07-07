import { useState } from "react";

const useInput = (checkValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = checkValue(enteredValue);
  const hasError = isTouched && !isValid;

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    hasError,
    enteredValue,
    isValid,
    changeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
