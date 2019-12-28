import React from 'react'

const Header = ({ date }) => {
  return (
    <header className="py-3 mb-4 text-center text-muted">
      <h1 style={{letterSpacing: '2px'}}>Classes</h1>
      <p>{date}</p>
    </header>
  )
}

export default Header
