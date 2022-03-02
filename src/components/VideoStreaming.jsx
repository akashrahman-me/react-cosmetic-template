import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReactPlayer from 'react-player'
import { useCallback, useState } from 'react'
import playIcon from '../images/play.png'
import StreamModal from './StreamModal'
import useWidth from '../hooks/useWidth'

const responsive = {
	desktop: {
		breakpoint: { max: 5000, min: 768 },
		items: 5,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
	},
}

const videos = [
	{
		id: 10,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642492421-sujbmfvw/watermarked/540/HowtoMakeAnyLipstickMatte.mp4',
		title: '0More recently with desktop publishing',
		productPath: '/product',
	},
	{
		id: 11,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642491700-ysnvptek/watermarked/540/ViralSkullContour.mp4',
		title: '1From Wikipedia, the free encyclopedia.',
		productPath: '/product',
	},
	{
		id: 12,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642492421-sujbmfvw/watermarked/540/HowtoMakeAnyLipstickMatte.mp4',
		title: '2More recently with desktop publishing',
		productPath: '/product',
	},
	{
		id: 13,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642491700-ysnvptek/watermarked/540/ViralSkullContour.mp4',
		title: '3From Wikipedia, the free encyclopedia.',
		productPath: '/product',
	},
	{
		id: 14,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642492421-sujbmfvw/watermarked/540/HowtoMakeAnyLipstickMatte.mp4',
		title: '4More recently with desktop publishing',
		productPath: '/product',
	},
	{
		id: 15,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642492421-sujbmfvw/watermarked/540/HowtoMakeAnyLipstickMatte.mp4',
		title: '5From Wikipedia, the free encyclopedia.',
		productPath: '/product',
	},
	{
		id: 16,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642491700-ysnvptek/watermarked/540/ViralSkullContour.mp4',
		title: '6More recently with desktop publishing',
		productPath: '/product',
	},
	{
		id: 17,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642492421-sujbmfvw/watermarked/540/HowtoMakeAnyLipstickMatte.mp4',
		title: '7From Wikipedia, the free encyclopedia.',
		productPath: '/product',
	},
	{
		id: 18,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642491700-ysnvptek/watermarked/540/ViralSkullContour.mp4',
		title: '8From Wikipedia, the free encyclopedia.',
		productPath: '/product',
	},
	{
		id: 19,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642492421-sujbmfvw/watermarked/540/HowtoMakeAnyLipstickMatte.mp4',
		title: '9More recently with desktop publishing',
		productPath: '/product',
	},
	{
		id: 20,
		path: 'https://cdn1.fireworktv.com/medias/2022/1/18/1642491700-ysnvptek/watermarked/540/ViralSkullContour.mp4',
		title: '10More recently with desktop publishing',
		productPath: '/product',
	},
]

export default function VideoStreaming() {
	const [streamModal, setStreamModal] = useState(false)
	const closeStreamModal = useCallback(() => setStreamModal(false), [])
	const [play, setPlay] = useState(false)
	const playVideo = e => setPlay(e.currentTarget.id)
	const [streamingVideos, setStreamingVideos] = useState()
	const handleStreamModal = index => {
		const demoVideos = videos.map(element => element)
		const prevVideos = demoVideos.splice(0, index)
		setStreamingVideos(demoVideos.concat(...prevVideos))
		setStreamModal(true)
		setPlay(false)
	}

	const width = useWidth()

	return (
		<div className="px-2">
			<div className="my-3">
				{width >= 768 ? <h2>SUGAR STREAMING</h2> : <h5 className="text-center">SUGAR STREAMING</h5>}
			</div>
			{streamModal && <StreamModal videos={streamingVideos} close={closeStreamModal} />}
			<div className="ready-video-for-streaming">
				<Carousel responsive={responsive}>
					{videos.map((video, index) => (
						<div
							className="position-relative d-inline-block cursor-pointer streaming-video-describe"
							key={video.id}
							onClick={() => handleStreamModal(index)}
						>
							<div className="video-object-cover">
								<ReactPlayer
									width={240}
									height={400}
									url={video.path}
									playing={play === video.id.toString()}
									muted={true}
								/>
							</div>
							{play !== video.id.toString() && (
								<div
									id={video.id}
									className="position-absolute w-100 h-100"
									style={{ top: 0, left: 0 }}
									onMouseEnter={playVideo}
								>
									<div className="w-100 h-100 d-flex align-items-center justify-content-center position-absolute">
										<button
											type="submit"
											className="position-absolute bg-transparent border-0"
											style={{ zIndex: 1 }}
										>
											<img src={playIcon} width={50} height={50} alt="Play Video" />
										</button>
									</div>
									<div className="w-100 h-50 position-absolute streaming-video-title-contain">
										<div
											style={{ padding: '7%' }}
											className="d-flex align-items-end h-100"
										>
											<h5 className="streaming-video-title">{video.title}</h5>
										</div>
									</div>
								</div>
							)}
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}
