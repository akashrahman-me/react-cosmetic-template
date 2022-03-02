import BestSeller from '../components/BestSeller'
import Sliders from '../components/Sliders'
import HotDeals from '../components/HotDeals'
import QuizSection from '../components/QuizSection'
import BeautyTips from '../components/BeautyTips'
import BeautyBlog from '../components/BeautyBlog'
import Explore from '../components/Explore'
import SectionFooter from '../components/SectionFooter'
import MBStories from '../components/MBStories'
import MBBestSeller from '../components/MBBestSeller'
import VideoStreaming from '../components/VideoStreaming'
import MBNavbar from '../components/MBNavbar'
import MBFooter from '../components/MBFooter'
import useWidth from '../hooks/useWidth'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopPicks from '../components/TopPicks'

const bestSeller = [
	{
		id: 803948,
		path: '/product', // products details apge
		item: 8, // Available item in our server.
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955',
		title: `Matte As Hell Crayon Lipstick`,
		price: 799, // prodicut price
		discount: {
			price: 500, // price after discount
			percentage: '20%',
		},
	},
	{
		id: 9328498,
		path: '/product',
		item: 6,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513',
		title: `Kohl Of Honour Intense Kajal`,
		price: 239,
	},
	{
		id: 273897423,
		path: '/product',
		item: 6,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-limited-edition-makeup-trio-set-28160775323731.jpg?v=1619156262',
		title: `Limited Edition Makeup Trio Set`,
		price: 699,
	},
	{
		id: 65654654,
		path: '/product',
		item: 9,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412',
		title: `Tipsy Lips Moisturizing Balm`,
		price: 199,
	},
]
const superSavers = [
	{
		id: 3403984,
		path: '/product', // products details apge
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/Mask_2.jpg?v=1626968296',
		title: `Aquaholic Overnight Water Mask`,
		price: 1099, // prodicut price
	},
	{
		id: 9324809,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-drop-the-base-serum-foundation-50-mocha-medium-tan-golden-undertone-10965234090067.jpg?v=1619107955',
		title: `Drop The Base Serum Foundation - 50 Mocha…`,
		price: 899,
		discount: {
			price: 450,
			percentage: '49%',
		},
	},
	{
		id: 9238480394,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lipping-on-the-edge-lip-liner-06-tangerine-queen-12771446816851.jpg?v=1619108963',
		title: `Lipping On The Edge Lip Liner - 06 Tangerine Queen`,
		price: 499,
		discount: {
			price: 499,
			percentage: '40%',
		},
	},
	{
		id: 82347930,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-36-pink-clink-metallic-rose-gold-15384273190995.jpg?v=1619103960',
		title: `Smudge Me Not Liquid Lipstick - 36 Pink Clink… `,
		price: 549,
		discount: {
			price: 329,
			percentage: '40%',
		},
	},
]
const giftSets = [
	{
		id: 98234093,
		path: '/product', // products details apge
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-microliner-kohl-value-set-14821478924371.jpg?v=1620392974',
		title: `Microliner + Kohl Value Set`,
		price: 998, // prodicut pricediscount:
		discount: {
			price: 599,
			percentage: '39%',
		},
	},
	{
		id: 230984094,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-limited-edition-makeup-trio-set-28160775323731.jpg?v=1619156262',
		title: `Limited Edition Makeup Trio Set`,
		price: 899,
		discount: {
			price: 699,
			percentage: '22%',
		},
	},
	{
		id: 238947983,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/Anniversaryspecialkit-WBGimagesmain.jpg?v=1639150912',
		title: `Anniversary Kit`,
		price: 3043,
		discount: {
			price: 1999,
			percentage: '34%',
		},
	},
	{
		id: 23984908,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mini-liquid-lipstick-set-fighter-27950526169171.jpg?v=1620651933',
		title: `Mini Liquid Lipstick Set - Fighter`,
		price: 999,
		discount: {
			price: 799,
			percentage: '20%',
		},
	},
]
const justIn = [
	{
		id: 23840983,
		path: '/product', // products details apge
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-3_1fbb46b6-9bf9-4613-8cf1-c62d974719be.jpg?v=1642136172',
		title: `Eye Love Drama Trio Set`,
		price: 1697, // prodicut pricediscount:
		discount: {
			price: 1199,
			percentage: '29%',
		},
	},
	{
		id: 3209840938,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012',
		title: `Red Carpet Makeup Trio`,
		price: 1047,
		discount: {
			price: 799,
			percentage: '23%',
		},
	},
	{
		id: 3289849838,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-1.jpg?v=1642089034',
		title: `Beginners Makeup Combo`,
		price: 1198,
		discount: {
			price: 999,
			percentage: '16%',
		},
	},
	{
		id: 83498398,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/combo-image.jpg?v=1636991116',
		title: `4-in-1 Makeup Set`,
		price: 1146,
		discount: {
			price: 899,
			percentage: '21%',
		},
	},
]
const skinCareBasics = [
	{
		id: 293849038,
		path: '/product', // products details apge
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688',
		title: `Charcoal Patrol Face Mask`,
		price: 99, // prodicut pricediscount:
	},
	{
		id: 923840983,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-priming-moisturizer-13548826886227.jpg?v=1619115290',
		title: `Aquaholic Priming Moisturizer`,
		price: 499,
	},
	{
		id: 230984938,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847',
		title: `Bling Leader Illuminating Moisturizer`,
		price: 499,
	},
	{
		id: 2384983,
		path: '/product',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723',
		title: `Citrus Got Real SPF30 Sunscreen`,
		price: 399,
	},
]

