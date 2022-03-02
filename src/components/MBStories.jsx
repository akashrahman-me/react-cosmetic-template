import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'
import Stories from 'react-insta-stories'
import StoryData from './StoryData'
import Container from 'react-bootstrap/Container'

export default function MBStories() {
	const [isClose, setIsClose] = useState(true)
	const toggleClose = () => setIsClose(!isClose)

	const stories = [
		{
			content: props => <StoryData props={props} handler={toggleClose} />,
		},
		{
			content: props => <StoryData props={props} handler={toggleClose} />,
		},
		{
			content: props => <StoryData props={props} handler={toggleClose} />,
		},
	]

	return (
		<Container>
			<div className="stories-swiper mt-2">
				{!isClose && (
					<div className="story-preview">
						<Stories
							stories={stories}
							defaultInterval={6000}
							width="100vw"
							height="100vh"
							className="position-absolute"
						/>
					</div>
				)}

				<Swiper spaceBetween={24} slidesPerView={4}>
					{[...Array(30)].map(data => (
						<SwiperSlide key={Math.random()}>
							<div onClick={toggleClose}>
								<a href="#">
									<div className="stories-list-anchor">
										<div className="stories-container">
											<img
												src="https://db62cod6cnasq.cloudfront.net/user-media/2109/sg28892/1523910345.jpeg"
												alt=""
												style={{ borderRadius: '50%' }}
											/>
										</div>
									</div>
									<span className="sg-title">Beauty Edits</span>
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Container>
	)
}
