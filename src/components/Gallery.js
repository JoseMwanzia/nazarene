import React from 'react'

function Gallery() {
  return (
    <>
    {/* <!-- GC filter Wrapper Start --> */}
<div className="gc_fliter_main_wrapper">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="gc_filter_heading_wrapper">
					<div className="gc_filter_heading">
						<h2>Discover the church</h2>
						<h1>Grace Church Photo Gallery</h1>
					</div>
				</div>
			</div>
			<div className="portfolio-area ptb-100">
                  <div className="container">
                    <div className="portfolio-filter clearfix text-center">
                      <ul className="list-inline" id="filter">
                          <li><a className="active" data-group="all">All</a></li>
                          <li><a data-group="business">Christmas</a></li>
                          <li><a data-group="website"> Holy Week</a></li>
                          <li><a data-group="logo"> Church </a></li>
                          <li><a data-group="business"> Event </a></li>
                          <li><a data-group="website"> Pastors </a></li>
                      </ul>
                    </div>
                    <div className="row three-column">
                      <div id="gridWrapper" className="clearfix">
                        <div className="col-xs-12 col-sm-6 col-md-4 portfolio-wrapper III_column" data-groups='["all", "website", "logo"]'>
                          <div className="portfolio-thumb">

							<div className="gc_filter_cont_overlay_wrapper">
										<img src="images/content/gallery/filter_img1.jpg" className="zoom image img-responsive" alt="service_img"/>
										<div className="gc_filter_cont_overlay">
											<div className="gc_filter_text"><a href="images/content/gallery/filter_img1.jpg"><i className="fa fa-plus"></i></a></div>
										</div>
									</div>

                          </div>
                          {/* <!-- /.portfolio-thumb --> */}
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 portfolio-wrapper III_column" data-groups='["all", "business", "website", "photoshop"]'>
                          <div className="portfolio-thumb">
									<div className="gc_filter_cont_overlay_wrapper">
										<img src="images/content/gallery/filter_img2.jpg" className="zoom image img-responsive" alt="service_img"/>
										<div className="gc_filter_cont_overlay">
											<div className="gc_filter_text"><a href="images/content/gallery/filter_img2.jpg"><i className="fa fa-plus"></i></a></div>
										</div>
									</div>

                          </div>
                          {/* <!-- /.portfolio-thumb --> */}
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 portfolio-wrapper III_column" data-groups='["all", "logo", "photoshop"]'>
                          <div className="portfolio-thumb">
                            <div className="gc_filter_cont_overlay_wrapper">
										<img src="images/content/gallery/filter_img3.jpg" className="zoom image img-responsive" alt="service_img"/>
										<div className="gc_filter_cont_overlay">
											<div className="gc_filter_text"><a href="images/content/gallery/filter_img3.jpg"><i className="fa fa-plus"></i></a></div>
										</div>
									</div>

                          </div>
                          {/* <!-- /.portfolio-thumb --> */}
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 portfolio-wrapper III_column" data-groups='["all", "logo", "website", "business"]'>
                          <div className="portfolio-thumb">
                            
                           <div className="gc_filter_cont_overlay_wrapper">
										<img src="images/content/gallery/filter_img4.jpg" className="zoom image img-responsive" alt="service_img"/>
										<div className="gc_filter_cont_overlay">
											<div className="gc_filter_text"><a href="images/content/gallery/filter_img4.jpg"><i className="fa fa-plus"></i></a></div>
										</div>
									</div>

                          </div>
                          {/* <!-- /.portfolio-thumb -->            */}
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 portfolio-wrapper III_column" data-groups='["all", "business", "website", "photoshop"]'>
                          <div className="portfolio-thumb">
                            <div className="gc_filter_cont_overlay_wrapper">
										<img src="images/content/gallery/filter_img5.jpg" className="zoom image img-responsive" alt="service_img"/>
										<div className="gc_filter_cont_overlay">
											<div className="gc_filter_text"><a href="images/content/gallery/filter_img5.jpg"><i className="fa fa-plus"></i></a></div>
										</div>
									</div>

                          </div>
                          {/* <!-- /.portfolio-thumb --> */}
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 portfolio-wrapper III_column" data-groups='["all", "business", "website", "logo"]'>
                          <div className="portfolio-thumb">
                            <div className="gc_filter_cont_overlay_wrapper">
										<img src="images/content/gallery/filter_img6.jpg" className="zoom image img-responsive" alt="service_img"/>
										<div className="gc_filter_cont_overlay">
											<div className="gc_filter_text"><a href="images/content/gallery/filter_img6.jpg"><i className="fa fa-plus"></i></a></div>
										</div>
									</div>
                          </div>
                          {/* <!-- /.portfolio-thumb --> */}
                        </div>

                      </div>
                      {/* <!--/#gridWrapper--> */}
                    </div>
                    {/* <!-- /.row --> */}
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="gc_filter_btn">
								<ul>
									<li><a href="#">View All</a></li>
								</ul>
							</div>
						</div>
					</div>
                  </div>
                   {/* <!-- /.container --> */}
                </div> 
                {/* <!--/.portfolio-area--> */}
		</div>
	</div>
</div>
{/* <!-- GC filter Wrapper End --> */}
    </>
  )
}

export default Gallery