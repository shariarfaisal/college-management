import React,{ useState, useEffect, memo } from 'react'
import MonthlyDays from './MonthlyDays'
import months from './months'

const Days = ({days,year,setYear}) => {
  const [yar,setYar] = useState(year)
  const onSubmitHandler = e => {
    e.preventDefault()
    if(yar && year !== yar){
      setYear(yar)
    }
  }


  return (
    <div className="py-3 my-3 col-12">
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={onSubmitHandler} className="d-flex">
            <input
              className="form-control"
              value={yar}
              onChange={e => setYar(e.target.value)}
            />
            <button type="submit" className="btn btn-info px-3 mx-3">get</button>
          </form>
        </div>
        {
          days.map((d,i) => <MonthlyDays key={i} {...d} year={year}/>)
        }
      </div>
    </div>
  )
}

export default memo(Days)
