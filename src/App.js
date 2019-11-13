import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import Departments from './pages/Departments'
import StudentRegister from './pages/StudentRegister'
import TeacherRegister from './pages/TeacherRegister'
import Settings from './pages/Settings'
import Students from './pages/Students'
import StudentProfile from './pages/Student/Profile'
import StudentAbout from './pages/Student/About'
import BookList from './pages/BookList'

const routes = [
  {path: '/',component: Home},
  {path: '/admin/login',component: AdminLogin},
  {path: '/departments',component: Departments},
  {path: '/register/student',component: StudentRegister},
  {path: '/register/teacher',component: TeacherRegister},
  {path: '/settings',component: Settings},
  {path: '/students',component: Students},
  {path: '/student/:id',component: StudentProfile},
  {path: '/student/:id/:about',component: StudentAbout},
  {path: '/booklist',component: BookList},
]

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map((route,i) => {
            return <Route key={i} exact path={route.path} component={route.component} />
          })
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App
