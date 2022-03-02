import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import { Link } from 'react-router-dom'
import close_whiteIcon from '../images/close_white.svg'

export default function TopNotification({ mobile }) {
	const [collapse, setCollapse] = useState(true)
	const handleCollapse = () => setCollapse(!collapse)

	return (
		<Collapse in={collapse}>
			<div className="bg-dark text-white text-center">
				<div className="d-flex justify-content-center py-1">
					<div className="flex-grow-1">
						<Link to="/" style={{ color: 'white' }} className="text-decoration-none">
							<p
								style={{
									marginBottom: '2px',
									fontSize: mobile ? '12px' : 'inherit',
									fontWeight: mobile ? 500 : 400,
								}}
							>
								Get 5 beauty bestsellers + pouch on spend of ₹1399
							</p>
						</Link>
					</div>
					<div onClick={handleCollapse} className="cursor-pointer">
						<div className={`d-flex justify-content-end cursor px-2 ${mobile ? 'pt-0' : 'pt-1'}`}>
							<img src={close_whiteIcon} width="16" />
						</div>
					</div>
				</div>
			</div>
		</Collapse>
	)
}
