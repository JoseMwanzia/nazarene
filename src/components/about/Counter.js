import React from 'react'

function Counter() {
  return (
    <>
    {/* <!-- GC Counter Wrapper Start --> */}
    <div class="gc_counter_main_wrapper">
	<div class="gc_counter_cont_wrapper">
		<div class="gc_counter_icon">
			<i class="fa fa-heart"></i>
		</div>
		<div class="count-description">
			<span class="timer">2540</span><i class="fa fa-plus"></i>
			<h5 class="con1">Causes</h5>
		</div>
	</div>
	<div class="gc_counter_cont_wrapper2">
		<div class="gc_counter_icon">
			<i class="fa fa-globe"></i>
		</div>
		<div class="count-description">
			<span class="timer">7325</span><i class="fa fa-plus"></i>
			<h5 class="con2">Places</h5>
		</div>
	</div>
	<div class="gc_counter_cont_wrapper3">
		<div class="gc_counter_icon">
			<i class="fa fa-user"></i>
		</div>
		<div class="count-description">
			<span class="timer">1924</span><i class="fa fa-plus"></i>
			<h5 class="con3">Volunteers</h5>
		</div>
	</div>
	<div class="gc_counter_cont_wrapper4">
		<div class="gc_counter_icon">
			<i class="fa  fa-users"></i>
		</div>
		<div class="count-description">
			<span class="timer">4275</span><i class="fa fa-plus"></i>
			<h5 class="con4">Saved Life</h5>
		</div>
	</div>
</div>
{/* <!-- GC Counter Wrapper End --> */}
    </>
  )
}

export default Counter