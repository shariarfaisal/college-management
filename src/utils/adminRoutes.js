import About from '../pages/Admin/About'
import Students from '../pages/Admin/Students'
import Student from '../pages/Admin/Student'
import BookList from '../pages/Admin/BookList'
import Routines from '../pages/Admin/Routines'
import Routine from '../pages/Admin/Routine'
import Teachers from '../pages/Admin/Teachers'
import Teacher from '../pages/Admin/Teacher'
import Departments from '../pages/Admin/Departments'
import Home from '../pages/Admin/Home'
import Semesters from '../pages/Admin/Semesters'
import Sessions from '../pages/Admin/Sessions'
import Notices from '../pages/Admin/Notices'
import Notice from '../pages/Admin/Notice'
import Attendences from '../pages/Admin/Attendences'
import Attendence from '../pages/Admin/Attendence'
import Admin404 from '../pages/Admin404'

export default () => [
  {path: "/",component: Home},
  {path: "/about",component: About},
  {path: "/students",component: Students},
  {path: "/student/:id",component: Student},
  {path: "/booklists",component: BookList},
  {path: "/routines",component: Routines},
  {path: "/routines/:id",component: Routine},
  {path: "/teachers",component: Teachers},
  {path: "/teachers/:id",component: Teacher},
  {path: "/departments",component: Departments},
  {path: "/semesters",component: Semesters},
  {path: "/sessions",component: Sessions},
  {path: "/notices",component: Notices},
  {path: "/notices/:id",component: Notice},
  {path: "/attendences",component: Attendences},
  {path: "/attendences/:id",component: Attendence},
  {path: '',component: Admin404},
]
