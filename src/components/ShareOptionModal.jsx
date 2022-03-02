import ShareButton from 'react-web-share-button'

export default function ShareOptionModal({ cancel, videos, currentId }) {
	const currentVideo = videos.filter(video => video.id == currentId)[0]

	return (
		<div className="position-absolute share-option-dialog">
			<div style={{ width: 220 }} className="mx-auto h-100 d-flex flex-column justify-content-evenly">
				<span className="share-option-dialog-title mb-4 d-block">{currentVideo.title}</span>
				<div className="mt-4 option-dialog-share">
					<ShareButton buttonText="Share" url={currentVideo.productPath} />
					<button
						type="button"
						className="share-option-dialog-button option-dialog-cancel"
						onClick={cancel}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}
