import { STUDENT, TEACHER, ADMIN } from '../utils/naming'

export const student = localStorage.getItem(STUDENT)
export const teacher = localStorage.getItem(TEACHER)
export const admin = localStorage.getItem(ADMIN)

export const setItem = (name,token) => {
  if(name === 'student'){
    localStorage.setItem(STUDENT,token)
    return true
  }else if (name === 'teacher') {
    localStorage.setItem(TEACHER,token)
    return true
  }else if(name === 'admin'){
    localStorage.setItem(ADMIN,token)
    return true
  }

  return false
}

export const getLogout = (name) => {
  if(name === 'student'){
    localStorage.removeItem(STUDENT)
  }else if (name === 'teacher') {
    localStorage.removeItem(TEACHER)
  }else if(name === 'admin'){
    localStorage.removeItem(ADMIN)
  }
}
