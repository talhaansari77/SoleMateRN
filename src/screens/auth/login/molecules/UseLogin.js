import { validateEmail } from "../../../../utils/Email_Password_Validation";

export const ValidateLogin = (email, password, submitError, setSubmitError) => {
  if (!email) {
    return setSubmitError({ ...submitError, emailError: "Email is Required" });
  }
  if (!validateEmail(email)) {
    return setSubmitError({ ...submitError, emailError: "Enter Valid Email" });
  }

  if (!password) {
    return setSubmitError({
      ...submitError,
      passwordError: "Password is Required",
    });
  }


  return true;
};
