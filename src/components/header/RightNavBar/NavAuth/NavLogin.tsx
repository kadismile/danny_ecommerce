import React, {useState} from "react";
import {useDispatch} from "react-redux";
import validator from "validator";
import toastr from "toastr";

export const NavLogin = ()=> {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    disabled: true,
    errors: {
      email: "",
      password: "",
    }
  });
  const [submitForm, setSubmitForm] = useState(false)
  const disableForm = () => {
    let newValues = { ...formValues };

    let isError = false;
    for (let val of Object.values(newValues)) {
      if (val === "") {
        isError = true
      }
    }

    if (isError && submitForm) {
      console.log("Form is not Valid!");
      return true
    }

    if (!isError && !submitForm) {
      console.log("Form is not Valid!");
      return true
    }

    if (isError && !submitForm) {
      console.log("Form is not Valid!");
      return true
    }

    if (!isError && !submitForm) {
      console.log("Form is Valid!");
      return false
    }
  };
  const handleChange = (event: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
    event.preventDefault();
    let { name, value } = event.target;
    let errors = formValues.errors;
    validateForm(name, errors, value);
    setFormValues(prevState => {
      return {
        ...prevState,
        errors,
        [name]: value
      }
    });
    for (let val of Object.values(formValues.errors)) {
      if (val !== "") {
        setSubmitForm(false)
      }
    }
  };
  const validateForm = (name:any, errors:any, value:any) => {
    switch (name) {
      case "email":
        errors.email = "";
        if (value.length && value.length <= 3) {
          errors.email = "email must be more than 3 characters long!";
          setSubmitForm(false);
        } else if (!validator.isEmail(value)) {
          errors.email = "Email is not valid!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.email;

      case "password":
        errors.password = "";
        if (value.length && value.length <= 5) {
          errors.password = "password too short";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.password;
      default:
        setSubmitForm(false);
        break;
    }

  };
  const  handleSubmit =  async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setLoading(true);
    const {email, password} = formValues
    /*let data = await Userservice.login(email, password)
    const { accessToken, name, message }: any = data
    if (accessToken) {
      dispatch(login({accessToken, name, email}))
      setLoading(false);
      toastr.success("Login Successful");
      window.location.replace("/")
    } else {
      setLoading(false);
      toastr.error(message);
    }*/
  }

  const { errors } = formValues;
  return (
    <div className="tab-pane active account-item-content" id="account-login">
      <form method="post" action="http://demo.themeforshop.com/html_fastfood/login.html" id="customer_login" acceptCharset="UTF-8">
        <div className="clearfix large_form form-item">
          <input type="email"
           name="email"
           onChange={handleChange}
           value={formValues.email}
           className="form-control"
           placeholder="Email Address *"
          />
          {errors.email.length > 0 && (
            <span className="addUser__error">{errors.email}</span>
          )}
        </div>
        <div className="clearfix large_form form-password form-item">
          <input
            type="password"
            name="password"
            className="form-control password"
            placeholder="Password *"
            onChange={handleChange}
            value={formValues.password}
          />
          <span className="cs-icon icon-eye" />
          {errors.password.length > 0 && (
            <span className="addUser__error">{errors.password}</span>
          )}
        </div>

        <div className="action_bottom">
          <button className="_btn" type="submit">Login</button>
          <a href="login-recover.html"><span className="red" /> Forgot your password?</a>
        </div>
      </form>
    </div>
  )
}