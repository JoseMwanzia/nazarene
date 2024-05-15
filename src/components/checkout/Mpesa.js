import React from 'react'
import { CSSTransition } from 'react-transition-group';
import './payment.css'

function Mpesa() {
  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <div className="content">
        <label>
            Phone Number: 
            <input />
        </label>
      </div>
    </CSSTransition>
  )
}

export default Mpesa