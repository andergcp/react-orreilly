import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // Name
  const {
    hasError: nameHasError,
    enteredValue: enteredName,
    isValid: nameIsValid,
    changeHandler: inputNameChangeHandler,
    onBlurHandler: onBlurNameHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const nameInputClassname = nameHasError
    ? "form-control invalid"
    : "form-control";

  // E-mail
  const {
    hasError: emailHasError,
    enteredValue: enteredEmail,
    isValid: emailIsValid,
    changeHandler: inputEmailChangeHandler,
    onBlurHandler: onBlurEmailHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const emailInputClassname = emailHasError
    ? "form-control invalid"
    : "form-control";

  // Form validity
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClassname}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputNameChangeHandler}
          onBlur={onBlurNameHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClassname}>
        <label htmlFor="email">Your E-mail</label>
        <input
          onChange={inputEmailChangeHandler}
          onBlur={onBlurEmailHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
