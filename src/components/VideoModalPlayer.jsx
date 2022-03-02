import ReactPlayer from 'react-player'
import playIconSvg from '../images/play.svg'
import playingIcon from '../images/playing.svg'
import shareIcon from '../images/share-icon.svg'
import menuHorizIcon from '../images/menu-horiz.svg'
import unmuteIcon from '../images/unmute.svg'
import muteIcon from '../images/mute.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import thumbnail from '../images/thumbnail.jpg'

export default function VideoModalPlayer(props) {
	const { video, expandShare, streaming, videoIndex, toggleShareOption } = props

	const [play, setPlay] = useState(false)
	const togglePlay = () => setPlay(v => !v)
	const [mute, setMute] = useState(false)
	const toggleMute = () => setMute(!mute)

	useEffect(() => {
		streaming === videoIndex && setPlay(true)
	}, [videoIndex, streaming])

	const isPlay = streaming === videoIndex && play

	return (
		<div className="stream-video-main">
			<div className="position-relative w-100 h-100">
				<div className="position-absolute w-100 h-100">
					<img
						src={thumbnail}
						alt="Thumbnail Image"
						className="stream-modal-video-thumbnail-blur"
					/>
				</div>
				<div className="position-absolute w-100 h-100 ">
					<ReactPlayer width="100%" height="100%" url={video.path} playing={isPlay} />
				</div>
				<div className="position-absolute w-100 stream-expand-video ">
					<div className="stream-modal-action action-header d-flex justify-content-between align-items-center w-100">
						<button
							type="button"
							id={video.id}
							className="stream-modal-action action-menu-horiz p-0"
							onClick={expandShare}
						>
							<img width={40} height={40} src={menuHorizIcon} alt="More" />
						</button>
						<span className="stream-video-title text-light">{video.title}</span>
						<button
							type="button"
							className="stream-modal-action action-menu-horiz p-0"
							onClick={toggleMute}
						>
							<img
								width={40}
								height={40}
								src={mute ? muteIcon : unmuteIcon}
								alt={mute ? 'Mute' : 'Unmute'}
							/>
						</button>
					</div>
				</div>
				<div className="position-absolute w-100 h-100">
					{!isPlay && (
						<button
							type="button"
							className="stream-modal-action action-play-large"
							onClick={togglePlay}
						>
							<img width={150} height={150} src={playIconSvg} alt="Play" />
						</button>
					)}
					<button type="button" className="stream-modal-action action-play" onClick={togglePlay}>
						<img width={40} height={40} src={isPlay ? playingIcon : playIconSvg} alt="Play" />
					</button>
					<button
						type="button"
						className="stream-modal-action action-share"
						onClick={toggleShareOption}
					>
						<img width={40} height={40} src={shareIcon} alt="Share" />
					</button>
					<button type="button" className="stream-modal-action action-shopnow">
						<Link to={video.productPath} className="btn-shopnow">
							Shop Now
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}
