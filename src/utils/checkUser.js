import studentRoutes from './studentRoutes'
import teacherRoutes from './teacherRoutes'
import adminRoutes from './adminRoutes'

const checkUser = (routes) => {
  const student = localStorage.getItem('student')
  const teacher = localStorage.getItem('teacher')
  const admin = localStorage.getItem('admin')

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
