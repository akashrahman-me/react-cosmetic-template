import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import useWidth from '../hooks/useWidth'
import { Link } from 'react-router-dom'

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 768 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
}

const datam = [
	{
		id: 23232,
		path: '/product',
		images: [
			'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/133c26cd-41f1-4017-a9c0-83577e7a074e.jpg',
			'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5db2b0ae-4bad-414e-8a6d-5d3ec7748f2e.jpg',
		],
	},
	{
		id: 7678,
		path: '/product',
		images: [
			'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/133c26cd-41f1-4017-a9c0-83577e7a074e.jpg',
			'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5db2b0ae-4bad-414e-8a6d-5d3ec7748f2e.jpg',
		],
	},
	{
		id: 2139,
		path: '/product',
		images: [
			'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/133c26cd-41f1-4017-a9c0-83577e7a074e.jpg',
			'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5db2b0ae-4bad-414e-8a6d-5d3ec7748f2e.jpg',
		],
	},
]

export default function QuizSection() {
	const width = useWidth()

	const items = datam.map(data => (
		<div key={data.id} className="d-inline-block">
			<Link to={data.path}>
				<img
					className="d-block cursor-pointer"
					width="100%"
					src={width <= 768 ? data.images[1] : data.images[0]}
					style={width <= 768 ? { width: '100%' } : { height: '24vw' }}
				/>
			</Link>
		</div>
	))

	return (
		<div>
			<div className="my-3">{width >= 768 ? <h2>QUIZ</h2> : <h5 className="text-center">QUIZ</h5>}</div>
			<div className="position-relative">
				{width >= 768 ? (
					<Carousel responsive={responsive} infinite={true} autoPlay={true} arrows={false}>
						{items}
					</Carousel>
				) : (
					<div className="auto-carousel-x">{items}</div>
				)}
			</div>
		</div>
	)
}
