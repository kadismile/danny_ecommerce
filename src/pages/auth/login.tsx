import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/userSlice";
import validator from "validator";
import {DisabledLoginButton} from "../../components/libs";
import {LoginUser } from "../../libs/firebase";
import toastr from 'toastr'


export const Login = () => {
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
    let data = await LoginUser(email, password)
    const { accessToken, name, message }: any = data
    if (accessToken) {
      dispatch(setUser({accessToken, name, email}))
      setLoading(false);
      toastr.success("Login Successful");
      window.location.replace("/")
    } else {
      setLoading(false);
      toastr.error(message);
    }
  }

  const { errors } = formValues;

  return (
    <div className="page-container" id="PageContainer">
      <main className="main-content" id="MainContent" role="main">
        <section className="customers-layout login-layout">
          <div className="customers-wrapper">
            <div className="container">
              <div className="row">
                <div className="customers-inner">
                  <div className="customers-content">
                    <div id="login" className="customers">
                      <h2>Login</h2>
                      <form>
                        <div className="clearfix large_form form-item">
                          <input
                             type="email"
                             name="email"
                             onChange={handleChange}
                             value={formValues.email}
                             className="text"
                             placeholder="Email Address *"
                          />
                          {errors.email.length > 0 && (
                            <span className="addUser__error">{errors.email}</span>
                          )}
                        </div>
                        <div className="clearfix large_form form-item form-password">
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="customer_password"
                            className="text"
                            onChange={handleChange}
                            value={formValues.password}
                            size={16}/>
                          <span className="cs-icon icon-eye"/>
                          {errors.password.length > 0 && (
                            <span className="addUser__error">{errors.password}</span>
                          )}
                        </div>
                        <div className="clearfix">
                          <a className="note" href="#">Forgot your
                            password?</a>
                        </div>
                        <div className="action_bottom">
                          {disableForm() ?
                          <DisabledLoginButton /> :
                          <input className="_btn" onClick={handleSubmit} type="submit" defaultValue=" Sign In"/>}
                        </div>
                      </form>
                      <div className="create-account">
                        <h4>You don't have account?</h4>
                        <a href="/register" className="_btn">Create account now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}