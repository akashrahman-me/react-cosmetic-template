import { Link } from 'react-router-dom'
import shadesIcon from '../images/shades.png'
import BestSeller_RibbonIcon from '../images/BestSeller_Ribbon.png'
import star_filledIcon from '../images/star_filled.png'
import favoriteBorderBlackIcon from '../images/favoriteBorderBlack.svg'

export default function MiniProduct() {
	return (
		<div className="col-6">
			<div className="mx-1 my-1 border position-relative rounded-3 bg-white">
				<Link to="/product">
					<div>
						<div
							className="ps-1 position-absolute"
							style={{
								top: '5px',
								left: '-4px',
							}}
						>
							<div>
								<div className="pb-1 position-relative">
									<img
										src={BestSeller_RibbonIcon}
										width="65px"
										height="17px"
										alt="Best Seller"
										title="Best Seller"
									/>
									<div className="tagNames">Bestseller</div>
								</div>
							</div>
						</div>
						<div className="pt-2 pb-1" style={{ float: 'right' }}>
							<div className="invisible">
								<span className="px-2">
									<img src={shadesIcon} width="20px" height="20px" />
								</span>
								<span className="px-1 fs-6">--</span>
							</div>
						</div>
						<div className="imageContainer px-2">
							<img
								alt="Cheat Sheet Anti-Aging Mask"
								src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715"
								className="cursor"
								height="230px"
								style={{
									objectFit: 'contain',
									maxWidth: '100%',
									width: '185px',
									maxHeight: '85%',
								}}
							/>
						</div>
						<div className="detailsContainer">
							<div>
								<div
									className="d-block d-md-none collectionTruncate px-1 py-1"
									style={{
										height: '45px',
										textAlign: 'center',
									}}
								>
									<h6 style={{ overflow: 'hidden' }}>
										<span>Cheat Sheet Anti-Aging Mask</span>
									</h6>
								</div>
								<div className="d-none d-md-block">
									<h6 style={{ overflow: 'hidden' }} />
								</div>
							</div>
							<div className="pricingDetails py-1">
								<div className="strikeThrough text-muted" />
								<div className="px-1 px-md-2 collPrice">Rs.99</div>
								<div />
							</div>
							<div
								className="d-flex justify-content-center align-item-center px-5 "
								style={{ height: '25px' }}
							>
								<div className="px-1">
									<img src={star_filledIcon} width="25px" height="25px" alt="4.8 rating" />
								</div>
								<div
									className="d-flex pt-2 mt-1"
									style={{
										fontSize: '13px',
										color: 'black',
									}}
								>
									<div className="px-1">
										<span>4.8</span>
									</div>
									<div>(30)</div>
								</div>
							</div>
						</div>
					</div>
				</Link>
				<div className="d-flex rounded-bottom" style={{ border: '1px solid black', height: '38px' }}>
					<div className="col-3 px-2 py-1" style={{ borderRight: '1px solid black' }}>
						<img src={favoriteBorderBlackIcon} width={28} height={28} className="fs-1" />
					</div>
					<div className="col-9">
						<button
							type="button"
							className="btn btn-dark form-control collectionButton"
							style={{
								outline: 'none',
								height: '100%',
								width: '100%',
							}}
						>
							ADD TO CART
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
