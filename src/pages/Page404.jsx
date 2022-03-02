import { Link } from 'react-router-dom'
import Icon404bg from '../images/404bg.svg'

export default function Page404({ mobile }) {
	return (
		<div className="page-not-found-container" style={{ backgroundImage: `url("${Icon404bg}")` }}>
			<div className="py-5 my-5 px-md-5 mx-md-5 text-center text-md-start">
				<div className="woops" style={mobile ? { fontSize: '56px' } : {}}>
					Woops...!
				</div>
				<div className="pt-4">Either this page dosen't exist or the link entered is incorrect.</div>
				<div className="pb-5 pt-2">While we look, we'll ensure you never lost!</div>
				<div className="d-inline-flex flex-column flex-md-row">
					<div className="button404 px-2 px-md-3 py-2 rounded cursor-pointer">
						Back to Previous Page
					</div>
					<div className="px-4 py-2">or</div>
					<div>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<div className="button404 px-2 px-md-3 py-2 rounded cursor-pointer">
								Return to Home Page
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
