import { Link } from 'react-router-dom'

const navlinks = [
	{
		id: 9280498,
		name: 'MAKEUP',
		path: '/products',
		sublinks: [
			{
				id: 324093,
				name: 'LIPS',
				path: '/products',
				sublinks: [
					{
						id: 9023840983,
						name: 'LIPSTICKS',
						path: '/products',
					},
					{
						id: 873478,
						name: 'WONDER WOMAN LIPSTICK RANGE',
						path: '/products',
					},
					{
						id: 329483948,
						name: 'LIP CARE',
						path: '/products',
					},
				],
			},
			{
				id: 92384983,
				name: 'FACE',
				path: '/products',
				sublinks: [
					{
						id: 932843,
						name: 'PRIMERS',
						path: '/products',
					},
					{
						id: 39849834,
						name: 'POWDER / COMPACT',
						path: '/products',
					},
					{
						id: 329483,
						name: 'FOUNDATION & BB CREAM',
						path: '/products',
					},
				],
			},
		],
	},
	{
		id: 39248739884,
		name: 'BRUSHES',
		path: '/products',
		sublinks: [
			{
				id: 39849,
				name: 'FACE BRUSHES',
				path: '/products',
				sublinks: [
					{
						id: 39203948,
						name: 'Blend Trend Face Brush - 001 Blush',
						path: '/products',
					},
					{
						id: 3028493,
						name: 'Blend Trend Face Brush - 002 Concealer',
						path: '/products',
					},
					{
						id: 3294803984,
						name: 'Blend Trend Face Brush - 003 Contour',
						path: '/products',
					},
				],
			},
			{
				id: 30409384,
				name: 'EYES BRUSHES',
				path: '/products',
				sublinks: [
					{
						id: 2093840938,
						name: 'Blend Trend Eyeshadow Brush - 041 Flat',
						path: '/products',
					},
					{
						id: 39840938,
						name: 'Blend Trend Eyeshadow Brush - 042 Round',
						path: '/products',
					},
					{
						id: 392480938,
						name: 'Blend Trend Eyeshadow Brush - 868 Round',
						path: '/products',
					},
				],
			},
		],
	},
	{
		id: 392849,
		name: 'TRENDING',
		path: '/products',
		sublinks: [
			{
				id: 923084938,
				name: 'SUGAR MERCH STATION',
				path: '/products',
			},
			{
				id: 289348309,
				name: 'MINIS SET',
				path: '/products',
				sublinks: [
					{
						id: 230948,
						name: 'LIMITED EDITION MAKEUP TRIO SET',
						path: '/products',
					},
				],
			},
			{
				id: 3924839,
				name: 'MAKEUP KITS',
				path: '/products',
			},
			{
				id: 320984983,
				name: 'BESTSELLERS',
				path: '/products',
			},
		],
	},
	{
		id: 4239849,
		name: 'OFFERS',
		path: '/offers',
	},
	{
		id: 23948309,
		name: '2021 HIGHLIGHTS',
		path: '/products',
	},
	{
		id: 7734589743,
		name: 'MORE',
		path: '/products',
	},
]

export default function NavLink() {
	return (
		<div className="d-flex justify-content-between bg-white">
			<div className="col-8 col-md-10 col-lg-8 col-xl-6 px-3 d-flex justify-content-between navHeading white-spacing-none">
				{navlinks.map(navlink1 => (
					<div className="menuDropdown mx-4" key={navlink1.id}>
						<Link
							to={navlink1.path}
							className="fw-bold text-muted position-relative py-3 d-block"
							style={{ whiteSpace: 'nowrap' }}
						>
							{navlink1.name}
						</Link>
						{navlink1.sublinks && (
							<div className="menuDropdownContent">
								{navlink1.sublinks.map(navlink2 => (
									<div className="anotherMenuDropdown d-flex level2" key={navlink2.id}>
										<div className="px-3 py-2 mx-2 my-2">
											<Link to={navlink2.path}>
												<span
													className="d-flex flex-wrap position-relative"
													style={{ textShadow: 'none' }}
												>
													{navlink2.name}
												</span>
											</Link>
											{navlink2.sublinks && (
												<div className="anotherMenuDropdownContent py-3">
													{navlink2.sublinks.map(navlink3 => (
														<div className="px-2 py-2 d-flex" key={navlink3.id}>
															<Link to={navlink3.path}>
																<span
																	className="level3 d-flex flex-wrap position-relative"
																	style={{ maxWidth: '10rem' }}
																>
																	{navlink3.name}
																</span>
															</Link>
														</div>
													))}
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
