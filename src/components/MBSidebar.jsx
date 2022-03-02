import Offcanvas from 'react-bootstrap/Offcanvas'
import { MdArrowDropDown, MdClose } from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo1x1.jpg'

const sidebarLinks = [
	{
		name: 'MAKEUP', // it's must be unique
		path: '/products', // Now i haven't path that's whay put home path :)
		sublinks: [
			{
				name: 'LIPS',
				path: '/products',
				sublinks: [
					{
						name: 'LIPSTICKS',
						path: '/products',
					},
					{
						name: 'WONDER WOMAN LIPSTICK RANGE',
						path: '/products',
					},
					{
						name: 'LIP CARE',
						path: '/products',
					},
				],
			},
			{
				name: 'FACE',
				path: '/products',
				sublinks: [
					{
						name: 'PRIMERS',
						path: '/products',
					},
					{
						name: 'POWDER / COMPACT',
						path: '/products',
					},
					{
						name: 'FOUNDATION & BB CREAM',
						path: '/products',
					},
				],
			},
		],
	},
	{
		name: 'BRUSHES',
		path: '/products',
		sublinks: [
			{
				name: 'FACE BRUSHES',
				path: '/products',
				sublinks: [
					{
						name: 'Blend Trend Face Brush - 001 Blush',
						path: '/products',
					},
					{
						name: 'Blend Trend Face Brush - 002 Concealer',
						path: '/products',
					},
					{
						name: 'Blend Trend Face Brush - 003 Contour',
						path: '/products',
					},
				],
			},
			{
				name: 'EYES BRUSHES',
				path: '/products',
				sublinks: [
					{
						name: 'Blend Trend Eyeshadow Brush - 041 Flat',
						path: '/products',
					},
					{
						name: 'Blend Trend Eyeshadow Brush - 042 Round',
						path: '/products',
					},
					{
						name: 'Blend Trend Eyeshadow Brush - 868 Round',
						path: '/products',
					},
				],
			},
		],
	},
	{
		name: 'TRENDING',
		path: '/products',
		sublinks: [
			{
				name: 'SUGAR MERCH STATION',
				path: '/products',
			},

			{
				name: 'MINIS SET',
				path: '/products',
				sublinks: [
					{
						name: 'LIMITED EDITION MAKEUP TRIO SET',
						path: '/products',
					},
				],
			},
			{
				name: 'MAKEUP KITS',
				path: '/products',
			},
			{
				name: 'BESTSELLERS',
				path: '/products',
			},
		],
	},
	{
		name: 'OFFERS',
		path: '/offers',
	},
	{
		name: '2021 HIGHLIGHTS',
		path: '/products',
	},
	{
		name: 'MORE',
		path: '/products',
	},
]

export default function MBSidebar({ show, handleShow }) {
	const [collapse, setCollapse] = useState('') // Lavel 1
	const [collapse2, setCollapse2] = useState('') // Lavel 2
	const handleCollapse = e => {
		const name = e.currentTarget.name
		name === collapse ? setCollapse('') : setCollapse(name)
	}
	const handleCollapse2 = e => {
		const name = e.currentTarget.name
		name === collapse2 ? setCollapse('') : setCollapse2(name)
	}

	return (
		<Offcanvas show={show} onHide={handleShow} className="mb-sidebar-container">
			<Offcanvas.Body className="mb-sidebar-body">
				<div style={{ backgroundColor: 'black', height: '100%' }}>
					<div className="px-3 pt-4 d-flex justify-content-center">
						<Link to="/">
							<img src={logo} alt="SUGAR Cosmetics" className="rounded-circle" height="60" />
						</Link>
					</div>
					{sidebarLinks.map((sidebarLink, index) => (
						<div key={Math.random()}>
							<div className="px-2 my-2 pt-3">
								<div className="d-flex justify-content-between">
									<div className="flex-grow-1">
										<Link to={sidebarLink.path} style={{ color: 'white' }}>
											<div className="mb-sidelist">{sidebarLink.name}</div>
										</Link>
									</div>
									{sidebarLink.sublinks && (
										<button
											style={{ all: 'unset' }}
											type="button"
											name={sidebarLink.name}
											onClick={handleCollapse}
										>
											{collapse === sidebarLink.name ? (
												<MdClose color="red" fontSize={24} />
											) : (
												<MdArrowDropDown fontSize={24} />
											)}
										</button>
									)}
								</div>
							</div>

							{/* LAVEL TWO (2) */}
							{sidebarLink.sublinks &&
								collapse === sidebarLink.name &&
								sidebarLink.sublinks.map((sublink, index) => (
									<div
										className="px-3 py-2"
										style={{
											backgroundColor: 'rgb(24, 25, 26)',
										}}
										key={Math.random()}
									>
										<div>
											<div className="d-flex justify-content-between">
												<div className="pt-3 flex-grow-1">
													<Link
														to={sublink.path}
														style={{
															color: 'white',
														}}
													>
														<div
															className="py-1"
															style={{
																fontWeight: 500,
																fontSize: '1.15rem',
															}}
														>
															{sublink.name}
														</div>
													</Link>
												</div>
												{sublink.sublinks && (
													<button
														style={{ all: 'unset' }}
														type="button"
														name={sublink.name}
														onClick={handleCollapse2}
													>
														{collapse2 === sublink.name ? (
															<MdClose color="red" fontSize={24} />
														) : (
															<MdArrowDropDown fontSize={24} />
														)}
													</button>
												)}
											</div>
											{index !== sidebarLink.sublinks.length - 1 && (
												<hr
													className="MuiDivider-root"
													style={{
														backgroundColor: 'white',
													}}
												/>
											)}

											{/* LAVEL THREE (3) */}
											{sublink.sublinks && collapse2 === sublink.name && (
												<div className="px-3 py-2">
													{sublink.sublinks.map((sublink, index) => (
														<div key={Math.random()}>
															<div className="d-flex justify-content-between">
																<div className="pt-3 flex-grow-1">
																	<Link
																		to={sublink.path}
																		style={{
																			color: 'white',
																		}}
																	>
																		<div
																			style={{
																				fontWeight: 500,
																				fontSize: '1rem',
																			}}
																		>
																			{sublink.name}
																		</div>
																	</Link>
																</div>
															</div>
															{index !== sublink.sublinks - 1 && (
																<hr
																	className="MuiDivider-root"
																	style={{
																		backgroundColor: 'white',
																	}}
																/>
															)}
														</div>
													))}
												</div>
											)}
										</div>
									</div>
								))}
							{index !== sidebarLinks.length - 1 && (
								<hr className="MuiDivider-root" style={{ backgroundColor: 'white' }} />
							)}
						</div>
					))}
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
