import { useContext } from 'react'
import { TeacherMeContext } from '../../store/TeacherMeContext'


const useMe = () => {
  return useContext(TeacherMeContext)
}

export default useMe
