import React from 'react'

function Gallery() {

    function Gallery({dataGroups, image}) {
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 portfolio-wrapper III_column" data-groups={dataGroups}>
                <div className="portfolio-thumb">

                <div className="gc_filter_cont_overlay_wrapper">
                            <img src={image} className="zoom image img-responsive" alt="service_img"/>
                            <div className="gc_filter_cont_overlay">
                                <div className="gc_filter_text"><a href={image}><i className="fa fa-plus"></i></a></div>
                            </div>
                        </div>
                </div>
                {/* .portfolio-thumb */}
            </div>
        )
    }

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
						<h1>Church Gallery</h1>
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

                        <Gallery dataGroups={'["all", "website", "logo"]'} image={"images/content/gallery/people.png"} />
                        <Gallery dataGroups={'["all", "website", "logo"]'} image={"images/content/gallery/inside.png"} />
                        <Gallery dataGroups={'["all", "business", "website", "photoshop"]'} image={"images/content/gallery/inside.png"} />
                        <Gallery dataGroups={'["all", "logo", "photoshop"]'} image={"images/content/gallery/inside.png"} />
                        <Gallery dataGroups={'["all", "logo", "website", "business"]'} image={"images/content/gallery/inside.png"} />
                        <Gallery dataGroups={'["all", "business", "website", "photoshop"]'} image={"images/content/gallery/inside.png"} />
                        <Gallery dataGroups={'["all", "business", "website", "logo"]'} image={"images/content/gallery/inside.png"} />

                      </div>
                      {/* <!--/#gridWrapper--> */}
                    </div>
                    {/* <!-- /.row --> */}
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="gc_filter_btn">
								<ul>
									<h2><span style={{color: "#e5ae49"}}>Gallery Section</span></h2>
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