import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import Departments from './pages/Departments'
import StudentRegister from './pages/StudentRegister'
import TeacherRegister from './pages/TeacherRegister'
import Settings from './pages/Settings'
import Students from './pages/Students'

const routes = [
  {path: '/',component: Home},
  {path: '/admin/login',component: AdminLogin},
  {path: '/departments',component: Departments},
  {path: '/register/student',component: StudentRegister},
  {path: '/register/teacher',component: TeacherRegister},
  {path: '/settings',component: Settings},
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
        <Route exact path="/students" component={Students}>

        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
