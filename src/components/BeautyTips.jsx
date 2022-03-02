import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import useWidth from '../hooks/useWidth'

const responsive = {
	desktop: {
		breakpoint: { max: 5000, min: 768 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
	},
}

export default function BeautyTips() {
	const width = useWidth()

	return (
		<div>
			<div className="my-3">
				{width >= 768 ? (
					<h2>QUICK BEAUTY TIPS WITH SUGAR</h2>
				) : (
					<h5 className="text-center">QUICK BEAUTY TIPS WITH SUGAR</h5>
				)}
			</div>
			<div className="position-relative">
				<Carousel
					responsive={responsive}
					showDots={true}
					infinite={true}
					autoPlaySpeed={1000}
					keyBoardControl
					transitionDuration={500}
					removeArrowOnDeviceType={['mobile']}
					renderDotsOutside={width >= 768}
					containerClass="carousel-standerd"
				>
					{[...Array(6)].map(data => (
						<div key={Math.random()}>
							<Link to="/products">
								<img
									className="d-block  cursor"
									width="100%"
									src={
										width >= 768
											? `https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3f4e07fa-9834-4652-95e3-8646e738df0e.jpg`
											: `https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8cb59a8d-209e-45e6-9917-853259861ed3.jpg`
									}
									alt="Lipstick as Per Occasion"
									title="Lipstick as Per Occasion"
									style={width >= 768 ? { height: 'calc(24.08vw)' } : {}}
								/>
							</Link>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}
