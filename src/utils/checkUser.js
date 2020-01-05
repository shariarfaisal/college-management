import studentRoutes from './studentRoutes'
import teacherRoutes from './teacherRoutes'
import adminRoutes from './adminRoutes'
import { STUDENT, TEACHER, ADMIN } from './naming'

const checkUser = (routes) => {
  const student = localStorage.getItem(STUDENT)
  const teacher = localStorage.getItem(TEACHER)
  const admin = localStorage.getItem(ADMIN)

  if(student){
    return studentRoutes()
  }else if(teacher){
    return teacherRoutes()
  }else if (admin) {
    return adminRoutes()
  }

  return routes

}

export default checkUser
