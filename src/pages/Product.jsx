import { useState } from 'react'
import { MdFavoriteBorder, MdLocalMall, MdShoppingCart } from 'react-icons/md'
import StarRatings from 'react-star-ratings'
import SocialShare from '../components/SocialShare'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ProductPreview from '../components/ProductPreview'
import bereadcrumbIcon from '../images/breadcrumb_home.svg'
import productbanner from '../images/productbanner.svg'
import { Link } from 'react-router-dom'
import { pad } from '../lib/functions'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MBNavbar from '../components/MBNavbar'
import AddToCartButton from '../components/AddToCartButton'
import useWidth from '../hooks/useWidth'
import BestSeller from '../components/BestSeller'
import common from '../common.json'

const productDatam = [
	{
		id: 348893,
		color: 'rgb(186, 123, 131)',
		name: 'Roaring Rose',
		images: [
			{
				id: 239487,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-01-roaring-rose-15543492280403.jpg?v=1619120146',
			},
			{
				id: 29343098,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-01-roaring-rose-15543503093843.jpg?v=1619120148',
			},
			{
				id: 8094584,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-01-roaring-rose-15543065149523.jpg?v=1619120150',
			},
		],
	},
	{
		id: 93485,
		color: 'rgb(152, 45, 39)',
		name: 'Bold Berry',
		images: [
			{
				id: 9324803298,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-02-bold-berry-15543508336723.jpg?v=1619120162',
			},
			{
				id: 23489833,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-02-bold-berry-15543059546195.jpg?v=1619120165',
			},
			{
				id: 29384903,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-02-bold-berry-15543507943507.jpg?v=1619120168',
			},
		],
	},
	{
		id: 932409,
		color: 'rgb(116, 76, 128)',
		name: 'Lush Lavender',
		images: [
			{
				id: 239482039,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-03-lush-lavender-15543059611731.jpg?v=1619120181',
			},
			{
				id: 87329,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-03-lush-lavender-15543513415763.jpg?v=1619120179',
			},

			{
				id: 349839,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-03-lush-lavender-15543512498259.jpg?v=1619120183',
			},
		],
	},
	{
		id: 93985,
		color: 'rgb(177, 174, 170)',
		name: 'Very Vanilla',
		images: [
			{
				id: 230948,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-04-very-vanilla-15543516299347.jpg?v=1619120193',
			},
			{
				id: 309823098,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-04-very-vanilla-15543516495955.jpg?v=1619120197',
			},
			{
				id: 8709873,
				url: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-04-very-vanilla-15543059972179.jpg?v=1619120195',
			},
		],
	},
]

const similarProducts = [
	{
		id: 9348549,
		path: '/product', // products details apge
		item: 8, // Available item in our server.
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412',
		title: `Matte As Hell Crayon Lipstick`,
		price: 799, // prodicut price
		discount: {
			price: 500, // price after discount
			percentage: '20%',
		},
	},
	{
		id: 854095684,
		path: '/product',
		item: 6,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688',
		title: `Kohl Of Honour Intense Kajal`,
		price: 239,
	},
	{
		id: 2398439,
		path: '/product',
		item: 6,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/CCLipScrubWBG-3.jpg?v=1628610315',
		title: `Limited Edition Makeup Trio Set`,
		price: 699,
	},
	{
		id: 345804958,
		path: '/product',
		item: 9,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/1CREATIVEIMAGE01.jpg?v=1639496051',
		title: `Tipsy Lips Moisturizing Balm`,
		price: 199,
	},
]

const recentlyViewd = [
	{
		id: 97394384,
		path: '/product', // products details apge
		item: 8, // Available item in our server.
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-hand-rub-01-roaring-rose-15541873836115.jpg?v=1619125116',
		title: `Matte As Hell Crayon Lipstick`,
		price: 799, // prodicut price
		discount: {
			price: 500, // price after discount
			percentage: '20%',
		},
	},
	{
		id: 23943849,
		path: '/product',
		item: 6,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513',
		title: `Kohl Of Honour Intense Kajal`,
		price: 239,
	},
	{
		id: 82938409328,
		path: '/product',
		item: 6,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wingman-waterproof-microliner-01-i-ll-be-black-black-28163915841619.jpg?v=1619117351',
		title: `Limited Edition Makeup Trio Set`,
		price: 699,
	},
	{
		id: 4099834,
		path: '/product',
		item: 9,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-minis-set-pink-14629810667603.jpg?v=1620652894',
		title: `Tipsy Lips Moisturizing Balm`,
		price: 199,
	},
]

