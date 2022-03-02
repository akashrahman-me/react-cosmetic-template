import TopNotification from './TopNotification'
import NavSearchbar from './NavSearchbar'
import PopupRegister from './PopupRegister'
import NavLink from './NavLink'
import { useState } from 'react'

export default function Navbar() {
	const [registration, setRegistration] = useState(false)
	const handleRegisitration = () => setRegistration(!registration)
	return (
		<header style={{ position: 'sticky', top: 0, zIndex: 1020 }}>
			<div style={{ boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2)` }}>
				<TopNotification />
				<NavSearchbar handler={handleRegisitration} />
				<PopupRegister registration={registration} handler={handleRegisitration} />
				<NavLink />
			</div>
		</header>
	)
}
