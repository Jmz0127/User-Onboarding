import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import User from './components/User';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';


//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  firstName: '',
  lastName: '',
  email: '',
  ///// PASSWORD /////
  password: '',
  ///// CHECKBOXES /////
  checked: false

}



/// INITIAL FUNCTIONS ///
/// INITIAL FUNCTIONS ///
/// INITIAL FUNCTIONS ///
const initialFormErrors = {
  ///// TEXT INPUTS /////
  firstName: '',
  lastName: '',
  email: '',
  ///// PASSWORD /////
  password: '',
  ///// CHECKBOXES /////
  checked: ''

}
const initialUsers = []
const initialDisabled = true




function App() {
//////////////// STATES ////////////////
//////////////// STATES ////////////////
//////////////// STATES //////////////// 
const [users, setUsers] = useState(initialUsers)          // array of friend objects
const [formValues, setFormValues] = useState(initialFormValues) // object
const [formErrors, setFormErrors] = useState(initialFormErrors) // object
const [disabled, setDisabled] = useState(initialDisabled)       // boolean




//////////////// HELPERS ////////////////
//////////////// HELPERS ////////////////
//////////////// HELPERS ////////////////

//POST IT WITH AXIOS 🤖
const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers([res.data, ...users]); 
  })
  .catch(err => console.error(err))
  .finally(() => {
    setFormValues(initialFormValues);
  })
}


//VALIDATE WITH YUP 🤖
const validate = (name, value) => {
  yup.reach(schema, name).validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

  // RUN VALIDATION WITH YUP
const inputChange = (name, value) => {

  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
}


//trim and make our checklist item entry a boolean
const formSubmit = () => {
  const newUser = {
    firstName: formValues.firstName.trim(),
    lastName: formValues.lastName.trim(),
    password: formValues.password.trim(),
    email: formValues.email.trim(),
    checked: ['checked'].filter(checked => !!formValues[checked])
  }
  postNewUser(newUser);
}


//////////////// SIDE EFFECTS ////////////////
//////////////// SIDE EFFECTS ////////////////
//////////////// SIDE EFFECTS ////////////////

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid));
}, [formValues])

/////RENDER///////

  return (
    <div className="container">
      <header><h1>Welcome, New User.</h1></header>
      
      <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
