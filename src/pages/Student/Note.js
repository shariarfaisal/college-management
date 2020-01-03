import React from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import Body from '../../components/studentProfile/note/Note'

const Note = ({match}) => {
  return (
    <StudentLayout>
      <Body id={match.params.id} />
    </StudentLayout>
  )
}

export default Note
