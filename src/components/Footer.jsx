import logo from '../images/logo1x1.jpg'
import { Link } from 'react-router-dom'
import playstoreIcon from '../images/playstore.png'
import appleStoreIcon from '../images/apple-store.png'
import phone_android_whiteIcon from '../images/phone_android_white.svg'
import common from '../common.json'

export default function Footer() {
	return (
		<footer>
			<div className="mt-2">
				<footer className="footer_main px-5">
					<section
						style={{
							textAlign: 'center',
						}}
					>
						<Link to="/">
							<img
								src={logo}
								height="120px"
								alt="footer icon-Sugar Cosmetics"
								className="m-2 rounded-circle"
							/>
						</Link>
					</section>
					<section className="social_icons d-flex justify-content-center">
						<span className="px-1">
							<a href="#" target="_blank">
								<img
									src="https://sugarcosmetics.com/desc-images/facebook.svg"
									width={18}
									height={18}
									className="cursor"
								/>
							</a>
						</span>
						<span className="px-1">
							<a href="#" target="_blank">
								<img
									src="https://sugarcosmetics.com/desc-images/Instagram.svg"
									width={18}
									height={18}
									className="cursor"
								/>
							</a>
						</span>
						<span className="px-1">
							<a href="#" target="_blank">
								<img
									src="https://sugarcosmetics.com/desc-images/Pinterest.svg"
									width={20}
									height={20}
									className="cursor"
								/>
							</a>
						</span>
						<span className="px-1">
							<a href="#" target="_blank">
								<img
									src="https://sugarcosmetics.com/desc-images/Tumblr.svg"
									width={20}
									height={20}
									className="cursor"
								/>
							</a>
						</span>
						<span className="px-1">
							<a href="#" target="_blank">
								<img
									src="https://sugarcosmetics.com/desc-images/Youtube.svg"
									width={20}
									height={20}
									className="cursor"
								/>
							</a>
						</span>
					</section>
					<div className="d-flex justify-content-between mt-5">
						<div className="col-6 px-5">
							<div style={{ marginBottom: '25px' }}>
								<h5
									style={{
										color: 'white',
										fontSize: '17px',
									}}
								>
									SUBSCRIBE TO OUR NEWSLETTER
								</h5>
							</div>
							<p className="newsletter_content d-flex">
								<i className="fa fa-envelope" />
								<input
									type="email"
									placeholder="Your email address"
									style={{ color: 'white' }}
									className="col-6"
								/>
								<br />
								<button className="mx-1 rounded">SIGN UP</button>
							</p>
						</div>
						<div className="col-6">
							<div style={{ marginBottom: '25px' }}>
								<h5
									style={{
										color: 'white',
										fontSize: '17px',
									}}
								>
									GET THE NEW SUGAR APP TODAY.
								</h5>
							</div>
							<div className="d-flex">
								<div className="col-4" style={{ color: '#999999' }}>
									Tap into a better shopping experience.
								</div>
								<div className="col-2">
									<a href="#" target="_blank">
										<img
											src={playstoreIcon}
											alt="playstore logo"
											style={{ marginRight: '3px' }}
											height="30px"
										/>
									</a>
								</div>
								<div className="col-2">
									<a href="#" target="_blank">
										<img src={appleStoreIcon} alt="apple store logo" height="30px" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-2 px-5">
						<div style={{ marginBottom: '25px' }}>
							<h5 style={{ color: 'white', fontSize: '17px' }}>INFORMATION</h5>
						</div>
						<div className="d-flex col-8 justify-content-between">
							<div className="info_content">
								<a className="pages_link" href={`mailto:${common.email}`}>
									Contact Us
								</a>
							</div>
							<div className="info_content">
								<Link to="/terms">Terms &amp; Conditions</Link>
							</div>
							<div className="info_content">
								<Link to="/returns">Returns</Link>
							</div>
							<div className="info_content">
								<Link to="/faqs">FAQs</Link>
							</div>
							<div className="info_content">
								<Link to="/about-us">About Us</Link>
							</div>
						</div>
					</div>
					<div className="pt-4 px-5">
						<div style={{ marginBottom: '25px' }}>
							<h5 style={{ color: 'white', fontSize: '17px' }}>GET IN TOUCH</h5>
						</div>
						<div className="d-flex justify-content-between flex-wrap">
							<div style={{ color: 'white' }}>
								<div className="d-flex">
									<div className="pe-1">
										<img src={phone_android_whiteIcon} width={15} height={15} />
									</div>
									<div>Call us at</div>
								</div>
								<div className="info_content d-flex">
									<div>
										<a
											href={`tel:${common.telephone}`}
											className="mail_link text-decoration-none"
										>
											{common.telephone}
										</a>
									</div>
								</div>
								<div className="info_content d-flex">
									<div>
										<a
											href={`tel:${common.number}`}
											className="mail_link text-decoration-none"
										>
											{common.number}
										</a>
									</div>
								</div>
								<div
									style={{
										color: 'gray',
										fontSize: '12px',
									}}
								>
									Monday to Friday : 9 AM to 7 PM
								</div>
							</div>
							<div style={{ color: 'white' }}>
								Support
								<p className="info_content">
									<a
										className="mail_link text-decoration-none"
										href={`mailto:${common.email}`}
									>
										{common.email}
									</a>
								</p>
							</div>
							<div style={{ color: 'white' }}>
								Careers
								<p className="info_content">
									<a
										className="mail_link text-decoration-none"
										href={`mailto:${common.email}`}
									>
										{common.email}
									</a>
								</p>
							</div>
							<div style={{ color: 'white' }}>
								PR &amp; Media
								<p className="info_content">
									<a
										className="mail_link text-decoration-none"
										href={`mailto:${common.email}`}
									>
										{common.email}
									</a>
								</p>
							</div>
						</div>
					</div>
					<section
						className="py-4 mt-5"
						style={{
							borderTop: '1px solid #6D8B99',
							textAlign: 'center',
							margin: 'auto',
						}}
					>
						<div
							style={{
								color: 'white',
								fontFamily: "'Poppins', sans-serif",
							}}
						>
							Copyright © 2022 SUGAR Cosmetics. All rights reserved.
						</div>
					</section>
				</footer>
			</div>
		</footer>
	)
}
