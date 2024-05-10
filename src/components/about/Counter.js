import React from 'react'

function Counter() {
  return (
    <>
    {/* <!-- GC Counter Wrapper Start --> */}
    <div className="gc_counter_main_wrapper">
	<div className="gc_counter_cont_wrapper">
		<div className="gc_counter_icon">
			<i className="fa fa-heart"></i>
		</div>
		<div className="count-description">
			<span className="timer">2540</span><i className="fa fa-plus"></i>
			<h5 className="con1">Causes</h5>
		</div>
	</div>
	<div className="gc_counter_cont_wrapper2">
		<div className="gc_counter_icon">
			<i className="fa fa-globe"></i>
		</div>
		<div className="count-description">
			<span className="timer">7325</span><i className="fa fa-plus"></i>
			<h5 className="con2">Places</h5>
		</div>
	</div>
	<div className="gc_counter_cont_wrapper3">
		<div className="gc_counter_icon">
			<i className="fa fa-user"></i>
		</div>
		<div className="count-description">
			<span className="timer">1924</span><i className="fa fa-plus"></i>
			<h5 className="con3">Volunteers</h5>
		</div>
	</div>
	<div className="gc_counter_cont_wrapper4">
		<div className="gc_counter_icon">
			<i className="fa  fa-users"></i>
		</div>
		<div className="count-description">
			<span className="timer">4275</span><i className="fa fa-plus"></i>
			<h5 className="con4">Saved Life</h5>
		</div>
	</div>
</div>
{/* <!-- GC Counter Wrapper End --> */}
    </>
  )
}

export default Counter