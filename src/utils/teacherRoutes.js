import TeacherHome from '../pages/Teacher/Home'
import TeacherAbout from '../pages/Teacher/About'
import Attendence from '../pages/Teacher/Attendence'
import Routine from '../pages/Teacher/Routine'
import Classes from '../pages/Teacher/Classes'
import Students from '../pages/Teacher/Students'
import Student from '../pages/Teacher/Student'
import Notices from '../pages/Teacher/Notices'
import Teacher404 from '../pages/Teacher404'

export default () => [
  {path: '/',component: TeacherHome},
  {path: '/about',component: TeacherAbout},
  {path: '/students',component: Students},
  {path: '/notices',component: Notices},
  {path: '/student/:id',component: Student},
  {path: '/Classes/:id/attendence/:classId',component: Attendence},
  {path: '/routine',component: Routine},
  {path: '/Classes/:id',component: Classes},
  {path: '',component: Teacher404},
]
