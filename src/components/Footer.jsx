import React from 'react'
import '../scss/components/_footer.scss'

function Footer() {
  return (
    <div className="footer">
      <br />
      <span>React PIZZA </span>
      &copy;{new Date().getFullYear()}
    </div>
  )
}

export default Footer
