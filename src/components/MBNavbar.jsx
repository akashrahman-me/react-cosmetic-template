import { MdFavoriteBorder, MdSearch, MdLocalMall } from 'react-icons/md'
import { useState } from 'react'
import MBSidebar from './MBSidebar'
import TopNotification from './TopNotification'
import logo from '../images/logo1x1.jpg'
import menuWhite from '../images/menuWhite.svg'
import { Link } from 'react-router-dom'

export default function MBNavbar({ searchIcon, searchButton, cartIcon, title }) {
	const [sidebar, setSidebar] = useState(false)
	const toggleSidebar = () => setSidebar(!sidebar)

	return (
		<header style={{ position: 'sticky', top: 0, zIndex: 1020 }}>
			<div>
				<div className="text-center">
					<div className="">
						<TopNotification mobile />
						<div
							className={`d-flex justify-content-between px-1 ${!title ? 'py-2' : ''}`}
							style={{ background: 'black' }}
						>
							<div className="my-1">
								<div className="mobMenu">
									<button
										className="btn"
										tabIndex={0}
										type="button"
										onClick={toggleSidebar}
									>
										<img src={menuWhite} width={24} height={24} />
									</button>
								</div>
							</div>
							{title ? (
								<div className="flex-grow-1 px-2 text-start align-self-center overflow-hidden">
									<div>
										<h6 className="text-white mb-0 text-ellipsis">{title}</h6>
									</div>
								</div>
							) : (
								<div className="px-4 py-1">
									<Link to="/">
										<img
											src={logo}
											alt="SUGAR Cosmetics"
											width="40"
											height="100%"
											className="rounded-circle"
										/>
									</Link>
								</div>
							)}

							<div>
								<div className="d-flex justify-content-between   pt-1">
									<div className="px-1 my-1">
										{searchIcon !== false && (
											<Link to="/search">
												<MdSearch fontSize={25} color="white" />
											</Link>
										)}
									</div>
									<div className="my-1">
										<MdFavoriteBorder color="white" fontSize={25} />
									</div>
									{cartIcon !== false && (
										<div className="ps-2">
											<Link to="/cart">
												<div className="d-flex justify-content-end float-end position-relative">
													<div className="position-relative">
														<MdLocalMall fontSize={25} color="white" />
													</div>
													<span className="position-absolute text-center productCartCount collectionOfferExist">
														<span className="px-1">5</span>
													</span>
												</div>
											</Link>
										</div>
									)}
								</div>
							</div>
						</div>
						{searchButton !== false && (
							<div>
								<div className="px-2 py-2" style={{ background: '#F5F5F5' }}>
									<Link to="/search">
										<div className="py-1 border d-flex justify-content-between text-muted border">
											<div className="px-2">Search for products...</div>
											<div className="px-1">
												<MdSearch fontSize={24} />
											</div>
										</div>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<MBSidebar show={sidebar} handleShow={toggleSidebar} />
		</header>
	)
}
