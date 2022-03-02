import { MdFavoriteBorder } from 'react-icons/md'
import image from '../images/image25x34.jpg'
import BestSellerRibbon from '../images/BestSeller_Ribbon.png'
import TrendingRibbon from '../images/Trending_Ribbon.png'
import shades from '../images/shades.png'
import startFilled from '../images/star_filled.png'
import { Link } from 'react-router-dom'

export default function Product() {
	return (
		<div className="col-sm-6 col-md-4 col-lg-3">
			<div className="prodDiv position-relative mx-4 my-4 bg-white">
				<Link to="/product">
					<div className="ps-1 " style={{ position: 'absolute', left: '-4px' }}>
						<div>
							<div className="position-relative">
								<img src={BestSellerRibbon} />
								<div className="tagNames">Bestseller</div>
							</div>
						</div>
						<div>
							<div className="position-relative">
								<img src={TrendingRibbon} />
								<div className="tagNames">Trending</div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<div className="invisible">
							<span className="px-2">
								<img src={shades} width="15px" height="15px" />
							</span>
							<span className="px-1 fs-6">--</span>
						</div>
					</div>
					<div className="pb-1" style={{ height: '260px' }}>
						<img
							src={image}
							className="w-100 h-100"
							style={{
								objectFit: 'contain',
							}}
						/>
					</div>
					<div className="collectionTitle px-1">
						<h6 style={{ overflow: 'hidden' }}>
							<span>
								<span>Base Of Glory Pore Minimizing Pri… </span>
							</span>
						</h6>
					</div>
					<div className="pricingDetails pb-4">
						<div className="strikeThrough text-muted" />
						<div className="px-1 px-md-2 collPrice">Rs.799</div>
						<div />
					</div>
					<div className="d-flex justify-content-center align-item-center mb-2 ratingCss">
						<div className="px-0" style={{ height: '20px' }}>
							<img
								src={startFilled}
								className="w-100 h-100"
								style={{
									objectFit: 'contain',
								}}
							/>
						</div>
						<div className="d-flex" style={{ color: 'black' }}>
							<div>
								<span>4.8</span>
							</div>
							<div style={{ marginLeft: '0.1rem' }}>(179)</div>
						</div>
					</div>
				</Link>
				<div style={{ height: '30px' }}>
					<div className="buttonHide">
						<div className="d-flex" style={{ height: '30px' }}>
							<div className="col-3 d-flex justify-content-center py-1 form-control-collection-btn">
								<MdFavoriteBorder fontSize="1.2rem" />
							</div>
							<div className="col-9 ">
								<button
									className="btn btn-dark form-control collectionButton w-100 h-100"
									style={{
										outline: 'none',
									}}
								>
									ADD TO CART
									<div />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
