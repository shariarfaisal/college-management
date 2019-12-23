import React,{ useState,useEffect,useContext } from 'react'
import { TeacherMeContext } from '../../store/TeacherMeContext'
import Day from './Day'

const days = [
  {id:1,day: 'SATURDAY',classes: []},
  {id:2,day: 'SUNDAY',classes: []},
  {id:3,day: 'MONDAY',classes: []},
  {id:4,day: 'TUESDAY',classes: []},
  {id:5,day: 'WEDNESDAY',classes: []},
  {id:6,day: 'THURSDAY',classes: []}
]

const filter = data => {
  return data.reduce((a,b) => {
    const day = a.find(i => {
      return i.day === b.day.day
    })
    day.classes.push(b)
    return a
  },days)
}


const Routine = (props) => {
  const me = useContext(TeacherMeContext)

  return (
    <div className="row">
      {
        me && filter(me.classes).map((c,i) => {
          return <Day key={i} {...c}/>
        })
      }
    </div>
  )
}




export default Routine
