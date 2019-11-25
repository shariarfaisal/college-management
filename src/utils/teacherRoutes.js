import TeacherHome from '../pages/Teacher/Home'
import TeacherAbout from '../pages/Teacher/About'
import Teacher404 from '../pages/Teacher404'

export default () => [
  {path: '/',component: TeacherHome},
  {path: '/about',component: TeacherAbout},
  {path: '',component: Teacher404},
]
