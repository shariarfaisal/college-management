import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
  const { label, name, ...rest } = props
  return(
    <div className="form-group" style={{fontSize: '1.1rem'}} >
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        className="form-control"
        {...rest}
      />
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}
export default Input
