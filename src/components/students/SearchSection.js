import React,{ useState, useEffect, useContext } from 'react'
import { InfoContext } from '../../store/InfoContext'
import { gql } from 'apollo-boost'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'

const GET_DATA = gql`
  query Students($query: String,$department: ID,$semester: ID,$first: Int,$skip: Int,$orderBy: String){
    students(query:$query,department: $department,semester: $semester,first: $first,skip: $skip,orderBy: $orderBy){
      id
      name
      roll
      department{ id name }
      semester{ id name }
    }
  }
`

const SearchSection = ({ setStudents }) => {
  const data = useContext(InfoContext)
  const [semesters,setSemesters] = useState([])
  const [departments,setDepartments] = useState([])

  const [department,setDepartment] = useState("")
  const [semester,setSemester] = useState("")
  const [query,setQuery] = useState("")
  const [first,setFirst] = useState(10)
  const [skip,setSkip] = useState(0)
  const [orderBy,setOrderBy] = useState("roll_ASC")

  useEffect(() => {
    if(data.semesters){
      setSemesters(data.semesters)
      setDepartments(data.departments)
    }
  })

  const variables = { first, skip, orderBy }
  if(department){ variables.department = department }
  if(semester){ variables.semester = semester }
  if(query){ variables.query = query }

  const [getStudents,{ data: stdData,loading }] = useLazyQuery(GET_DATA,{
    variables
  })

  const submitHandler = e => {
    e.preventDefault()
    getStudents()
    if(stdData){
      setStudents(stdData.students)
    }
  }

  return (
    <div className="my-3 py-4 col-10" style={{background: "#E9ECEF"}}>
      <form onSubmit={submitHandler}>
        <div className="row">

          <div className="col-md-3">
            <input value={query} onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Search" />
          </div>

          <div className="col-md-2 d-flex">
            <label className="my-auto mx-2" htmlFor="selectDepartment">Dep: </label>
            <select value={department} onChange={e => setDepartment(e.target.value)} id="selectDepartment" className="custom-select">
              <option value="">All</option>
              {departments.map(({id,name}) => {
                return <option key={id} value={id}>{name}</option>
              })}
            </select>
          </div>

          <div className="col-md-2 d-flex">
            <label className="my-auto mx-2">Sem: </label>
            <select value={semester} onChange={e => setSemester(e.target.value)} className="custom-select">
              <option value="">All</option>
              {semesters.map(({id,name}) => <option key={id} value={id}>{name}</option>)}
            </select>
          </div>

          <div className="col-md-2 d-flex">
            <label className="my-auto mx-2">Sort: </label>
            <select value={orderBy} onChange={e => setOrderBy(e.target.value)} className="custom-select">
              <option value="roll_ASC">Roll</option>
              <option value="reg_ASC">Reg</option>
              <option value="name_ASC">Name</option>
            </select>
          </div>

          <div className="col-md-2 d-flex">
            <label className="my-auto mx-2">Item: </label>
            <select value={first} onChange={e => setFirst(e.target.value)} className="custom-select">
              <option seleced="true" value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={50}>50</option>
            </select>
          </div>
          <button type="submit" className={`btn btn-sm btn-info mx-2 ${loading ? 'disabled' : ''}`}>search</button>
        </div>
      </form>
    </div>
  )
}

export default React.memo(SearchSection)