const topPicks = [
	{
		id: 3232,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/d9379762-e0e0-47a3-b0ff-b20c6e7eb308.jpg',
	},
	{
		id: 3436,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/cfa138d1-924f-49cd-b03f-996f3eb15cc8.jpg',
	},
	{
		id: 3490,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/941a3593-f249-4978-b3e9-10599dac73a3.jpg',
	},
]
const thisOrThat = [
	{
		id: 920483,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/65030637-f7dc-4303-bbe2-ec7d24dea23b.jpg',
	},
	{
		id: 95680398,
		path: '/product',
		image: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/b152d1d4-77f3-4947-9b07-b894b5889ec5.jpg',
	},
]

export default function Home() {
	const width = useWidth()

	return width <= 768 ? (
		<>
			<MBNavbar searchIcon={false} />
			<main style={{ paddingBottom: '4em' }}>
				<MBStories />
				<Sliders mobile />
				<MBBestSeller
					datam={bestSeller}
					headline="BESTSELLERS"
					descrive="Grab our bestselling products!"
				/>
				<div className="container-fluid">
					<HotDeals />
					<VideoStreaming />
					<QuizSection />
					<BeautyTips />
					<MBBestSeller
						datam={superSavers}
						headline="SUPER SAVERS"
						descrive="Grab these products for up to 50% off, till stocks last!"
					/>
					<TopPicks datam={topPicks} headline="TOP PICKS OF THE WEEK" />
					<MBBestSeller datam={giftSets} headline="GIFT SETS" />
					<TopPicks datam={thisOrThat} headline="THIS OR THAT" />
					<MBBestSeller datam={justIn} headline="JUST-IN" />
					<BeautyBlog />
					<MBBestSeller datam={skinCareBasics} headline="SKINCARE BASICS" />
					<Explore />
				</div>
				<SectionFooter />
			</main>
			<MBFooter />
		</>
	) : (
		<>
			<Navbar />
			<div className="text-center titleFontHeading">
				<Sliders />
				<BestSeller datam={bestSeller} headline="BESTSELLERS" />
				<HotDeals />
				<VideoStreaming />
				<QuizSection />
				<BeautyTips />
				<BestSeller datam={superSavers} headline="SUPER SAVERS" />
				<TopPicks datam={topPicks} headline="TOP PICKS OF THE WEEK" />
				<BestSeller datam={giftSets} headline="GIFT SETS" />
				<TopPicks datam={thisOrThat} headline="THIS OR THAT" />
				<BestSeller datam={justIn} headline="JUST-IN" />
				<BeautyBlog />
				<BestSeller datam={skinCareBasics} headline="SKINCARE BASICS" />
				<Explore />
			</div>
			<SectionFooter />
			<Footer />
		</>
	)
}
