import React from 'react'
import { CSSTransition } from 'react-transition-group';
import './payment.css';

function CreditCard() {
  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
      <div className="content">
        <p>Content for Option 2</p>
      </div>
    </CSSTransition>
  )
}

export default CreditCard