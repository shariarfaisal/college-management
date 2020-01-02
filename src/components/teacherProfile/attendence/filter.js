const filter = (students,attendences) => {
  return students.map(i => {
    const exists = attendences.find(a => a.student.id === i.id)
    if(exists){
      i.present = exists.present
    }else {
      i.present = null
    }
    return i
  })
}

export default filter
