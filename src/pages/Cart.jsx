import Bereadcrumb from '../components/Bereadcrumb'
import shoppingCartIcon from '../images/shopping_cart.svg'
import OffersPriceDetailsIcon from '../images/Offers_price_details.svg'
import OfferIcon from '../images/Offers_icon.svg'
import PriceDetailsIcon from '../images/PriceDetails.svg'
import CartSubtotalIcon from '../images/CartSubtotal.svg'
import Shipping_CostIcon from '../images/Shipping_Cost.svg'
import DiscountIcon from '../images/Discount.svg'
import AmountPayableIcon from '../images/AmountPayable.svg'
import GiftCardIcon from '../images/GiftCard.svg'
import Collapse from 'react-bootstrap/Collapse'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import CartProduct from '../components/CartProduct'
import withCart from '../HOCs/withCart'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Cart({ datam, handleRemoveItem }) {
	const [promoCode, setPromoCode] = useState('')
	const handlePromoCode = e => setPromoCode(e.currentTarget.value)
	const [offerVisible, setOfferVisible] = useState(false)
	const toggleOfferVisible = () => setOfferVisible(v => !v)

	return (
		<>
			<Navbar />
			<div style={{ overflowX: 'hidden' }} className="pb-3">
				<div>
					<Bereadcrumb pages={[{ path: '/cart', name: 'Cart' }]} />
					<div className="shadow-lg mt-4 mx-3 bg-white" style={{ borderRadius: '20px' }}>
						<div className="row container-fluid">
							<div className="col-12 col-lg-6 px-4 ">
								<section className="mt-3">
									<div className="d-flex justify-content-between cart_orderSummary">
										<div>
											<span>
												<h6>
													<img
														src={shoppingCartIcon}
														width="20px"
														height="20px"
														alt="Shopping Cart Icon"
													/>
													<span className="px-2"> Order Summary</span>
												</h6>
											</span>
										</div>
										<div>
											<h6 style={{ textDecoration: 'underline' }}>
												Cart Total : Rs. 3395.00
											</h6>
										</div>
									</div>
								</section>
								<section className="mt-3 mb-4 child-scroll-hide">
									<div style={{ height: 400 }}>
										{datam.map(data => (
											<CartProduct
												key={data.id}
												data={data}
												handleRemoveItem={handleRemoveItem}
											/>
										))}
									</div>
								</section>
							</div>
							<div className="col-12 col-lg-6 py-3">
								<section>
									<div className="d-flex justify-content-between cart_orderSummary">
										<div>
											<span>
												<h6>
													<img
														src={OffersPriceDetailsIcon}
														width="20px"
														height="20px"
														alt=""
													/>
													<span className="px-2">Offers and Price Details</span>
												</h6>
											</span>
										</div>
									</div>
								</section>
								<div style={{ background: '#faf9f9', borderRadius: '10px' }} className="p-2 ">
									<section>
										<div className="paper-box-shadow">
											<div
												className="offer-collapse-button px-3 py-1 mt-1 rounded-1"
												onClick={toggleOfferVisible}
											>
												<div
													className="d-flex align-items-center justify-content-between"
													tabIndex={0}
													role="button"
												>
													<div className="d-flex brandColor">
														<span>
															<div className=" align-items-center ">
																<img
																	src={OfferIcon}
																	className="d-block"
																	width={20}
																	height={20}
																	alt="coupon"
																/>
															</div>
														</span>
														<span className="px-1">
															<h6>Available Offers/Promos for you! </h6>
														</span>
														{!offerVisible && (
															<span style={{ fontSize: '13px' }}>
																(Click to expand)
															</span>
														)}
													</div>
													<span style={{ marginTop: -8 }}>
														{offerVisible ? (
															<MdKeyboardArrowUp
																color="rgba(0, 0, 0, 0.54)"
																fontSize={24}
															/>
														) : (
															<MdKeyboardArrowDown
																color="rgba(0, 0, 0, 0.54)"
																fontSize={24}
															/>
														)}
													</span>
												</div>
											</div>
											<Collapse in={offerVisible}>
												<div className="px-3 my-3">
													<div>
														<div className="d-flex justify-content-between ">
															<div>
																<h6 style={{ fontWeight: 'bold' }}>
																	SUGAR Haul
																</h6>
															</div>
															<div>
																<span
																	style={{
																		fontWeight: 600,
																		fontSize: '14px',
																	}}
																>
																	<span
																		className="py-2 px-1 "
																		style={{
																			backgroundColor:
																				'rgb(255, 175, 204)',
																			borderStyle: 'dotted',
																			borderColor: 'red',
																			borderWidth: '2px',
																		}}
																	>
																		GJMSH
																	</span>
																</span>
															</div>
														</div>
														<div className="d-flex justify-content-between">
															<div className="py-2 px-2">
																<div style={{ fontSize: '13px' }}>
																	<p>
																		Get a Triple Delight Makeup
																		Set+&nbsp;Pouch on a spend of Rs. 999
																	</p>
																</div>
															</div>
														</div>
														<div>
															<div className="d-flex justify-content-between ">
																<div className="d-flex justfy-content-between">
																	<div className="pb-1">
																		<img
																			src="https://cdn.shopify.com/s/files/1/0906/2558/products/SUGARHAUL-WBGIMAGESoffer.jpg?v=1642779800"
																			alt="Triple Delight Makeup Set + PVC Pouch (GJMSH)"
																			className="shadow-sm"
																			width="50px"
																		/>
																	</div>
																	<div className="flex-grow-1 px-3 pt-2">
																		<div className="d-flex flex-column justify-content-between">
																			<span
																				style={{
																					fontWeight: 450,
																					fontSize: '13px',
																				}}
																			>
																				Triple Delight Makeup Set +
																				PVC Pouch (GJMSH)
																			</span>
																			<span
																				className="brandColor pt-1"
																				style={{
																					fontSize: '13px',
																				}}
																			>
																				899.00
																			</span>
																		</div>
																	</div>
																</div>
																<div className="brandColor pt-3 cursor">
																	<p
																		style={{
																			fontWeight: 'bold',
																			fontSize: '14px',
																		}}
																	>
																		+<span className="px-2">Apply</span>
																	</p>
																</div>
															</div>
														</div>
														<div className="d-flex justify-content-between ">
															<div>
																<h6 style={{ fontWeight: 'bold' }}>
																	Kohl Drama
																</h6>
															</div>
															<div>
																<span
																	style={{
																		fontWeight: 600,
																		fontSize: '14px',
																	}}
																>
																	<span
																		className="py-2 px-1 "
																		style={{
																			backgroundColor:
																				'rgb(255, 175, 204)',
																			borderStyle: 'dotted',
																			borderColor: 'red',
																			borderWidth: '2px',
																		}}
																	>
																		GJRKD
																	</span>
																</span>
															</div>
														</div>
														<div className="d-flex justify-content-between">
															<div className="py-2 px-2">
																<div style={{ fontSize: '13px' }}>
																	<p>
																		Get 4 different shades of Kohl Of
																		Honour Intense Kajal&nbsp;on a spend
																		of Rs. 999
																	</p>
																</div>
															</div>
														</div>
														<div>
															<div className="d-flex justify-content-between ">
																<div className="d-flex justfy-content-between">
																	<div className="pb-1">
																		<img
																			src="https://cdn.shopify.com/s/files/1/0906/2558/products/65.png?v=1643261885"
																			alt="Kohl Of Honour Intense Kajal - 01 Black Out+03 Aqua Lung+05 Go Green+06 Blue Moon (GJRKD)"
																			className="shadow-sm"
																			width="50px"
																		/>
																	</div>
																	<div className="flex-grow-1 px-3 pt-2">
																		<div className="d-flex flex-column justify-content-between">
																			<span
																				style={{
																					fontWeight: 450,
																					fontSize: '13px',
																				}}
																			>
																				Kohl Of Honour Intense Kajal -
																				01 Black Out+03 Aqua Lung+05
																				Go Green+06 Blue Moon (GJRKD)
																			</span>
																			<span
																				className="brandColor pt-1"
																				style={{
																					fontSize: '13px',
																				}}
																			>
																				996.00
																			</span>
																		</div>
																	</div>
																</div>
																<div className="brandColor pt-3 cursor">
																	<p
																		style={{
																			fontWeight: 'bold',
																			fontSize: '14px',
																		}}
																	>
																		+<span className="px-2">Apply</span>
																	</p>
																</div>
															</div>
														</div>
														<div className="d-flex justify-content-between ">
															<div>
																<h6 style={{ fontWeight: 'bold' }}>
																	Complimentary Product
																</h6>
															</div>
															<div>
																<span
																	style={{
																		fontWeight: 600,
																		fontSize: '14px',
																	}}
																>
																	<span
																		className="py-2 px-1 "
																		style={{
																			backgroundColor:
																				'rgb(255, 175, 204)',
																			borderStyle: 'dotted',
																			borderColor: 'red',
																			borderWidth: '2px',
																		}}
																	>
																		GJ2499
																	</span>
																</span>
															</div>
														</div>
														<div className="d-flex justify-content-between">
															<div className="py-2 px-2">
																<div style={{ fontSize: '13px' }}>
																	<p>
																		Grab a complimentary product with
																		every purchase
																	</p>
																</div>
															</div>
														</div>
														<div>
															<div className="d-flex justify-content-between ">
																<div className="d-flex justfy-content-between">
																	<div className="pb-1">
																		<img
																			src="https://cdn.shopify.com/s/files/1/0906/2558/products/GWP-Jan2022-WBG-set9_49693398-70c6-4921-9072-cd0a717492c4.jpg?v=1640965703"
																			alt="Go-Getter Set + Contour De Force Face Palette - 03 Fierce Feat (GJ2499)"
																			className="shadow-sm"
																			width="50px"
																		/>
																	</div>
																	<div className="flex-grow-1 px-3 pt-2">
																		<div className="d-flex flex-column justify-content-between">
																			<span
																				style={{
																					fontWeight: 450,
																					fontSize: '13px',
																				}}
																			>
																				Go-Getter Set + Contour De
																				Force Face Palette - 03 Fierce
																				Feat (GJ2499)
																			</span>
																			<span
																				className="brandColor pt-1"
																				style={{
																					fontSize: '13px',
																				}}
																			>
																				2095.00
																			</span>
																		</div>
																	</div>
																</div>
																<div className="brandColor pt-3 cursor">
																	<p
																		style={{
																			fontWeight: 'bold',
																			fontSize: '14px',
																		}}
																	>
																		+<span className="px-2">Apply</span>
																	</p>
																</div>
															</div>
														</div>
														<div>
															<div className="d-flex justify-content-between ">
																<div className="d-flex justfy-content-between">
																	<div className="pb-1">
																		<img
																			src="https://cdn.shopify.com/s/files/1/0906/2558/products/GWP-Jan2022-WBG-set8_1.jpg?v=1640878964"
																			alt="All Set To Go Translucent Powder + MAH Minis Set (GJ2499)"
																			className="shadow-sm"
																			width="50px"
																		/>
																	</div>
																	<div className="flex-grow-1 px-3 pt-2">
																		<div className="d-flex flex-column justify-content-between">
																			<span
																				style={{
																					fontWeight: 450,
																					fontSize: '13px',
																				}}
																			>
																				All Set To Go Translucent
																				Powder + MAH Minis Set
																				(GJ2499)
																			</span>
																			<span
																				className="brandColor pt-1"
																				style={{
																					fontSize: '13px',
																				}}
																			>
																				2398.00
																			</span>
																		</div>
																	</div>
																</div>
																<div className="brandColor pt-3 cursor">
																	<p
																		style={{
																			fontWeight: 'bold',
																			fontSize: '14px',
																		}}
																	>
																		+<span className="px-2">Apply</span>
																	</p>
																</div>
															</div>
														</div>
														<div className="d-flex justify-content-between mt-3 ">
															<div className="d-flex">
																<div className="px-2">
																	<svg
																		className="MuiSvgIcon-root"
																		focusable="false"
																		viewBox="0 0 24 24"
																		aria-hidden="true"
																		style={{
																			color: 'pink',
																			fontSize: '30px',
																		}}
																	>
																		<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
																	</svg>
																</div>
																<div className="px-3 pt-1">
																	<p
																		style={{
																			fontSize: '13px',
																			color: 'rgb(87, 85, 85)',
																		}}
																	>
																		Two offers cannot be clubbed. Free
																		products once chosen cannot be
																		exchanged.
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</Collapse>
										</div>
									</section>
									<section className="px-2 my-2 pt-2">
										<div className="d-flex ">
											<div className="pt-1">
												<img src={GiftCardIcon} width="20px" height="20px" alt="" />
											</div>
											<div className="px-2 pt-1">
												<p style={{ fontSize: '14px' }} className="pt-1">
													Gift Card/Discount Code
												</p>
											</div>
											<div
												className="shadow-lg mx-2 rounded flex=grow-1"
												style={{ height: '30px' }}
											>
												<div className=" d-flex justify-content-betweem bg-white">
													<div className=" ">
														<input
															className="flex-grow-1 pt-2 px-2 pb-2"
															style={{
																border: 'none',
																outline: 'none',
																fontSize: '13px',
															}}
															placeholder="Enter Promo Code"
															onChange={handlePromoCode}
															value={promoCode}
														/>
													</div>
													<div
														className=" "
														style={{
															color: 'white',
															fontSize: '12px',
															cursor: 'pointer',
														}}
													>
														<button
															type="button"
															className={`btn px-3 rounded ${
																promoCode === '' ? 'p-2' : 'btn-dark py-2'
															}`}
															style={{
																fontSize: '12px',
																...(promoCode === ''
																	? {
																			backgroundColor:
																				'rgb(236, 228, 219)',
																			color: 'white',
																	  }
																	: {}),
															}}
														>
															Apply
														</button>
													</div>
												</div>
												<div className="mt-1" />
											</div>
										</div>
									</section>
									<section>
										<div className="d-flex">
											<div>
												<img
													src={PriceDetailsIcon}
													width="20px"
													height="20px"
													alt=""
												/>
											</div>
											<div className="px-2 pt-1">
												<p style={{ fontSize: '13px' }}>
													<span style={{ textDecoration: 'underline' }}>Pric</span>e
													Details
												</p>
											</div>
										</div>
									</section>
									<section className="bg-white rounded">
										<div className="container-fluid py-2">
											<div className="d-flex mb-2" style={{ fontSize: '13px' }}>
												<span>
													<img
														src={CartSubtotalIcon}
														width="15px"
														height="15px"
														alt=""
													/>
												</span>
												<span className="px-2">Cart Sub Total: </span>
												<span className="px-5">₹ 3395.00</span>
											</div>
											<div
												className="d-flex mb-2"
												style={{ fontSize: '13px', display: 'inline-block' }}
											>
												<span>
													<img
														src={Shipping_CostIcon}
														width="15px"
														height="15px"
														alt=""
													/>
												</span>
												<span className="px-2">Shipping Cost: </span>
												<span className="px-5">₹ 0.00</span>
											</div>
											<div className="d-flex mb-2" style={{ fontSize: '13px' }}>
												<span>
													<img
														src={DiscountIcon}
														width="15px"
														height="15px"
														alt=""
													/>
												</span>
												<span className="px-2">Discount Applied: </span>
												<span className="px-4">
													<span className="px-1 text-success">₹ 0.00</span>
												</span>
											</div>
											<div>
												<div className="d-flex " style={{ fontSize: '13px' }}>
													<span>
														<img
															src={AmountPayableIcon}
															width="15px"
															height="15px"
															alt=""
														/>
													</span>
													<span className="px-2">Amount Payable: </span>
													<span className="px-4">
														<span className="px-2 fw-bold">₹3395.00</span>
													</span>
												</div>
												<div style={{ fontSize: '10.5px' }} className="px-4 ">
													<span>Including ₹517.88 in taxes</span>
												</div>
											</div>
										</div>
									</section>
									<section className="my-3 py-2">
										<div>
											<div>
												<div className="d-flex border " style={{ fontSize: '13px' }}>
													<div className="px-3 pt-2 cursor">
														<a href="#" style={{ color: 'black' }}>
															&lt;
															<span
																className="px-1 "
																style={{ textDecoration: 'underline' }}
															>
																Continue Shopping
															</span>
														</a>
													</div>
													<div className="flex-grow-1">
														<button
															className="btn btn-dark form-control py-2"
															style={{ fontSize: '13px' }}
														>
															Delivery Information
														</button>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default withCart(Cart)
