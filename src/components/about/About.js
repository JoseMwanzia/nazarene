import React,{useState} from 'react'

function About() {

	const ShortenParagraph = ({paragraph, maxLength}) => {
		const [showFullParagraph, setShowFullparagraph] = useState(false);

		const shortenText = () => {
			return paragraph.split(' ').slice(0, maxLength).join(' ')
		}

		const handleReadMoreClick = () => {
			setShowFullparagraph(!showFullParagraph)
		}

		return (
			<p>
				{showFullParagraph ? paragraph : shortenText()}
				{!showFullParagraph && '...'}
				<button onClick={handleReadMoreClick}>
					{showFullParagraph ? 'Read Less' : 'Read More'}
				</button>
				{/* {!showFullParagraph && <a href="#" onClick={handleReadMoreClick}>Read More</a>} */}
			</p>
		)
	};
	const longParagraph = 'In 1985, missionary Harmon Schmelzenbach came to Kenya to explore opportunities for Church planting. He had already met two Kenyan families. The families of John Marangu and Leonard Mboke were instrumental in helping Harmon to settle in Nairobi. Harmon began by inviting a few families to a house fellowship which finally grew to a church – Nairobi Central Church of the Nazarene. In 1986, he helped constitute the first Church board composed of John and Leah Marangu, Cornelius Muthuri, Apollo Nyabola, William Abuonji and Rose Olang’ . Because of Harmon’ s commitment to planting churches within the country, he invited David Holmes to be the pastor of Central Church. David handed over to Rev. Don Messer who pastured the church from 1989 until 1992. Rev. Lynn Burkhart took over from 1993 to mid-1996. Between then and 1998, the church went through a transition of supply pastors who included Rev. Julius Njuki (deceased), Pst. Harris Lemuel and Rev. Dr. Darryl Stanton. In 1998 Rev. Everest Tustin took over as pastor and served until the year 2000. Rev. Everest Tustin then went back home and Pst. Richard Ouko became pastor from 2001-2002. Between 2003 and 2005 the church again had two supply pastors. They included Rev. Paul Mtambo (2003-2005), and Rev. Dr. Rodney Reed (2005-2006). In 2006, Rev. Fredrick Amolo took over as senior pastor. He pastored the church until the year 2011 when he was reassigned as a member of faculty of Africa Nazarene University. Rev. Fredrick Opondo who was then his immediate assistant was appointed by the then District Superintendent Rev. Gerphas Oure (deceased) to pastor the church in an interim capacity for two years. At the expiry of the appointment in 2014, the church elected Rev. Fredrick Opondo as the Senior Pastor. Since then the Church has had four senior pastors. Rev. Harmon and other missionaries helped to raise funds to acquire the land and put up buildings at the Church. The church has also been a beneficiary of tireless efforts and sacrifice of the Work and Witness teams.	Currently, the Nairobi Central Church of the Nazarene has two preaching points namely:Uaamani with Pst. Amina Ndunge and Kibera with Pst. Ronald Matakala.'

  return (
    <>
    <div className="gc_about_story_main_wrapper" id='about_us'>
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<div className="gc_about_img_wrapper">
					<img src="images/content/nazareneInside.png" alt="about_img" className="zoom image img-responsive"/>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<div className="gc_about_heading_wrapper">
					<div className="gc_about_heading">
						<h2>Our Story</h2>
						<h1>Welcome to Church of the Nazarene</h1>
						<div className="gc_dot_wrapper">
							<div className="gc_dot">
								<a href="#"><i className="fa fa-plus"></i></a>
							</div>
						</div>
					</div>
						<ShortenParagraph paragraph={longParagraph} maxLength={32}/>
					</div>
				<div className="row">
					<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
						<div className="gc_about_cont_wrapper">
							<div className="gc_about_icons_wrapper">
								<i className="fa fa-arrows"></i>
							</div>
							<div className="gc_about_icons_cont_wrapper">
								<h3><a href="#">Glorify God</a></h3>
							</div>
						</div>
						<div className="gc_about_bottom_cont_wrapper">
							<p>Aenean sollicitudin, lorem uis bibendum auctor, nisi elit uat ipsum, nec sagittis .</p>
						</div>
					</div>
					<div className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-12 col-xs-12">
						<div className="gc_about_cont_wrapper">
							<div className="gc_about_icons_wrapper">
								<i className="fa fa-book"></i>
							</div>
							<div className="gc_about_icons_cont_wrapper">
								<h3><a href="#">Believe Bible</a></h3>
							</div>
						</div>
						<div className="gc_about_bottom_cont_wrapper">
							<p>Aenean sollicitudin, lorem uis bibendum auctor, nisi elit uat ipsum, nec sagittis .</p>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
						<div className="gc_about_cont_wrapper">
							<div className="gc_about_icons_wrapper">
								<i className="fa fa-heart"></i>
							</div>
							<div className="gc_about_icons_cont_wrapper">
								<h3><a href="#">Love Community</a></h3>
							</div>
						</div>
						<div className="gc_about_bottom_cont_wrapper">
							<p>Aenean sollicitudin, lorem uis bibendum auctor, nisi elit uat ipsum, nec sagittis .</p>
						</div>
					</div>
					<div className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-12 col-xs-12">
						<div className="gc_about_cont_wrapper">
							<div className="gc_about_icons_wrapper">
								<i className="fa fa-user"></i>
							</div>
							<div className="gc_about_icons_cont_wrapper">
								<h3><a href="#">Love People</a></h3>
							</div>
						</div>
						<div className="gc_about_bottom_cont_wrapper">
							<p>Aenean sollicitudin, lorem uis bibendum auctor, nisi elit uat ipsum, nec sagittis .</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default About