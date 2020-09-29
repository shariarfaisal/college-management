import React from 'react'

const RightCardItem = (props) => {
  return (
    <div className="item">
      <a href="#" className="question">What is Programming and how to start programming?</a>
      <p className="distro">Asked <span className="time"> 3 min ago</span> by <a className="username" href="#">Faisal</a> on <a href="">Technology</a></p>
    </div>
  )
}



const Right = (props) => {
  return(
    <section className="right customScroll">
      <div className="header">
        <div className="header-wrapper">
          <div className="items">
            <span className="item">JS</span>
            <span className="item active">Node</span>
            <span className="item">React</span>
            <span className="item">GO</span>
          </div>
          <div className="next">
            <i className="bx bxs-right-arrow"></i>
          </div>
        </div>
      </div>
      <div className="right-items">

        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />
        <RightCardItem />

        <div className="pagination">
          <span>more</span>
        </div>

      </div>
    </section>
  )
}
export default Right
