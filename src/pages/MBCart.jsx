import couponIcon from '../images/ic_apply_coupon.png'
import arrowIcon from '../images/brandArrow.svg'
import CartProduct from '../components/CartProduct'
import withCart from '../HOCs/withCart'
import MBNavbar from '../components/MBNavbar'
import MBFooter from '../components/MBFooter'

function MbCart({ datam, handleRemoveItem }) {
	return (
		<>
			<MBNavbar searchButton={false} />
			<div className="font-weight-bold" style={{ paddingBottom: 136 }}>
				<div>
					{datam.map(data => (
						<CartProduct key={data.id} data={data} handleRemoveItem={handleRemoveItem} mobile />
					))}
				</div>
				<div className="mt-1 py-2 border-top border-bottom" style={{ backgroundColor: '#FFF0F6' }}>
					<section>
						<div className="container-fluid">
							<div className="d-flex">
								<div className="px-2 pt-1 align-items-center">
									<img
										src={couponIcon}
										className="d-block"
										width={30}
										height={30}
										alt="coupon"
									/>
								</div>
								<div className=" px-2">
									<div className="mt-2">
										<span className="cartAvailableOffers brandColor">
											VIEW ALL OFFERS
										</span>
									</div>
								</div>
								<div className="d-flex justify-content-end flex-grow-1 pt-1">
									<div>
										<img src={arrowIcon} width={15} height={15} alt="next" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="mt-2 px-2 bg-white border-top border-bottom ">
					<div className="pt-2 cartFontSubHeadings">
						<span className="cartPriceDetails">Price Details</span>
					</div>
					<div>
						<div className="d-flex justify-content-between ">
							<div>
								<div>
									<span className=" text-secondary cartFontSubHeadings">Subtotal</span>
								</div>
							</div>
							<div>
								<div>
									<span className="cartPriceValues">3296.00</span>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-between ">
							<div>
								<div>
									<span className=" text-secondary cartFontSubHeadings">Tax</span>
								</div>
							</div>
							<div>
								<div>
									<span className="cartPriceValues">502.78</span>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-between ">
							<div>
								<div>
									<span className=" text-secondary cartFontSubHeadings">Discount</span>
								</div>
							</div>
							<div>
								<div>
									<span className="text-success cartFontSubHeadings">0.00</span>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-between ">
							<div>
								<div>
									<span className=" text-secondary cartFontSubHeadings">Shipping</span>
								</div>
							</div>
							<div>
								<div>
									<span className="cartPriceValues">0.00</span>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-between py-1 border-top">
							<div>
								<div>
									<div className="cartTotal">Total</div>
								</div>
							</div>
							<div>
								<div>
									<div className="cartTotal">3296.00</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cartWishlistBottom " />
				<div className="fixed-bottom text-white mb-5 cartViewCheckBackground ">
					<div className="d-flex justify-content-between px-1 pb-3">
						<div>
							<div className=" pt-1 px-1 cartViewCheckTotal">Rs . 3296.00</div>
							<span className="px-1 cartFont12">View Details</span>
						</div>
						<div className="pt-2">
							<button className="btn mainBgColor px-5 checkout-button">
								<span className="text-dark px-4 cartCouponApplied">CHECKOUT</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<MBFooter />
		</>
	)
}

export default withCart(MbCart)
