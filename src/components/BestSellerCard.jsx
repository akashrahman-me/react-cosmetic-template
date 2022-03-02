import { Link } from 'react-router-dom'
import useWidth from '../hooks/useWidth'
import shades from '../images/shades.png'

export default function BestSellerCard({ data }) {
	const width = useWidth()

	return (
		<div
			className="col-6 col-md-4 col-xl-3"
			style={width <= 768 ? { width: 175, padding: 0, margin: '0 8px' } : {}}
		>
			<div
				className="shadow-sm mx-lg-2 position-relative bg-white"
				style={width <= 768 ? { border: '1px solid rgba(0,0,0,.125)' } : {}}
			>
				<div className="ps-1 " style={{ position: 'absolute', left: '-4px' }}>
					<Link to={data.path} style={{ color: 'black' }}></Link>
				</div>
				<div
					className="position-absolute start-100 translate-middle"
					style={{ top: '15px', right: '-5rem' }}
				>
					{data.item && (
						<Link to={data.path} style={{ color: 'black' }}>
							<div>
								<div className="d-flex">
									<span
										className="pt-1"
										style={{
											fontSize: '12px',
											fontWeight: 'bold',
										}}
									>
										{data.item}
									</span>
									<span className="px-2">
										<img
											src={shades}
											width="15px"
											height="15px"
											alt="shades"
											title="shades"
										/>
									</span>
								</div>
							</div>
						</Link>
					)}
				</div>
				<div className="mt-2 text-center" style={{ height: width >= 768 ? 250 : 150 }}>
					<Link to={data.path}>
						<span
							className="lazy-load-image-background  lazy-load-image-loaded"
							style={{
								display: 'inline-block',
							}}
						>
							<img
								alt="Matte As Hell Crayon Lipstick"
								src={data.image}
								title="Matte As Hell Crayon Lipstick"
								style={{
									objectFit: 'contain',
									width: '100%',
									height: width >= 768 ? 250 : 150,
								}}
							/>
						</span>
					</Link>
				</div>
				<div>
					<Link to={data.path} style={{ color: 'black' }}>
						<div className="p-1 d-flex justify-content-center">
							<div className="homeProductTitle mt-2">
								<h6 style={width <= 768 ? { fontSize: 11 } : {}}>
									<span>{data.title}</span>
								</h6>
							</div>
						</div>
						<div className="homePricingDetails" style={width <= 768 ? { fontSize: 11 } : {}}>
							{data.discount && (
								<div className="strikeThrough">
									<span>₹</span>
									<span>{data.price}</span>
								</div>
							)}
							<div className="px-1 px-md-2 ">
								<span>₹</span>
								<span>{data.discount ? data.discount.price : data.price}</span>
							</div>
							{data.discount && (
								<div>
									<span className="discount-off-percentage">
										({data.discount.percentage} Off)
									</span>
								</div>
							)}
						</div>
					</Link>
				</div>
				<div style={{ height: width >= 768 ? 40 : 30 }}>
					<div className="mt-2">
						<div className="row" style={{ height: width >= 768 ? 40 : 30 }}>
							<div className="col-12">
								<Link to={data.path}>
									<button
										className="btn btn-dark collectionButton"
										style={{
											outline: 'none',
											height: '100%',
											width: 'calc(100% + 1px)',
											fontSize: '13px',
										}}
									>
										SELECT SHADE
										<div className=" mx-4" />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
