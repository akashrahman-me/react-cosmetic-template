import MBBestSellerBackground from '../images/MBBestSellerBackground.webp'
import { Link } from 'react-router-dom'
import shadesIcon from '../images/shades.png'

export default function MBBestSeller({ datam, headline, descrive }) {
	return (
		<div className="text-center mb-4">
			<div>
				<div className="">
					<div className="my-3">
						<h5>{headline}</h5>
					</div>
					<div>
						<div style={{ overflow: 'hidden' }}>
							<div className="lay7Box">
								<div
									className={`stack-top box ${descrive ? 'py-2' : ''} auto-carousel-x`}
									style={{
										display: 'flex',
										...(descrive && {
											backgroundImage: `url("${MBBestSellerBackground}")`,
										}),
									}}
								>
									{descrive && (
										<div className="px-3 d-inline-block">
											<div>
												<p
													className="text-center py-5 px-2 mt-5 discount-off-percentage "
													style={{ width: '140px' }}
												>
													{descrive}
												</p>
											</div>
										</div>
									)}
									{datam.map(data => (
										<div
											className="mx-2 rounded d-inline-block"
											style={{ backgroundColor: 'rgb(255, 255, 255)' }}
											key={data.id}
										>
											<Link to={data.path} style={{ color: 'black' }}>
												<div className="px-1">
													<div className="mainLazy position-relative">
														<span
															className="lazy-load-image-background  lazy-load-image-loaded"
															style={{ display: 'inline-block' }}
														>
															<img
																src={data.image}
																className="cursor-pointer lazyTransition"
																alt={data.title}
																title={data.title}
																style={{ width: '130px', height: '170px' }}
															/>
														</span>
													</div>
													<div style={{ fontSize: '12px', width: '124px' }}>
														<p style={{ overflow: 'hidden' }}>
															<span className="max-tow-line">{data.title}</span>
														</p>
													</div>

													<div style={{ fontSize: '10px' }}>
														{data.discount && (
															<span className="brandColor strikeThrough">
																<span>₹</span>
																{data.price}
															</span>
														)}
														<span className="px-1">
															<span>₹</span>
															{data.discount ? data.discount.price : data.price}
														</span>
														{data.discount && (
															<span>
																<small className="discount-off-percentage">
																	({data.discount.percentage} Off)
																</small>
															</span>
														)}
													</div>

													<div className="d-flex justify-content-center  pt-1">
														<span>
															<img
																src={shadesIcon}
																height={15}
																width={15}
																alt="shades"
																style={{ margin: '0px' }}
															/>
														</span>
														<span>
															<h6
																className="pt-2 px-2"
																style={{ fontSize: '12px' }}
															>
																{data.item} shades
															</h6>
														</span>
													</div>
												</div>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
