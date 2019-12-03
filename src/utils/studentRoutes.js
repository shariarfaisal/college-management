import StudentHome from '../pages/Student/Home'
import StudentAbout from '../pages/Student/About'
import StudentBatchMates from '../pages/Student/BatchMates'
import StudentNotes from '../pages/Student/Notes'
import Student404 from '../pages/Student404'


export default () => [
  {path: '/',component: StudentHome},
  {path: '/about',component: StudentAbout},
  {path: '/batchmates',component: StudentBatchMates},
  {path: '/notes',component: StudentNotes},
  {path: '',component: Student404},
]
