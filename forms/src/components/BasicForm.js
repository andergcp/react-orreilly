import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  // First name
  const {
    hasError: nameHasError,
    enteredValue: enteredName,
    isValid: isValidName,
    changeHandler: onChangeNameHandler,
    onBlurHandler: onBlurNameHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const nameClassname = nameHasError ? "form-control invalid" : "form-control";

  // Last name
  const {
    hasError: lastnameHasError,
    enteredValue: enteredLastname,
    isValid: isValidLastname,
    changeHandler: onChangeLastnameHandler,
    onBlurHandler: onBlurLastnameHandler,
    reset: resetLastname,
  } = useInput((value) => value.trim() !== "");

  const lastnameClassname = lastnameHasError
    ? "form-control invalid"
    : "form-control";

  // Email

  const {
    hasError: emailHasError,
    enteredValue: enteredEmail,
    isValid: isValidEmail,
    changeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const emailClassname = emailHasError
    ? "form-control invalid"
    : "form-control";

  // Form
  let formIsValid = false;

  if (isValidName && isValidEmail && isValidLastname) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    resetName();
    resetLastname();
    resetEmail();
    console.log("enviado");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClassname}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={onChangeNameHandler}
            onBlur={onBlurNameHandler}
          />
          {nameHasError && <p className="error-text">Write a valid name</p>}
        </div>
        <div className={lastnameClassname}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastname}
            onChange={onChangeLastnameHandler}
            onBlur={onBlurLastnameHandler}
          />
          {lastnameHasError && (
            <p className="error-text">Write a valid lastname</p>
          )}
        </div>
      </div>
      <div className={emailClassname}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {emailHasError && <p className="error-text">Write a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
