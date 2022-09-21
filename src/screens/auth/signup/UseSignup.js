import {
  validateEmail,
  checkCharPassword,
  checkNum,
} from "../../../utils/Email_Password_Validation";

export const ValidateInput = (email, password,confirmPass, submitError,  setSubmitError) => {
  if (!email) {
    return setSubmitError({ ...submitError, emailError: "Email is Required" });
  }
 else  if (!validateEmail(email)) {
    return setSubmitError({ ...submitError, emailError: "Enter Valid Email" });
  }
 else  if (!password) {
    return setSubmitError({
      ...submitError,
      passwordError: "Password is Required",
    });
  }


  // confPasswordError

   else if (!checkCharPassword(password)) {
    // setSubmitError({...submitError,passwordError:"Password is eight"})
  }
 else  if (password.search(/[!/>@<"#$%&()¥|?>|='+*:~^@;]/) == -1) {
    // setSubmitError({...submitError,passwordError:"must one symbol"})
  }
  else  if (!checkNum(password)) {
    // setSubmitError({...submitError,passwordError:"must one number"})
  }
 else  if (!confirmPass) {
    return setSubmitError({
      ...submitError,
      confPasswordError: "Confirm Password is Required",
    });
    
  }
  else  if (password!==confirmPass) {
    return setSubmitError({
      ...submitError,
      confPasswordError: "Confirm Password is not match",
    });
    
  }
  return true;
};
