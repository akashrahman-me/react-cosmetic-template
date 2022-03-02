import { MdHome, MdOutlineMenu, MdLocalMall, MdAccountCircle } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const footerButtons = [
	{
		Icon: MdHome,
		name: 'Home',
		path: '/',
		current: true, // TRUE || FALSE
	},
	{
		Icon: MdOutlineMenu,
		name: 'Categories',
		path: '/categories',
	},
	{
		Icon: MdLocalMall,
		name: 'Cart',
		path: '/cart',
	},
	{
		Icon: MdAccountCircle,
		name: 'My Account',
		path: '/account',
	},
]

export default function MBFooter() {
	const currentLocation = useLocation()

	return (
		<footer>
			<div>
				<div>
					<div className="text-white text-center container-fluid">
						<div
							className="d-flex justify-content-between fixed-bottom py-2 px-4"
							style={{ backgroundColor: 'black' }}
						>
							{footerButtons.map(button => (
								<div key={button.name}>
									<Link to={button.path}>
										<div
											style={{
												color:
													button.path === currentLocation.pathname ||
													button.path + '/' === currentLocation.pathname
														? 'rgb(252, 39, 121)'
														: 'white',
											}}
										>
											<button.Icon fontSize={25} />
											<div style={{ fontSize: '10px' }}>
												<span>{button.name}</span>
											</div>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
