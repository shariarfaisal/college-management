import StudentHome from '../pages/Student/Home'
import StudentAbout from '../pages/Student/About'
import Students from '../pages/Student/Students'
import Student from '../pages/Student/Student'
import StudentNotes from '../pages/Student/Notes'
import Activity from '../pages/Student/Activity'
import Student404 from '../pages/Student404'
import Attendences from '../pages/Student/Attendences'

export default () => [
  {path: '/',component: StudentHome},
  {path: '/about',component: StudentAbout},
  {path: '/students',component: Students},
  {path: '/student/:id',component: Student},
  {path: '/notes',component: StudentNotes},
  {path: '/attendences',component: Attendences},
  {path: '/activity',component: Activity},
  {path: '',component: Student404},
]
