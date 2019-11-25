import React from 'react'
// import PropTypes from 'prop-types'


const Header = ({children}) => {
  return (
    <header className="text-center bg-info sticky-top">
      <h1 className="display-3 text-light  py-4">Feni Computer Institute</h1>
      {children}
    </header>
  )
}

export default Header
