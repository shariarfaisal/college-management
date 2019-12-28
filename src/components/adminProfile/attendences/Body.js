import React,{ useState,useEffect } from 'react'
import AddDay from './AddDay'
import { useQuery } from '@apollo/react-hooks'
import Days from './Days'
import months from './months'
import dayToMonthConverter from './dayToMonthConverter'
import { attendenceDays } from './query'


const Body = (props) => {
  const [year,setYear] = useState(new Date().getFullYear())
  const [mnths,setMnths] = useState(null)
  const { data } = useQuery(attendenceDays,{variables: { query: year.toString() } })

  useEffect(() => {
    if(data){
      setMnths(dayToMonthConverter(data.attendenceDays,months))
    }
  },[data])

  return (
    <div className="row justify-content-center">
      <AddDay year={year}/>
      {mnths && <Days days={mnths} year={year} setYear={setYear}/>}
    </div>
  )
}

export default Body
