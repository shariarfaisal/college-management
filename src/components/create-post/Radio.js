import React,{ Fragment } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function Radio(props) {
  const { label, name, options, ...rest} = props
  return(
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {
          ({ field }) => {
            return options.map((option,i) => (
              <Fragment key={i}>
                <input type="radio"
                  className="form-control"
                  id={option.value}
                  name={name}
                  value={option.value}
                  checked={field.value === option.value}
                  {...field}
                />
              <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            ))
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
export default Radio
