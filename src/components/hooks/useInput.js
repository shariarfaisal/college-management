import { useState, memo } from 'react'

const useInput = (initialValue="",type="text") => {
  const [value,setValue] = useState(initialValue)

  const bindValue = {
    value,
    type,
    onChange: e => setValue(e.target.value)
  }
  const reset = () => setValue('')

  return [value,bindValue,reset]
}

export default useInput
