import checkCircle from '../images/check_circle_white.svg'
import copyIcon from '../images/copyIcon.svg'
import blackRibbon from '../images/blackRibbon.png'
import { Link } from 'react-router-dom'
import useWidth from '../hooks/useWidth'

export default function Offerblog({ offer, copy, setCopy }) {
	const width = useWidth()

	return (
		<div className="position-relative">
			<Link to={offer.path}>
				<img
					src={offer.image}
					width="100%"
					height={width >= 768 ? '320rem' : 'auto'}
					className="rounded-3"
				/>
			</Link>
			<div className="mainCodeOffer">
				<div className="position-relative cursor">
					<div
						className="overRibbonOffer offer-code-bg justify-content-end position-absolute ps-4 py-1"
						style={{
							backgroundImage: `url(${blackRibbon})`,
						}}
						onClick={() => {
							navigator.clipboard.writeText(offer.code)
							setCopy(offer.code)
							setTimeout(setCopy, 5000, '')
						}}
					>
						<div>{copy === offer.code ? 'Copied' : offer.code}</div>
						<div className="px-1">
							<img
								src={copy === offer.code ? checkCircle : copyIcon}
								height="14px"
								width="14px"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
