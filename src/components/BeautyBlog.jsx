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
		id: 23092,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/88788977-9c96-4efe-ae27-091addb34790.jpg',
	},
	{
		id: 3436,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f25692f6-da9a-4428-ad47-4fe1a9f80569.jpg',
	},
	{
		id: 9877,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1f465aa8-cb5c-4a95-836a-2930e9e4de85.jpg',
	},
	{
		id: 345646,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/88788977-9c96-4efe-ae27-091addb34790.jpg',
	},
]

export default function BeautyBlog() {
	const width = useWidth()

	return (
		<div>
			<div className="my-3">
				{width >= 768 ? (
					<h2>SUGAR BEAUTY BLOG</h2>
				) : (
					<h5 className="text-center">SUGAR BEAUTY BLOG</h5>
				)}
			</div>
			<Carousel
				responsive={responsive}
				arrows={false}
				showDots={width <= 768}
				infinite={true}
				autoPlay={true}
			>
				{datam.map(data => (
					<div className="px-md-3" key={data.id}>
						<Link to={data.path}>
							<img
								alt=""
								src={data.image}
								className="d-block img-fluid cursor"
								width="100%"
								height="auto"
							/>
						</Link>
					</div>
				))}
			</Carousel>
		</div>
	)
}
