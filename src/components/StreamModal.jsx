import { useEffect, useState } from 'react'
import React from 'react'
import Carousel from 'react-spring-3d-carousel'
import nextIcon from '../images/next.svg'
import prevIcon from '../images/prev.svg'
import closeIcon from '../images/close.svg'
import ShareOptionModal from './ShareOptionModal'
import VideoModalPlayer from './VideoModalPlayer'
import StreamVideoShare from './StreamVideoShare'

function StreamModal({ videos, close }) {
	const [shareOption, setShareOption] = useState(false)
	const toggleShareOption = () => setShareOption(v => !v)
	const [streaming, setStreaming] = useState(0)
	const nextButton = () => {
		setStreaming(v => {
			if (v === false) v = 0
			return v >= videos.length - 1 ? 0 : v + 1
		})
	}
	const previousButton = () => {
		setStreaming(v => {
			if (v === false) v = 0
			return v === 0 ? videos.length - 1 : v - 1
		})
	}
	const [expandShare, setExpandShare] = useState(null)
	const handleExpandShare = e => {
		const id = e.currentTarget.id
		id == expandShare ? setExpandShare(null) : setExpandShare(id)
	}

	useEffect(() => {
		document.body.style.overflowY = 'hidden'
		return () => {
			document.body.style.overflowY = 'auto'
		}
	}, [])

	const slides = videos.map((video, index) => ({
		key: video.id,
		content: (
			<VideoModalPlayer
				video={video}
				expandShare={handleExpandShare}
				streaming={streaming}
				videoIndex={index}
				toggleShareOption={toggleShareOption}
			/>
		),
	}))

	return (
		<div>
			<div className="stream-modal-container">
				<div className="stream-modal-dark"></div>
				<div className="stream-modal-buttons">
					<button type="button" className="stream-modal-action action-next" onClick={nextButton}>
						<img src={nextIcon} width={40} height={40} alt="Next Video" title="Next Video" />
					</button>
					<button
						type="button"
						className="stream-modal-action action-previous"
						onClick={previousButton}
					>
						<img src={prevIcon} width={40} height={40} alt="Prev Video" title="Previous Video" />
					</button>
					<button type="button" className="stream-modal-action action-close" onClick={close}>
						<img src={closeIcon} width={40} height={40} alt="Close" title="Close" />
					</button>
				</div>
				{shareOption && (
					<StreamVideoShare setShareOption={setShareOption} video={videos[streaming]} />
				)}
				<div className="stream-modal">
					<div style={{ width: '80%', height: '100vh', margin: 'auto' }}>
						<Carousel goToSlide={streaming} slides={slides} />
					</div>
				</div>
				{expandShare && (
					<ShareOptionModal cancel={handleExpandShare} currentId={expandShare} videos={videos} />
				)}
			</div>
		</div>
	)
}

export default React.memo(StreamModal)
