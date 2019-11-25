import React,{useState} from 'react'

const filter = (data,search) => {
  if(search){
    return data.filter(i => {
      const regExp = new RegExp(search,'i')
      return i.name.match(regExp) || i.roll.match(regExp) || i.email.match(regExp)
    })
  }
  return data
}

const BatchMates = ({data}) => {
  const [search,setSearch] = useState('')
  return (
    <div className="row">
      <div className="col-12 my-4">
        <input
          className="form-control"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search here with your friends name, roll, email ..."
        />
      </div>
      {
        filter(data.students,search).map((item,i) => (
          <div key={i} className="col-md-6">
            <div className="jumbotron">
              <h3 data-toggle="collapse" data-target={`#collapse-${item.id}`} style={{cursor: 'pointer'}}>{item.name}</h3>
              <div className="collapse" id={`collapse-${item.id}`}>
                <p><strong>Email: </strong>{item.email}</p>
                <p><strong>Roll: </strong>{item.roll}</p>
                <p><strong>Reg: </strong>{item.reg}</p>
                <p><strong>Address: </strong>{item.address}</p>
                <p><strong>Phone: </strong>{item.phone}</p>
                <p><strong>Department: </strong>{item.department.name}</p>
                <p><strong>Semester: </strong>{item.semester.name}</p>
                <p><strong>Shift: </strong>{item.shift}</p>
                <p><strong>Session: </strong>{item.session.year}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default BatchMates
