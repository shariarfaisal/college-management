import React,{ useState } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'

const items = [
  {name: 'Home',link: '/'},
  {name: 'Departments',link: '/departments'},
  {name: 'Students',link: '/students'},
  {name: 'Teachers',link: '/teachers'},
  {name: 'Routines',link: '/routines'},
  {name: 'Settings',link: '/settings'},
]

const Navigation = (props) => {
  // const [active,setActive] = useState('')
  return (
      <nav className="">
        <ul className="nav bg-dark justify-content-center nav-pills">
          {
            items.map((item,i) => <li key={i} className="nav-item"><Link to={item.link} className="nav-link text-light px-5">{item.name}</Link></li>)
          }
        </ul>
      </nav>
  )
}


// <div class="dropdown">
// <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//   Dropdown link
// </a>
//
// <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//   <a class="dropdown-item" href="#">Action</a>
//   <a class="dropdown-item" href="#">Another action</a>
//   <a class="dropdown-item" href="#">Something else here</a>
// </div>
// </div>



export default Navigation
