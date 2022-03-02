import FooterHeading from '../components/FooterHeading'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MBNavbar from '../components/MBNavbar'
import MBFooter from '../components/MBFooter'
import useWidth from '../hooks/useWidth'
import ProductCollage from '../images/Product-collage_1.jpg'
import common from '../common.json'

export default function AboutUs() {
	const width = useWidth()

	return (
		<>
			{width >= 768 ? <Navbar /> : <MBNavbar searchButton={false} />}
			<FooterHeading title="About &amp; Us" />

			<section className="AboutUs_about_us_body footer-page-body mb-5 mb-md-0 px-0 px-md-5 mt-4 pb-5 pb-md-0">
				<img src={ProductCollage} width="100%" alt="product collage" />
				<br />
				<br />
				<p>
					Hello, gorgeous! Welcome to ${common.textdomain}. <br />A brand of choice for the women of
					today! And we're here to ensure you have a lot of fun with our makeup. <br />
					We're a brand that believes in empowerment. That's why, we carefully curate products from
					around the globe which meet every want and need there could possibly be when it comes to
					your makeup and skincare regime. We believe in every interpretation of beauty. Bold to
					subdued, quirky to crazy, everyday to glam goddess! Our aim is to celebrate every aspect
					of you, no matter what your style is. <br />
					So, go ahead and pick your faves.
					<br />
					It's time to Rule the world, one look at a time!
				</p>
			</section>
			{width >= 768 ? <Footer /> : <MBFooter />}
		</>
	)
}
