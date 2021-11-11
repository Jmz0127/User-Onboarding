import React from 'react'

export default function Form(props) {
const {
    values,
    submit,
    change,
    disabled,
    errors,
} = props

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const realValue = type === 'checkbox' ? checked : value;
    change(name, realValue)
}


return (
<form className='form container' onSubmit={onSubmit}>
    <div className='form-user submit'>
        <h2>Add a User</h2>

         {/* BUTTON HERE */}
        <button disabled={disabled}>submit</button>

        {/* 🤖 RENDER THE VALIDATION ERRORS HERE */}
        <div className='errors'>
            <div>{errors.firstName}</div>
            <div>{errors.lastName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
        </div>
      </div>

      <div className ='form-user inputs'>
        <h4>General info</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>First Name:
            <input
                value={values.firstName}
                onChange={onChange}
                name='firstName'
                type='text'
            />
        </label>
        <label>Last Name:
            <input
                value={values.lastName}
                onChange={onChange}
                name='lastName'
                type='text'
            />
        </label>
        <label>Email:
            <input
                value={values.email}
                onChange={onChange}
                name='email'
                type='email'
            />
        </label>

        {/* ////////// PASSWORD ////////// */}
        {/* ////////// PASSWORD ////////// */}
        {/* ////////// PASSWORD ////////// */}
        <label>Password:
            <input
                value={values.password}
                onChange={onChange}
                name='password'
                type='password'
            />
        </label>

      </div>
    <div className='form-user checkboxes'>
        <h4>Terms of Service: lorem dorem ipsum</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>I Agree
            <input
                type='checkbox'
                name='checked'
                onChange={onChange}
                checked={values.checked}
            />
        </label>
    </div>
</form>
)
}

