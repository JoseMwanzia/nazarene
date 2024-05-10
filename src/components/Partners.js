import React from 'react';
import OwlCarousel from 'react-owl-carousel'

function Partners() {
  return (
    <>
    {/* <!-- GC partner Wrapper Start --> */}
<div class="gc_partner_main_wrapper">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-lg-12 col-lg-12 col-lg-12">
				<div class="gc_partner_heading_wrapper">
					<div class="gc_partner_heading">
						<h2>Sponsors</h2>
						<h1>Our Top Partners</h1>
					</div>
				</div>
			</div>
			<div class="col-lg-12 col-lg-12 col-lg-12 col-lg-12">
				<div class="gc_partner_slider_wrapper">
				{/* <div class="owl-carousel owl-theme"> */}
                    <OwlCarousel items='1'  loop='true'  autoplayTimeout={2000} className='owl-theme'>
					<div class="item">
						<div class="gc_prt1_img_wrapper">
							<img src="images/content/logo01.png" alt="partner_img"/>
						</div>
						<div class="gc_prt2_img_wrapper">
							<img src="images/content/logo02.png" alt="partner_img"/>
						</div>
						<div class="gc_prt3_img_wrapper">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt4_img_wrapper hidden-xs">
							<img src="images/content/logo04.png" alt="partner_img"/>
						</div>
						<div class="gc_prt5_img_wrapper hidden-sm hidden-xs">
							<img src="images/content/logo05.png" alt="partner_img"/>
						</div>
						<div class="gc_prt1_img_wrapper hidden-xs">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt2_img_wrapper hidden-xs">
							<img src="images/content/logo07.png" alt="partner_img"/>
						</div>
						<div class="gc_prt3_img_wrapper hidden-xs">
							<img src="images/content/logo01.png" alt="partner_img"/>
						</div>
						<div class="gc_prt4_img_wrapper hidden-xs">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt5_img_wrapper hidden-sm hidden-xs">
							<img src="images/content/logo02.png" alt="partner_img"/>
						</div>
					</div>
					<div class="item">
						<div class="gc_prt1_img_wrapper">
							<img src="images/content/logo01.png" alt="partner_img"/>
						</div>
						<div class="gc_prt2_img_wrapper">
							<img src="images/content/logo02.png" alt="partner_img"/>
						</div>
						<div class="gc_prt3_img_wrapper">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt4_img_wrapper hidden-xs">
							<img src="images/content/logo04.png" alt="partner_img"/>
						</div>
						<div class="gc_prt5_img_wrapper hidden-sm hidden-xs">
							<img src="images/content/logo05.png" alt="partner_img"/>
						</div>
						<div class="gc_prt1_img_wrapper hidden-xs">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt2_img_wrapper hidden-xs">
							<img src="images/content/logo07.png" alt="partner_img"/>
						</div>
						<div class="gc_prt3_img_wrapper hidden-xs">
							<img src="images/content/logo01.png" alt="partner_img"/>
						</div>
						<div class="gc_prt4_img_wrapper hidden-xs">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt5_img_wrapper hidden-sm hidden-xs">
							<img src="images/content/logo02.png" alt="partner_img"/>
						</div>
					</div>
					<div class="item">
						<div class="gc_prt1_img_wrapper">
							<img src="images/content/logo01.png" alt="partner_img"/>
						</div>
						<div class="gc_prt2_img_wrapper">
							<img src="images/content/logo02.png" alt="partner_img"/>
						</div>
						<div class="gc_prt3_img_wrapper">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt4_img_wrapper hidden-xs">
							<img src="images/content/logo04.png" alt="partner_img"/>
						</div>
						<div class="gc_prt5_img_wrapper hidden-sm hidden-xs">
							<img src="images/content/logo05.png" alt="partner_img"/>
						</div>
						<div class="gc_prt1_img_wrapper hidden-xs">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt2_img_wrapper hidden-xs">
							<img src="images/content/logo07.png" alt="partner_img"/>
						</div>
						<div class="gc_prt3_img_wrapper hidden-xs">
							<img src="images/content/logo01.png" alt="partner_img"/>
						</div>
						<div class="gc_prt4_img_wrapper hidden-xs">
							<img src="images/content/logo03.png" alt="partner_img"/>
						</div>
						<div class="gc_prt5_img_wrapper hidden-sm hidden-xs">
							<img src="images/content/logo02.png" alt="partner_img"/>
						</div>
					</div>
                    </OwlCarousel>
				{/* </div> */}
			</div>
			</div>
		</div>
	</div>
</div>
{/* <!-- GC partner Wrapper End --> */}
    </>
  )
}

export default Partners