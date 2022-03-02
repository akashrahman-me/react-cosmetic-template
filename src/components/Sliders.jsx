import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

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

export default function Sliders({ mobile }) {
	return (
		<div
			className={`slide-carousel ${mobile ? 'slide-carousel-mobile' : 'slide-carousel-desktop'}`}
			style={mobile ? { marginTop: '1em', marginBottom: '1.5em' } : {}}
		>
			<Carousel
				swipeable={true}
				draggable={true}
				responsive={responsive}
				showDots={true}
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl
				transitionDuration={500}
				removeArrowOnDeviceType={['mobile']}
				renderDotsOutside={!mobile}
				containerClass="carousel-standerd"
			>
				{[...Array(10)].map(item => (
					<div key={Math.random()}>
						<Link to="/product">
							<img
								className="d-block  cursor"
								width="100%"
								src={
									mobile
										? 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/92f6ba37-c746-431b-8d67-b84058f43fd4.jpg' // 16x9
										: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/b93e4a85-53a1-42e4-b484-81fe13eeabd8.jpg' // 5x3
								}
								alt="BENNER"
								title="BENNER"
								style={{
									height: mobile ? 'auto' : '24.08vw',
									display: 'block',
								}}
							/>
						</Link>
					</div>
				))}
			</Carousel>
		</div>
	)
}
