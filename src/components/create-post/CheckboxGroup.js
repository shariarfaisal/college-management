import React,{ Fragment } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function CheckboxGroup(props) {
  const { label, name, options, ...rest} = props
  return(
    <div className="form-group">
      <label>{label}</label>
      <div className="checkbox-hidden">
        <Field className="xxx" name={name} {...rest}>
          {
            ({ field }) => {
              return options.map((option,i) => (
                <Fragment key={i}>
                  <input
                    {...field}
                    type="checkbox"
                    className="d-none"
                    id={option.value}
                    name={name}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>
                    {!field.value.includes(option.value) && <i style={{fontSize: '2rem'}} className="bx bx-toggle-left"></i>}
                    {field.value.includes(option.value) && <i style={{fontSize: '2rem'}} className="bx bx-toggle-right text-info"></i>}
                  </label>
                </Fragment>
              ))
            }
          }
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
export default CheckboxGroup
