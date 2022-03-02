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
		id: 32840938409,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 934850945,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 20983493,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 987459082374,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 98712098374,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 9832749087,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 832479087,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 9823749832,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 53498594,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 928923843,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 93905487,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 7893857439875,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 982374897,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 58749857,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 982374983,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
	{
		id: 9385340985,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/58454d95-bbd2-44bc-9708-b7475fb46ec6.jpg',
		title: 'Featured Collection 2499',
	},
]

export default function HotDeals() {
	const width = useWidth()

	const items = datam.map(data => (
		<div className="px-md-3 d-inline-block mx-2 mx-md-0" key={data.id}>
			<Link to={data.path}>
				<div style={{ opacity: 1, transition: 'opacity 100s ease-in 0s' }}>
					<div>
						<span
							className="lazy-load-image-background  lazy-load-image-loaded"
							style={{
								display: 'inline-block',
								height: 'auto',
								width: '100%',
							}}
						>
							<img
								alt={data.title}
								src={data.image}
								className="d-block img-fluid cursor"
								width="100%"
								height="auto"
								title={data.title}
								style={
									width <= 768
										? {
												width: 320,
												height: 215,
												borderRadius: '5%',
										  }
										: {}
								}
							/>
						</span>
					</div>
				</div>
			</Link>
		</div>
	))

	return (
		<div>
			<div className="my-3">
				{width >= 768 ? <h2>HOT DEALS</h2> : <h5 className="text-center">HOT DEALS</h5>}
			</div>
			<div className={`${width <= 768 ? 'hotDealsCarousel' : ''}`}>
				{width >= 768 ? (
					<Carousel responsive={responsive} arrows={width >= 768}>
						{items}
					</Carousel>
				) : (
					<div className="auto-carousel-x">{items}</div>
				)}
			</div>
		</div>
	)
}
