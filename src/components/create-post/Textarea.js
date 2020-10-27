import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea(props) {
  const { label, name, ...rest } = props
  return(
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        className="form-control"
        {...rest}
      />
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}
export default Textarea
