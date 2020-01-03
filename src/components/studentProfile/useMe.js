import React,{ useState,useEffect,useContext} from 'react'
import { StudentMeContext } from '../../store/StudentMeContext'


const useMe = (props) => {
  return useContext(StudentMeContext)

}
export default useMe
