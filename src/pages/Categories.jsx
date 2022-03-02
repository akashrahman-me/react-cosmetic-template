import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MBNavbar from '../components/MBNavbar'
import MBFooter from '../components/MBFooter'
import useWidth from '../hooks/useWidth'

const datam = [
	{
		id: 34234,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/Lips.jpg',
		title: 'Lips',
	},
	{
		id: 34345,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/Eyes.jpg',
		title: 'Eyes',
	},
	{
		id: 7687,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/Face.jpg',
		title: 'Face',
	},
	{
		id: 7097,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/Valueset.jpg',
		title: 'Valueset',
	},
	{
		id: 1356,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/1601043152Gifting.jpg',
		title: 'Skin Care',
	},
	{
		id: 6533,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/Clearance.jpg',
		title: 'Clearance',
	},
	{
		id: 356735,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/Merch.jpg',
		title: 'Merch',
	},
	{
		id: 342167,
		path: '/offers-vendor',
		image: 'https://sugar-mobile-application.s3.amazonaws.com/category-images/Tools.png',
		title: 'Lips',
	},
]

export default function Categories() {
	const width = useWidth()

	return (
		<>
			{width >= 768 ? <Navbar /> : <MBNavbar searchButton={false} />}
			<div style={{ paddingBottom: 70 }}>
				{datam.map(data => (
					<div key={data.id}>
						<Link to={data.path}>
							<div className="pt-1 px-1 position-relative text-white">
								<img src={data.image} width="100%" className="rounded-3" />
								<div
									className="fs-4 position-absolute categoriesText"
									style={{ zIndex: '1', top: 0 }}
								>
									<div className="d-flex justify-content-start px-2 text-uppercase">
										{data.title}
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
			{width >= 768 ? <Footer /> : <MBFooter />}
		</>
	)
}
