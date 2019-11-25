import React,{useState} from 'react'
import AddNote from './AddNote'
// import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import query from './query'


const filter = (data,search) => {
  if(search){
    const regExp = new RegExp(search,'i')
    return data.filter(i => {
      return i.title.match(regExp)
    })
  }else{
    return data
  }
}

const Notes = (props) => {
  const { data } = useQuery(query)
  const [search,setSearch] = useState('')

  return (
    <div>
      <div className="jumbotron py-3">
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search here"
        />
      </div>
      <div className="p-3 mb-4">
        <h3 className="my-2 text-info" data-toggle="collapse" data-target="#collapse-note" style={{cursor: "pointer"}}>Add Note +</h3>
        <AddNote />
      </div>
      <div className="row">
        {
          data && filter(data.notes,search).map((d,i) => <NoteItem key={i} {...d}/>)
        }
      </div>
    </div>
  )
}

const NoteItem = ({id,title,text}) => (
  <div className="col-12 jumbotron py-2">
    <h4 style={{cursor: 'pointer'}} className="my-2" data-toggle="collapse" data-target={`#note-${id}`}>{title}</h4>
    <p className="collapse lead" id={`note-${id}`}>{text}</p>
  </div>
)

export default Notes
