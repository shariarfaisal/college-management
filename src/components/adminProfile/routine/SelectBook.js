import React,{ memo } from 'react'

const filter = (list) => {
  return list.reduce((a,b) => {
     a.push(...b.books)
     return a
  },[])
}

const SelectBook = ({subject,setSubject,bookLists}) => {
  return (
    <select onChange={e => setSubject(e.target.value)} className="m-2 custom-select" value={subject}>
    <option value="">Select Book</option>
    {filter(bookLists).map((d,i) => (
      <option key={i} value={d.id}>{`${d.name.split(' ').slice(0,3).join(' ')+'..'}(${d.code})`}</option>
    ))}
    </select>
  )
}

export default memo(SelectBook)
