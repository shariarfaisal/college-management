import Settings from '../pages/Admin/Settings'
import Students from '../pages/Admin/Students'
import BookList from '../pages/Admin/BookList'
import Routines from '../pages/Admin/Routines'
import Teachers from '../pages/Admin/Teachers'
import Departments from '../pages/Admin/Departments'
import Home from '../pages/Admin/Home'

export default () => [
  {path: "/",component: Home},
  {path: "/settings",component: Settings},
  {path: "/students",component: Students},
  {path: "/booklist",component: BookList},
  {path: "/routines",component: Routines},
  {path: "/teachers",component: Teachers},
  {path: "/departments",component: Departments},
]
