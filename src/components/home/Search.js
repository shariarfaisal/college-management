import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSearch } from '../../store/actions/posts'


function Search({ search, setSearch, getSearch, getClearResult, loading, data, query }) {
  const [rsltBoxOpen,setRsltBoxOpen] = useState(true)


  const submitHandler = e => {
    e.preventDefault()
    // Make sure input is not empty, not loading, search isn't same with query
    if(search && !loading && query !== search.trim()){
      getSearch({ search: search.trim(), limit: 20, page: 1 })
    }
  }


  const onKeyDownHandler = e => {
    if(search.includes(' ',4)){
      // not loading, query isn't same with search and spce not allowed...
      if(e.keyCode !== 32 && !loading && query !== search.trim()){
        getSearch({ search: search.trim(), limit: 20, page: 1 })
      }
    }else if(!search.trim()){
      // Get clear result if input field being empty ...
      getClearResult()
    }
  }

  const titleShorter = title => {
    return title.length > 150 ? title.substr(0,147)+'...': title
  }

  const searchOnClick = e => {
    if(data && data.length > 0){
      setRsltBoxOpen(true) // Result box will be open if result been loaded ...
    }
  }

  const listener = e => {
    if(e.srcElement.querySelector('#posts-search-box')){
      if(search){
        setRsltBoxOpen(false)
      }
      if(search.trim().length === 0){
        getClearResult()
      }
    }
  }


  useEffect(() => {
    document.addEventListener('click',listener)
    return () => {
      document.removeEventListener('click',listener)
    }
  },[search])

  return(
    <form id="posts-search-box" onKeyDown={onKeyDownHandler} onSubmit={submitHandler} className="col-sm-6 my-sm-2 search-box">
      <input onClick={searchOnClick} type="text" value={search} onChange={e => setSearch(e.target.value)} className="form-control" placeholder="Search" />
      <button disabled={loading} type="submit" className="search-icon "><i className='bx bx-search-alt-2'></i></button>

      {rsltBoxOpen && data &&
        <div className="search-result-box shadow">

          {loading && <div className="text-center" style={{fontSize: '1rem'}}>loading...</div>}
          {data.length === 0 && <div className="item text-center">No data found!</div>}
          {data.slice(0,10).map((item,i) => (
            <Link key={i} className="item" to={`/post/${item.id}`}>
              <span className="name d-block">{item.profile.name}</span>
              <span className="title d-block">{titleShorter(item.title)}</span>
            </Link>
          ))}

          {data && data.length > 10 && <div className="d-flex">
            <Link to={`/search?q=${search}`} className="btn btn-sm my-3 btn-light px-4 rounded-20 mx-auto">See All</Link>
          </div>}

        </div>
      }

    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.posts.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearch: (arg) => dispatch(getSearch(arg)),
    getClearResult: () => dispatch({ type: 'SEARCH_CLEAR'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)
