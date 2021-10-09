import React, {useState} from "react";
import {useDispatch} from "react-redux";
import validator from "validator";
import {DisabledButton, registerFormValues} from '../../../libs'
import UserService from '../../../../services/user'
import toastr from 'toastr'




export const NavRegister = ()=> {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState(
    { ...registerFormValues, errors: registerFormValues },
  );
  const [submitForm, setSubmitForm] = useState(false)
  const disableForm = () => {
    let newValues = { ...formValues };
    newValues.username = newValues.full_name
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
      case "repeat_password":
        errors.repeat_password = "";
        if (value.length && value.length <= 5) {
          errors.repeat_password = "password too short";
          setSubmitForm(false);
        } else if (value !== formValues.password) {
          errors.repeat_password = "password do not match";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.repeat_password;
      case "full_name":
        errors.full_name = "";
        if (value.length && value.length <= 3) {
          errors.full_name = "your full name must be more than 3 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.full_name;
      default:
        setSubmitForm(false);
        break;
    }

  };
  const  handleSubmit =  async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setLoading(true);
    formValues.username = formValues.full_name
    let data = await UserService.createUser(formValues)
    if (data?.id) {
      setLoading(false);
      toastr.success("User Created");
    } else {
      setLoading(false);
      toastr.error(data.message);
    }
  }

  const { errors } = formValues;

  return (
    <div className="tab-pane account-item-content " id="account-register">
      <form acceptCharset="UTF-8">
    <div className="clearfix large_form form-item">
      <input
        placeholder="First Names"
        type="text"
        name="full_name"
        className="text"
        size={30}
        onChange={handleChange}
        value={formValues.full_name}
      />
      {errors.full_name.length > 0 && (
        <span className="addUser__error">{errors.full_name}</span>
      )}
    </div>

    <div className="clearfix large_form form-item">
      <input
        name="email"
        onChange={handleChange}
        value={formValues.email}
        className="text"
        placeholder="Email Address *"
        size={30}
      />
      {errors.email.length > 0 && (
        <span className="addUser__error">{errors.email}</span>
      )}
    </div>
    <div className="clearfix large_form form-password form-item">
      <input
        placeholder="Password"
        onChange={handleChange}
        value={formValues.password}
        type="password"
        name="password"
        className="password text"
        size={30}
      />
      {errors.password.length > 0 && (
        <span className="addUser__error">{errors.password}</span>
      )}
    </div>
    <div className="clearfix large_form form-password form-item">
      <input
        placeholder="Password"
        onChange={handleChange}
        value={formValues.repeat_password}
        type="password"
        name="repeat_password"
        className="password text"
        size={30}
      />
      {errors.repeat_password.length > 0 && (
        <span className="addUser__error">{errors.repeat_password}</span>
      )}
    </div>
    <div className="action_bottom">
      {
        disableForm() ?
          <DisabledButton/> :
          <button className="_btn" type="submit" onClick={handleSubmit}>Create</button>
      }
    </div>
  </form>
    </div>
  )
}