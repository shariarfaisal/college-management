import TeacherHome from '../pages/Teacher/Home'
import TeacherAbout from '../pages/Teacher/About'
import Attendence from '../pages/Teacher/Attendence'
import Routine from '../pages/Teacher/Routine'
import Classes from '../pages/Teacher/Classes'
import Teacher404 from '../pages/Teacher404'

export default () => [
  {path: '/',component: TeacherHome},
  {path: '/about',component: TeacherAbout},
  {path: '/attendence',component: Attendence},
  {path: '/routine',component: Routine},
  {path: '/Classes/:id',component: Classes},
  {path: '',component: Teacher404},
]
