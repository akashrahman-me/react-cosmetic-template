import { Link } from 'react-router-dom'
import whiteBackIcon from '../images/whiteBack.png'

export default function BackNavbar({ backurl, title }) {
	return (
		<div className="container-fluid fixed-top bg-dark py-2" style={{ height: '50px' }}>
			<div>
				<Link to={backurl === undefined ? '/' : backurl}>
					<img
						src={whiteBackIcon}
						width="25px"
						className="float-start"
						style={{ paddingTop: '5px' }}
					/>
				</Link>
				<h6 className="float-start py-2 px-3" style={{ color: 'white', float: 'right' }}>
					{title}
				</h6>
			</div>
		</div>
	)
}
