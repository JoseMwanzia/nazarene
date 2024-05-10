import React from 'react'
import OwlCarousel from 'react-owl-carousel';

function Donations() {
  return (
    <>
<div className="gc_causes_single_slider_main_wrapper">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="gc_com_event_heading_wrapper">
					<div className="gc_com_event_icon_wrapper">
						<h2>Donate & Charity</h2>
						<h1>Urgent Donation Required</h1>
					</div>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div className="gc_causes_single_Slider">
        <OwlCarousel items='1'  loop='true'  autoplayTimeout={2000} className='owl-theme' >
            <div className="item">
                <img src="images/content/causes/causes_single_img1.jpg" className="img-responsive" alt="story_img" />
            </div>
            <div className="item">
                <img src="images/content/causes/causes_single_img1.jpg" className="img-responsive" alt="story_img" />
            </div>
            <div className="item">
                <img src="images/content/causes/causes_single_img1.jpg" className="img-responsive" alt="story_img" />
            </div>
            <div className="item">
                <img src="images/content/causes/causes_single_img1.jpg" className="img-responsive" alt="story_img" />
            </div>
        </OwlCarousel>
    </div>
</div>

			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<div className="gc_recent_slider_cont_wrapper gc_causes_single_slider_content">
					<div className="gc_recent_slider_cont_heading">
						<h3>Childrens Adoption</h3>
					</div>
					<div className="gc_recent_slider_cont">
						<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh</p>
						<h5><b>$</b> <span>42</span> <b>k</b> Done of <b>$</b> <span>50</span> <b>k</b> Needed</h5>
					</div>
					<div className="gc_recent_slider_btn gc_causes_single_donet_btn">
						<ul>
							<li><a href="#">DONATE</a></li>
						</ul>
					</div>
					<div className="gc_causes_single_social_wrapper">
						<ul>
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
							<li><a href="#"><i className="fa fa-youtube"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default Donations