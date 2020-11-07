import React,{ useState, useEffect } from 'react'
import DatePicker  from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import { getPostsAction, setPaginationLimit } from '../../store/actions/profile'


function Filter({ params, getPosts, filter, pagination, setLimit, data: user }) {
  const [date,setDate] = useState(filter.date || '')

  useEffect(() => {
    const x = document.querySelector('#date-picker')
    x.placeholder = 'Search with date'
  },[])

  const onChangeHandler = (type,data) => {
    if(type === 'date'){
      getPosts({...params, date: data })
      setDate(data)
    }else if(type === 'published'){
      getPosts({...params, published: data})
    }
  }

  return(
    <div className="col-sm-10 col-md-8 py-2 px-3 my-3 row mx-0">
      <div className="col-12 d-flex">
        <button
          onClick={e => onChangeHandler('published','')}
          className={`btn btn-sm shadow-md rounded-0 px-3 mx-2 btn-${!filter.published?'primary': 'light'}`}
          disabled={!filter.published || filter.loading}
          type="button">All</button>
        <button
          onClick={e => onChangeHandler('published','published')}
          className={`btn btn-sm shadow-md rounded-0 px-3 mx-2 btn-${filter.published === 'published'?'primary': 'light'}`}
          disabled={filter.published === 'published' || filter.loading}
          type="button">Published</button>
        <button
          onClick={e => onChangeHandler('published','unpublished')}
          className={`btn btn-sm shadow-md rounded-0 px-3 mx-2 btn-${filter.published === 'unpublished'?'primary': 'light'}`}
          disabled={filter.published === 'unpublished' || filter.loading}
          type="button">Unpublished</button>
        <DatePicker
          selected={date}
          onChange={date => onChangeHandler('date',date)}
          className="form-control rounded-0 py-4 shadow-md border-0 "
          id="date-picker"
        />

        <div className="d-flex align-items-center mr-3 ml-auto">
          <label style={{fontSize: '1rem'}} className="mr-2 mb-0" htmlFor="limit">limit</label>
          <select
            style={{width: '50px'}}
            className="custom-select custom-select-sm"
            value={pagination.limit}
            onChange={e => setLimit(e.target.value)}
          >
            {pagination.limits.map((item,i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>
        </div>


      </div>
      <div className="col-12">

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (arg) => dispatch(getPostsAction(arg)),
    setLimit: (arg) => dispatch(setPaginationLimit(arg))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)
