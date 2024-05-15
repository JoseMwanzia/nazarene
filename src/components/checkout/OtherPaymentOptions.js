import React from 'react'
import { CSSTransition } from 'react-transition-group';
import './payment.css';


function OtherPaymentOptions() {
  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <div className="content">
        <p>Content for Option 3</p>
      </div>
    </CSSTransition>
  )
}

export default OtherPaymentOptions