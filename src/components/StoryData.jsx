import ShareButton from 'react-web-share-button'
import { MdClose, MdShare } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ({ props, handler }) {
	return (
		<div className="story-container">
			<div className="story-header">
				<div className="story-identify">
					<img
						src="https://db62cod6cnasq.cloudfront.net/user-media/2109/sg29168/2695761493.jpeg"
						alt=""
						className="story-auth-image"
					/>
					<Link to="/product">
						<strong>Beauty Edits</strong>
					</Link>
				</div>
				<div className="story-option">
					<ShareButton
						url="#"
						buttonStyle={{ all: 'unset' }}
						text=""
						title=""
						buttonText={<MdShare color="white" fontSize={24} />}
					/>
					<button style={{ all: 'unset' }} onClick={handler}>
						<MdClose color="white" fontSize={28} />
					</button>
				</div>
			</div>
			<div className="story-media">
				<img
					src="https://db62cod6cnasq.cloudfront.net/user-media/2109/s218302/3170244947.jpeg"
					className="story-image mw-100 mh-100"
					alt="Storyly Story Image"
				/>
			</div>
			<div className="story-footer">
				<Link to="/product">SEE MORE</Link>
			</div>
		</div>
	)
}
