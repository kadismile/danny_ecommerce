import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/userSlice";
import validator from "validator";
import {DisabledLoginButton} from "../../components/libs";
import UserService from '../../services/user'
import {registerUser } from "../../libs/firebase";
import toastr from 'toastr'

export const Register = () => {
  const formFields = {
    email: "",
    username: "",
    first_name: "",
    last_name:"",
    password: ""
  }

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({ ...formFields, errors: formFields });
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
      return true
    }
    if (!isError && !submitForm) {
      return true
    }
    if (isError && !submitForm) {
      return true
    }
    if (!isError && !submitForm) {
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
        [name]: value,
        username: formValues.first_name + " " + formValues.last_name
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
      case "first_name":
        errors.first_name = "";
        if (value.length && value.length <= 3) {
          errors.first_name = "first name is too short";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.first_name;
      case "last_name":
        errors.last_name = "";
        if (value.length && value.length <= 3) {
          errors.last_name = "last name is too short";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.last_name;
      default:
        setSubmitForm(false);
        break;
    }

  };
  const  handleSubmit =  async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    console.log("we dey here oooo")
    setLoading(true);
    const {email, password} = formValues
    let response = await UserService.createUser(formValues)
    console.log("response ==> ", response )
    const { data }: any = response
    if (data?.email) {
      await registerUser(email, password)
      dispatch(setUser(formValues))
      setLoading(false);
      toastr.success("Registration Successful");
      window.location.replace("/")
    } else {
      setLoading(false);
      //toastr.error(message);
    }
  }
  const displayError = (error: string) => {
    if (error.length)
      return <span className="addUser__error">{error}</span>
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
                      <h2>Register</h2>
                      <form>
                        <div className="clearfix large_form form-item">
                          <input
                            type="text"
                            name="first_name"
                            onChange={handleChange}
                            value={formValues.first_name}
                            className="text"
                            placeholder="First Name"
                          />
                          { displayError(errors.first_name) }
                        </div>
                        <div className="clearfix large_form form-item">
                          <input
                            type="text"
                            name="last_name"
                            onChange={handleChange}
                            value={formValues.last_name}
                            className="text"
                            placeholder="Last Name"
                          />
                          { displayError(errors.last_name) }
                        </div>
                        <div className="clearfix large_form form-item">
                          <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={formValues.email}
                            className="text"
                            placeholder="Email"
                          />
                          { displayError(errors.email) }
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
                          { displayError(errors.password) }
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
                        <h4>Already have account?</h4>
                        <a href="/login" className="_btn">Login</a>
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