export default function Product() {
	const [imagePreview, setImagePreview] = useState(productDatam[0].images[0].url)
	const changeImage = e => setImagePreview(e.currentTarget.src)
	const [rating, setRating] = useState(3.5)
	const [selectedColor, setSelectedColor] = useState(productDatam[0].color)
	const handleSelectedColor = e => {
		const color = e.currentTarget.id
		const activeData = productDatam.filter((data, index) => data.color === color)[0]
		setSelectedColor(color)
		setImagePreview(activeData.images[0].url)
	}

	const seletedProduct = productDatam.filter((data, index) => data.color === selectedColor)[0]

	const width = useWidth()

	return (
		<>
			{width >= 768 ? (
				<Navbar />
			) : (
				<MBNavbar searchButton={false} title="Wingman Waterproof Microliner - 01 I'll B" />
			)}
			<div className="container pb-5 pb-md-0">
				<div className="d-flex my-2">
					<div>
						<Link to="/">
							<img src={bereadcrumbIcon} />
						</Link>
					</div>
					<div className="d-flex">
						<div className="px-2 text-muted">/</div>
						<div className="text-muted">
							<Link to="/products/rage-for-coverage-24hr-foundation">
								<span className="text-muted">Rage for coverage 24hr foundation</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="pt-3 shadow-lg bg-white row">
					<div className="container-fluid px-4">
						<div className="row ">
							<ProductPreview
								preview={imagePreview}
								product={seletedProduct}
								changeImage={changeImage}
							/>
							<div className="col-12 col-lg-5 d-flex mt-0">
								<div>
									<div className="mb-1">
										<span className="cursor-pointer" style={{ fontSize: '24px' }}>
											Rage For Coverage 24Hr Foundation
										</span>
									</div>
									<div className="d-flex mb-2">
										<div className="mt-1">
											<StarRatings
												rating={rating}
												starRatedColor="rgb(255, 215, 0)"
												name="rating"
												starDimension="22px"
												starSpacing="1px"
												changeRating={setRating}
												starSelectingHoverColor="rgb(255, 215, 0)"
											/>
										</div>
										<div className="py-2 px-2 cursor">
											<span className="text-muted px-2">4.8 (73)</span>
										</div>
										<div />
									</div>
									<div className="d-flex mb-2">
										<div>
											<span className="text-muted mx-2" style={{ fontSize: '18px' }}>
												<span>₹</span> 299.00
											</span>
										</div>
										<div className="px-2 text-muted" style={{ fontSize: '18px' }} />
									</div>
									<div
										className="py-1"
										style={{ display: 'flex', flexWrap: 'wrap', flexBasis: '100%' }}
									>
										{productDatam.map(data => (
											<div className="mx-3" key={data.id}>
												<div className="row cursor-pointer">
													<div
														className={`product-color-container ${
															data.color === selectedColor ? 'active' : ''
														}`}
														id={data.color}
														onClick={handleSelectedColor}
													>
														<div
															className="product-color-box"
															style={{
																backgroundColor: data.color,
															}}
														/>
													</div>
												</div>
											</div>
										))}
									</div>
									<div style={{ display: 'flex' }}>
										<div
											className="my-1 current-selected-product-preview"
											style={{
												backgroundColor: selectedColor,
											}}
										/>
										<div className=" mx-1" style={{ fontSize: '14px' }}>
											{pad(productDatam.indexOf(seletedProduct) + 1)}
											&nbsp;
											{seletedProduct.name}
										</div>
									</div>
									<div className="mb-3 mt-1">
										<button
											type="button"
											className="btn btn-dark btn-block p-1 collectionButton"
											style={{ width: '255px' }}
										>
											<div className="d-flex justify-content-center align-items-center">
												<MdShoppingCart fontSize={16} />
												<span>Add to Cart</span>
											</div>
										</button>
									</div>
									<div className="d-flex mb-3" style={{ cursor: 'pointer' }}>
										<div>
											<MdFavoriteBorder fontSize={16} />
										</div>
										<div className="px-1">
											<small className="text-decoration-underline font-weight-bold">
												Save to Wishlist
											</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{width >= 768 && (
						<div className="container-fluid img img-fluid px-3 mt-3 mb-3">
							<img src={productbanner} />
						</div>
					)}
					<div className="container-fluid d-flex px-4 mt-4 flex-column flex-md-row">
						<div style={{ fontSize: '14px' }}>
							<p>Check Estimated Delivery Date For your Location :</p>
						</div>
						<div className="px-md-2 mb-3 mb-md-0">
							<input
								aria-invalid="false"
								id="standard-basic"
								placeholder="Enter Pincode"
								type="tel"
								className="MuiInputBase-input slkder"
							/>
						</div>
						<div
							className="px-md-2 mb-2 mb-md-0 "
							style={{ marginTop: '-5px', fontSize: '12px' }}
						>
							<button type="button" className="btn btn-dark" style={{ fontSize: '12px' }}>
								Check Now
							</button>
						</div>
					</div>
					<div className="container-fluid px-4 d-flex mb-2 align-items-center">
						<div style={{ fontSize: '14px' }}>Share with friends :</div>
						<div style={{ clear: 'both' }}>
							<div className="at-resp-share-element at-style-responsive" role="region">
								<SocialShare />
							</div>
						</div>
					</div>
					<div className="container-fluid px-4 mt-2 col-sm-12 col-lg-12">
						<span style={{ fontSize: '14px', fontWeight: 'bold' }}>Available Offers!!</span>
						<div className="d-flex">
							<div style={{ fontSize: '14px' }}>
								– Free Smudge Me Not Mini Set on minimum purchase of Rs. 999
							</div>
						</div>
					</div>
					<div className="container-fluid mt-4" style={{ borderRadius: '0.5%' }}>
						<div>
							<div className="py-2 m-3 mb-0 pb-0 dark-anchor" style={{ fontSize: '14px' }}>
								<Tabs defaultActiveKey="description">
									<Tab eventKey="description" title="Description">
										<p>
											Looking for the perfect foundation that looks like skin and feels
											like a dream? Meet SUGAR Rage For Coverage 24HR Foundation that
											will empower you to achieve a long-lasting, flawless base every
											time.
											<br />
											<br />
											SUGAR Rage For Coverage 24HR Foundation is an ultra-performing,
											high coverage foundation whose rich, creamy texture blends into
											your skin beautifully and delivers a seamless matte finish that
											lasts up to 24 hours. Its sebum-absorbing and skin-perfecting
											formula minimizes the appearance of fine lines, wrinkles and keeps
											skin shine-free. Enriched with skin-rejuvenating Portulaca Vita
											extracts from purslane plant, it soothes, revives and brightens
											your skin. Suitable for all skin types, Rage For Coverage 24HR
											Foundation effectively controls oil and transforms your complexion
											to naturally luminous. The formula is non-irritating, oil-free and
											made using skin calming ingredients that work incredibly well to
											conceal redness, blemishes and hyperpigmentation. <br />
											<br />
											Available in 15 flattering shades to suit all Indian skin tones,
											you'll definitely find your perfect makeup match from this
											foundation range.
											<br />
											<br />
											<a href="#" target="_blank">
												<strong>- 07 Vanilla Latte | Fair, Golden Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 10 Latte | Light, Warm Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 15 Cappuccino | Light, Cool Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 17 Raf | Light, Golden Undertone</strong>
											</a>
											<br />
											<strong>
												<a href="#" target="_blank">
													- 20 Galao | Light Medium, Golden Undertone
												</a>
											</strong>
											<br />
											<a href="#" target="_blank">
												<strong>- 27 Vienna | Light Medium, Warm Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 32 Cortado | Medium, Golden Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 35 Frappe | Medium, Neutral Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>
													- 37 Freddo | Medium Beige, Golden Peach Undertone
												</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 40 Breve | Medium Beige, Warm Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 42 Glace | Medium Beige, Golden Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 47 Borgia | Medium Tan, Warm Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 48 Irish | Medium Tan, Neutral Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 52 Corretto | Tan, Yellow Undertone</strong>
											</a>
											<br />
											<a href="#" target="_blank">
												<strong>- 55 Americano | Medium Deep, Warm Undertone</strong>
											</a>
											<br />
											<br />
											<strong>Key Features:</strong>
											<br />
										</p>
										<p>
											- A full coverage, 24-hour foundation that smooths and evens out
											skin and brightens complexion
											<br />- Rich, ultra-creamy formula that blends flawlessly into the
											skin and conceals imperfections beautifully
											<br />- Featuring skin-perfecting powder technology that mattifies
											and enhances the appearance of skin
											<br />- The unique oil-controlling and sebum-absorbing formula
											diminishes the appearance of blemishes, acne scars,
											hyperpigmentation and redness to create a flawless, non-cakey
											finish
											<br />- Enriched with Portulaca Vita which is a purified
											water-soluble purslane extract that soothes irritated skin and
											calms redness
											<br />- Oil-free, paraben-free, fragrance-free; Dermatologically
											tested and approved
											<br />- 100% vegetarian and cruelty-free <br />- Available in 15
											flawless shades for all skin tones
											<br />
											<br />
											<strong>Maximum Retail Price:</strong> Rs. 799
											<br />
											<br />
											<strong>Net Weight:</strong> 25ml
											<br />
											<br />
											<strong>Company Name:</strong> {common.textdomain} LLC
											<br />
											<strong>Company Address</strong>: 8 The Green, Suite A, Dover, DE
											19901
											<br />
											<strong>Country of Origin:</strong> PRC
											<br />
											<br />
											<strong />
										</p>
									</Tab>
									<Tab eventKey="ingredients" title="Ingredients">
										Water (Aqua), Dimethicone, Cyclopentasiloxane, Microcrystalline Wax
										(Cera Microcristallina), Cetyl Peg/Ppg-10/1 Dimethicone, Polybutene,
										Disteardimonium Hectorite, Silica, Dimethicone/Vinyl Dimethicone
										Crosspolymer, Polyglyceryl-4 Isostearate, Butylene Glycol, Ethylhexyl
										Isononanoate, Glycerin, Sodium Chloride, Phenoxyethanol, Magnesium
										Sulfate, Potassium Sorbate, Sodium Dehydroacetate, Aluminum Hydroxide,
										Hexyl Laurate, Triethoxycaprylylsilane, Pentaerythrityl
										Tetra-Di-T-Butyl HydroxyhydroCinnamate
									</Tab>
									<Tab eventKey="how-to-apply" title="How to apply">
										<p>
											- Take an appropriate amount of foundation on a foundation brush
											or a beauty sponge.
											<br data-mce-fragment={1} />- Apply it evenly onto your face,
											starting in the centre and blending outwards.{' '}
											<br data-mce-fragment={1} />- Blend well to achieve the desired
											level of coverage.
											<br data-mce-fragment={1} />
											<br data-mce-fragment={1} />
											<strong>Pro beauty tip</strong>: Start your base with a{' '}
											<a href="#" target="_blank">
												<strong>pore minimizing</strong>{' '}
											</a>
											primer or a hydrating primer. After applying foundation, set the
											base with a setting powder or a{' '}
											<a href="#" target="_blank">
												<strong>translucent powder</strong>
											</a>{' '}
											for all flawlessness!
											<br data-mce-fragment={1} />
											<br data-mce-fragment={1} />
											<strong />
										</p>
									</Tab>
									<Tab eventKey="common-questions" title="Commonly asked questions">
										<strong>
											Q. I have oily skin. Will this foundation work for me?
										</strong>
										<br data-mce-fragment={1} />
										A. Absolutely. SUGAR Rage For Coverage 24HR Foundation has an oil-free
										and oil-absorbing formula that delivers a smooth, shine-free finish.
										It suits all skin types. For extremely dry skin, we suggest prepping
										skin well and using a rich{' '}
										<a href="#" target="_blank">
											<strong>moisturizer</strong>{' '}
										</a>
										to keep your skin barrier intact and hydrated which allows makeup to
										go smooth.
										<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />
										<strong>
											Q. Does this foundation work for skin with acne and redness?
										</strong>
										<br data-mce-fragment={1} />
										A. This long-wear foundation is enriched with the skin-soothing active
										Portulaca Vita from purslane extract that aids in relieving irritated
										skin and reducing inflammation. You can use it to conceal and minimize
										redness, acne scars and the gentle, non-irritating foundation formula
										works well for rosacea too!
										<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />
										<strong>
											Q. I have really dry skin and normally when I apply a
											high-coverage foundation, it tends to get cakey?
										</strong>
										<br data-mce-fragment={1} />
										A. We'd recommend you to prep your skin well so that your base makeup
										looks fresh all day long. Start with moisturizing skin and follow it
										up with a hydrating face primer as it will give dry or flakey skin a
										boost of hydration and improve skin texture.{' '}
										<a href="#" target="_blank">
											<strong>SUGAR Aquaholic Hydrating Primer</strong>
										</a>{' '}
										works perfect to give your skin a smooth and mattified look. Follow it
										up with foundation application using a foundation brush preferably or
										a damn beauty sponge. For a natural finish, you can also use your
										fingers. Set the base makeup with a lightweight{' '}
										<a href="#" target="_blank">
											<strong>translucent powder</strong>
										</a>{' '}
										and seal your final look using a{' '}
										<a href="#" target="_blank">
											<strong>dewy setting mist</strong>
										</a>
										.<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />
										<strong>Q. How do I know which shade is best for me?</strong>
										<br data-mce-fragment={1} />
										A. All the 15 shades of our new SUGAR Rage For Coverage 24HR
										Foundation match with shades from our bestselling{' '}
										<a href="#" target="_blank">
											<strong>SUGAR Ace Of Face Foundation Stick</strong>
										</a>
										. You can use the SUGAR{' '}
										<a href="#" target="_blank">
											<strong>foundation guide</strong>
										</a>{' '}
										too!
										<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />
										Find out more about how to figure out your undertone and best
										foundation match{' '}
										<a href="#" target="_blank">
											<strong>here</strong>
										</a>
										.<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />
										<strong>Q. Will this foundation oxidize on my skin?</strong>
										<br data-mce-fragment={1} />
										A. SUGAR Rage For Coverage 24HR Foundation has potent actives from the
										skin-soothing purslane extracts that help reduce oxidative stress,
										preventing the foundation to oxidize.
										<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />
										Oxidation happens when the chemicals react to the natural oils of your
										face and our skin pH balance and it counteracts with the ingredients
										of our foundation. Few ways you can stop your foundation from
										oxidizing:
										<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />- Use a skin-perfecting, silicone based{' '}
										<a href="#" target="_blank">
											<strong>face primer</strong>
										</a>{' '}
										that creates a barrier between the oils produced by your skin and the
										foundation. <br data-mce-fragment={1} />- Cleanse, tone, moisturize
										and prep your skin well before any base makeup application.
										<br data-mce-fragment={1} />- For oily skin people, you can use
										blotting sheets/tissue papers to press away extra moisture and shine.
										<br data-mce-fragment={1} />- Set your base makeup using a lighter
										compact or setting powder shade.
										<br data-mce-fragment={1} />
										<br data-mce-fragment={1} />
										Follow our tips for flawless{' '}
										<a href="#" target="_blank">
											<strong>makeup tips</strong>
										</a>{' '}
										for more help!
										<br data-mce-fragment={1} />
									</Tab>
									<Tab eventKey="review" title="Reviews">
										{[...Array(10)].map(item => (
											<div className="d-flex mt-4" key={Math.random()}>
												<div className="review-null-profile-picture">Vs</div>
												<div>
													<div className="px-2">Vishakha singh</div>
													<div>
														<div className="d-flex mb-2 align-items-center">
															<StarRatings
																rating={5}
																starRatedColor="rgb(255, 215, 0)"
																name="rating"
																starDimension="20px"
																starSpacing="0px"
																starSelectingHoverColor="rgb(255, 215, 0)"
															/>
															<div className="px-2">
																<span className="text-muted px-2">
																	on 10-11-2021
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										))}
									</Tab>
								</Tabs>
							</div>
						</div>
					</div>
					<div className="pb-4">
						<hr className="mx-3" style={{ background: 'rgb(196, 196, 196)', height: '3px' }} />

						<div className="d-flex justify-content-center my-3 similar-product-title">
							SIMILAR PRODUCTS
						</div>

						<BestSeller datam={similarProducts} title="Similar Produtcs" />

						<hr
							className="mx-3 mt-md-5"
							style={{ background: 'rgb(196, 196, 196)', height: '3px' }}
						/>

						<div className="d-flex justify-content-center my-3 similar-product-title">
							SHOP FROM RECENTLY VIEWED
							<MdLocalMall />
						</div>

						<BestSeller datam={recentlyViewd} title="Similar Produtcs" />
					</div>
				</div>
			</div>
			{width >= 768 ? <Footer /> : <AddToCartButton />}
		</>
	)
}
