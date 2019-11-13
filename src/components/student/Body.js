import React,{ useState } from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import DisplaySection from './DisplaySection'



const Body = ({ student, children }) => {
  return (
    <div className="px-5 py-3" style={{maxWidth: "100%",minHeight: "80vh",background:"#E9ECEF"}}>
      <div className="row justify-content-between">
        <LeftSection />
        <DisplaySection>
          {children}
        </DisplaySection>
        <RightSection student={student}/>
      </div>
    </div>
  )
}


export default Body
