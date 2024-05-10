import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function Home() {
  return (
    <>
    {/* <!-- plumb Slider Wrapper Start --> */}
	<div className="gc_slider_wrapper">
	<div className="gc_slider_img_section">
        <OwlCarousel items='1'  loop='true'  autoplayTimeout={2000} className='owl-theme' >
		<div className="item gc_main_slide1">
					<div className="gc_slider_overlay"></div>
					<div className="gc_slider_cont1_wrapper">
						<div className="gc_slider_cont1">
							<h2 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown"><img src="images/header/slider_logo.png" alt="logo"/></h2>
							<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">We Always <span>Believe</span></h1>
							<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">God Is <span>Above</span> All Thing’s</h1>
							<p data-animation-in="zoomIn" data-animation-out="animate-out zoomIn">We  Come To Serving & Believing God's Word and Spirit. </p>
							<ul>
								<li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft"><a href="#">DONATE</a></li>
								<li data-animation-in="bounceInRight" data-animation-out="animate-out bounceOutRight"><a href="#">ABOUT US</a></li>
							</ul>
						</div>
					</div>
				</div>
            <div className="item gc_main_slide2">
			  <div className="gc_slider_overlay"></div>
			  <div className="gc_slider_cont1_wrapper">
					<div className="gc_slider_cont1">
						<h2 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown"><img src="images/header/slider_logo.png" alt="logo"/></h2>
						<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">We Always <span>Believe</span></h1>
						<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">God Is <span>Above</span> All Thing’s</h1>
						<p data-animation-in="zoomIn" data-animation-out="animate-out zoomIn">We  Come To Serving & Believing God's Word and Spirit. </p>
						<ul>
							<li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft"><a href="#">DONATE</a></li>
								<li data-animation-in="bounceInRight" data-animation-out="animate-out bounceOutRight"><a href="#">ABOUT US</a></li>
						</ul>
					</div>
				</div>
			</div>
            <div className="item gc_main_slide3">
				<div className="gc_slider_overlay"></div>
				<div className="gc_slider_cont1_wrapper">
					<div className="gc_slider_cont1">
						<h2 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown"><img src="images/header/slider_logo.png" alt="logo"/></h2>
						<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">We Always <span>Believe</span></h1>
						<h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOutDown">God Is <span>Above</span> All Thing’s</h1>
						<p data-animation-in="zoomIn" data-animation-out="animate-out zoomIn">We  Come To Serving & Believing God's Word and Spirit. </p>
						<ul>
							<li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft"><a href="#">DONATE</a></li>
								<li data-animation-in="bounceInRight" data-animation-out="animate-out bounceOutRight"><a href="#">ABOUT US</a></li>
						</ul>
					</div>
				</div>
			</div>
            
        </OwlCarousel>
    </div>
</div>

<div className="gc_upcoming_event_main_wrapper">
	<div className="gc_upcoming_event_left_wrapper">
		<div className="gc_event_icon_wrapper">	
			<img src="images/header/event_icon.png" alt="icon"/>
		</div>
		<div className="gc_index2_event_heading_wrapper">	
			<h3>Next Upcoming Event</h3>	
		</div>
		<div className="gc_event_heading_cont_wrapper">
			<h4>Sharing Our Faith & Love To Children</h4>
		</div>
		<div className="gc_event_heading_cont_time_wrapper">
			<p><i className="fa fa-calendar"></i> 14 May 2017</p>
			<p className="event_time"><i className="fa fa-clock-o"></i> @ 8 to 11 AM</p>
		</div>
	</div>
</div>

<div className="gc_upcoming_event_timer_main_wrapper">
	<div className="gc_upcoming_event_timer_wrapper">
		<div id="clockdiv">
			<div><span className="days"></span><div className="smalltext">Days</div></div>
			<div><span className="hours"></span><div className="smalltext">hrs</div></div>
			<div><span className="minutes"></span><div className="smalltext">Min</div></div>
			<div><span className="seconds"></span><div className="smalltext">Sec</div></div>
		</div>
		<div className="gc_event_timer_btn">
				<ul>
					<li><a href="#">JOIN US!</a></li>
				</ul>
			</div>
	</div>
</div>
    </>
  )
}

export default Home