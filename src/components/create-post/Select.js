import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Select(props) {
  const { label, options, name, ...rest} = props
  return(
    <div className="form-group">
      <label className={name}>{label}</label>
      <Field as="select" id={name} className="custom-select" name={name} {...rest}>
        {options.map((option,i) => {
          return (
            <option key={i} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
export default Select
