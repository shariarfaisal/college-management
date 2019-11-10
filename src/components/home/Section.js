import React,{ memo } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Section = ({name,items}) => {
  return (
    <div className="col-sm-10 col-md-6 col-lg-4 my-3">
      <div className="card rounded-0" style={{background:"#E9ECEF"}}>
        <div className="card-body">
          <h3>{name}</h3>
          <ul>
            {
              items.map((item,i) => (
                <li key={i}><Link className="text-dark" to={`${name.toLowerCase()}${item.id}`}>{item[Object.keys(item)[1]]}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default memo(Section)
