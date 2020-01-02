import Home from '../pages/Student/Home'
import About from '../pages/Student/About'
import Students from '../pages/Student/Students'
import Student from '../pages/Student/Student'
import Notes from '../pages/Student/Notes'
import Note from '../pages/Student/Note'
import Activity from '../pages/Student/Activity'
import Student404 from '../pages/Student404'
import BookList from '../pages/Student/BookList'
import Routine from '../pages/Student/Routine'
import Teachers from '../pages/Student/Teachers'
import Teacher from '../pages/Student/Teacher'
import Notices from '../pages/Student/Notices'

export default () => [
  {path: '/',component: Home},
  {path: '/about',component: About},
  {path: '/students',component: Students},
  {path: '/student/:id',component: Student},
  {path: '/notes',component: Notes},
  {path: '/note/:id',component: Note},
  {path: '/activity',component: Activity},
  {path: '/booklist',component: BookList},
  {path: '/routine',component: Routine},
  {path: '/notices',component: Notices},
  {path: '/teachers',component: Teachers},
  {path: '/teachers/:id',component: Teacher},
  {path: '',component: Student404},
]
