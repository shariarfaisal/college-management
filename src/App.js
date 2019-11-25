import React,{ useState, useEffect } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import StudentLogin from './pages/StudentLogin'
import TeacherLogin from './pages/TeacherLogin'
import StudentRegister from './pages/StudentRegister'
import TeacherRegister from './pages/TeacherRegister'
import Welcome from './pages/Welcome'
import checkUser from './utils/checkUser'

const publicRoutes = [
  {path: '/login/admin',component: AdminLogin},
  {path: '/login/student',component: StudentLogin},
  {path: '/login/teacher',component: TeacherLogin},
  {path: '/register/student',component: StudentRegister},
  {path: '/register/teacher',component: TeacherRegister},
  {path: '',component: Welcome}
]

const routes = checkUser(publicRoutes)

console.log(routes);
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
