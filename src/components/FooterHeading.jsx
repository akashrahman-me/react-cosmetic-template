import home from '../images/home.png'
import { Link } from 'react-router-dom'

export default function FooterHeading({ title }) {
	return (
		<header className="footer-page-header pt-3">
			<h1>{title}</h1>
			<small>
				<img src={home} alt="home icon" height="10px" />
				&nbsp;
				<Link to="/">Home</Link>&nbsp;/&nbsp;{title}
			</small>
		</header>
	)
}
