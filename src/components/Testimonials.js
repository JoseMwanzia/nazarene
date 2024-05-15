import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonials() {
  return (
    <>
    {/* <!-- GC testimonials Wrapper Start --> */}
<div className="gc_client_main_wrapper">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="gc_client_slider_wrapper">
					{/* <div className="owl-carousel owl-theme"> */}
                    <OwlCarousel items='1' nav autoplaySpeed={1500}  loop='true' autoplay autoplayTimeout={4000} className='owl-theme' >
						<div className="item">
							<div className="gc_client_slide_main_wrapper">
								<div className="gc_client_cont_wrapper">
									<p>“ <span>Grace Community</span> Church provides tools, teams, and times to help individuals – and the church family as a whole – pray.
									Prayer is vitally important to your relationship with <span>God</span>. We would love to pray for you, a friend, or a family member. 
									We believe that actions fueled and guided by the <span>Holy Spirit</span> in accordance to God’s.”</p>
								</div>
								<div className="gc_client_img_nd_social_wrapper">
									<div className="gc_client_img_wrapper">
										<img src="images/content/client_img.jpg" className="img-responsive" alt="client_img"/>
									</div>
									<div className="gc_client_social_wrapper">
										<p>- by <span>John Doe</span> <span>(Church Memeber)</span></p>
										<ul>
											<li><a href="#"><i className="fa fa-facebook"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
											<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
										</ul>
									</div>
								</div>	
							</div>
						</div>
						<div className="item">
							<div className="gc_client_slide_main_wrapper">
								<div className="gc_client_cont_wrapper">
									<p>“ <span>Grace Community</span> Church provides tools, teams, and times to help individuals – and the church family as a whole – pray.
									Prayer is vitally important to your relationship with <span>God</span>. We would love to pray for you, a friend, or a family member. 
									We believe that actions fueled and guided by the <span>Holy Spirit</span> in accordance to God’s.”</p>
								</div>
								<div className="gc_client_img_nd_social_wrapper">
									<div className="gc_client_img_wrapper">
										<img src="images/content/client_img.jpg" className="img-responsive" alt="client_img"/>
									</div>
									<div className="gc_client_social_wrapper">
										<p>- by <span>Merry Jain</span> <span>(Church Memeber)</span></p>
										<ul>
											<li><a href="#"><i className="fa fa-facebook"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
											<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
										</ul>
									</div>
								</div>	
							</div>
						</div>
						<div className="item">
							<div className="gc_client_slide_main_wrapper">
								<div className="gc_client_cont_wrapper">
									<p>“ <span>Grace Community</span> Church provides tools, teams, and times to help individuals – and the church family as a whole – pray.
									Prayer is vitally important to your relationship with <span>God</span>. We would love to pray for you, a friend, or a family member. 
									We believe that actions fueled and guided by the <span>Holy Spirit</span> in accordance to God’s.”</p>
								</div>
								<div className="gc_client_img_nd_social_wrapper">
									<div className="gc_client_img_wrapper">
										<img src="images/content/client_img.jpg" className="img-responsive" alt="client_img"/>
									</div>
									<div className="gc_client_social_wrapper">
										<p>- by <span>Merry Jain</span> <span>(Church Memeber)</span></p>
										<ul>
											<li><a href="#"><i className="fa fa-facebook"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
											<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
										</ul>
									</div>
								</div>	
							</div>
						</div>
                        </OwlCarousel>
					{/* </div> */}
				</div>	
			</div>
		</div>
	</div>
</div>
{/* <!-- GC testimonials Wrapper End --> */}
    </>
  )
}

export default Testimonials