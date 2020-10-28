import React from 'react'
import Input from './Input'
import Select from './Select'
import Radio from './Radio'
import Textarea from './Textarea'
import CheckboxGroup from './CheckboxGroup'


function FormControl(props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    default: return null
  }
}
export default FormControl
