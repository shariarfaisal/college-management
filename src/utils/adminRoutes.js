import Settings from '../pages/Admin/Settings'
import Students from '../pages/Admin/Students'
import BookList from '../pages/Admin/BookList'
import Routines from '../pages/Admin/Routines'
import Routine from '../pages/Admin/Routine'
import Teachers from '../pages/Admin/Teachers'
import Departments from '../pages/Admin/Departments'
import Home from '../pages/Admin/Home'
import Semesters from '../pages/Admin/Semesters'
import Sessions from '../pages/Admin/Sessions'
import Notices from '../pages/Admin/Notices'
import Attendence from '../pages/Admin/Attendence'

export default () => [
  {path: "/",component: Home},
  {path: "/settings",component: Settings},
  {path: "/students",component: Students},
  {path: "/booklists",component: BookList},
  {path: "/routines",component: Routines},
  {path: "/routines/:id",component: Routine},
  {path: "/teachers",component: Teachers},
  {path: "/departments",component: Departments},
  {path: "/semesters",component: Semesters},
  {path: "/sessions",component: Sessions},
  {path: "/notices",component: Notices},
  {path: "/attendence",component: Attendence},
]
