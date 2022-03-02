import { MdClose } from 'react-icons/md'
import moreIcon from '../images/moreIcon.png'
import copyLinkIcon from '../images/copyLinkIcon.png'
import twitterIcon from '../images/twitterIcon.png'
import facebookIcon from '../images/facebookIcon.png'
import { useState } from 'react'
import ShareButton from 'react-web-share-button'

const options = [
	{ id: 889459, path: 'https://facebook.com', icon: facebookIcon, name: 'Facebook' },
	{ id: 993485, path: 'https://twitter.com', icon: twitterIcon, name: 'Twitter' },
	{ id: 242098, icon: copyLinkIcon, name: 'Copy Link' },
	{ id: 498394, icon: moreIcon, name: 'More' },
]

export default function StreamVideoShare({ setShareOption, video }) {
	const [linkCopy, setLinkCopy] = useState(false)
	const handleLinkCopy = () => {
		navigator.clipboard.writeText(video.productPath)
		setLinkCopy(true)
		setTimeout(setShareOption, 3000, false)
	}
	const toggleShareOption = () => setShareOption(v => !v)

	return (
		<div className="stream-share-modal-container">
			<div
				className="position-absolute position-flex w-100 h-100"
				style={{ backgroundColor: 'rgb(0 0 0 / 60%)', zIndex: 2020 }}
				onClick={toggleShareOption}
			/>
			<div
				className="position-absolute stream-share-modal w-auto h-100 mx-auto"
				style={{ zIndex: 2021, left: 0, right: 0 }}
			>
				{linkCopy && (
					<div className="d-flex align-items-center justify-content-center position-absolute w-100 h-100 text-light">
						<span>Link Copied</span>
					</div>
				)}
				{!linkCopy && (
					<div className="position-absolute w-100 h-auto bg-white stream-share-modal-main">
						<div className="text-end py-3 px-2">
							<button
								type="button"
								className="bg-transparent border-0"
								onClick={toggleShareOption}
							>
								<MdClose fontSize={26} color="#333" />
							</button>
						</div>
						<hr className="my-0 mx-4" style={{ backgroundColor: '#666' }} />
						<div className="d-flex py-4 mx-3 justify-content-between">
							{options.map(option => (
								<div
									className="d-flex flex-column align-items-center justify-content-center w-25 cursor-pointer"
									key={option.id}
									onClick={option.id === 242098 ? handleLinkCopy : () => ''}
								>
									{option.id === 498394 ? (
										<ShareButton
											url={video.productPath}
											buttonText={
												<img
													src={option.icon}
													alt={option.name}
													width={46}
													height={46}
												/>
											}
										/>
									) : option.path ? (
										<a href={option.path}>
											<img src={option.icon} alt={option.name} width={46} height={46} />
										</a>
									) : (
										<img src={option.icon} alt={option.name} width={46} height={46} />
									)}
									<small>{option.name}</small>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
