import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import useWidth from '../hooks/useWidth'

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 768 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
}

const datam = [
	{
		id: 83928493,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8740d1a9-b087-4999-9ef9-c1bec3d52b10.jpg',
	},
	{
		id: 39854985,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/51010034-c77d-469b-80a8-e83813b86578.jpg',
	},
	{
		id: 689340948,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f0b831cf-1754-405e-ac27-990a4303ec73.jpg',
	},
	{
		id: 598598,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f6552bb0-84cf-4236-9066-56cf6b094008.jpg',
	},
	{
		id: 39483948,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/2f2bddac-4862-4cd3-a8a8-e2b0be30d5f8.jpg',
	},
	{
		id: 875493082,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f3ff9d13-89f2-4720-879b-4919d837b31e.jpg',
	},
	{
		id: 85945723,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8740d1a9-b087-4999-9ef9-c1bec3d52b10.jpg',
	},
	{
		id: 73647836,
		path: '/products',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/51010034-c77d-469b-80a8-e83813b86578.jpg',
	},
]

export default function Explore() {
	const width = useWidth()

	return (
		<div>
			<div className="my-3">
				{width >= 768 ? <h2>EXPLORE</h2> : <h5 className="text-center">EXPLORE</h5>}
			</div>
			<div>
				<Carousel
					responsive={responsive}
					containerClass="carousel-standerd"
					arrows={width >= 768}
					autoPlay={true}
					showDots={width <= 768}
				>
					{datam.map(data => (
						<div className="px-md-3" key={data.id}>
							<Link to={data.path}>
								<img
									alt=""
									src={data.image}
									className="d-block img-fluid  cursor"
									width="100%"
									height="auto"
									title=""
								/>
							</Link>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}
