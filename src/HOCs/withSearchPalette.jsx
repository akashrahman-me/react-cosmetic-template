const topSearch = [
	{ id: 23323, value: 'New in store', path: '/product' },
	{ id: 34657, value: '24-hr foundation', path: '/product' },
	{ id: 34335, value: 'Clearance Sales', path: '/product' },
	{ id: 3432, value: 'Lipsticks ', path: '/product' },
	{ id: 53409, value: 'Wallets', path: '/product' },
]

const hotPicks = [
	{
		id: 8032498,
		path: '/products',
		image: 'https://media.sugarcosmetics.com/upload/These-super-easy-hacks-will-fix-your-dried-mascara-cover.jpg',
		name: 'Mascara',
	},
	{
		id: 9853409,
		path: '/products',
		image: 'https://media.sugarcosmetics.com/upload/Brow.jpg',
		name: 'Brow',
	},
	{
		id: 2345800,
		path: '/products',
		image: 'https://media.sugarcosmetics.com/upload/EBO-128x165-sheet-mask...jpg',
		name: 'Face Mask',
	},
	{
		id: 6980944,
		path: '/products',
		image: 'https://media.sugarcosmetics.com/upload/Gifting.jpg',
		name: 'Gifting',
	},
	{
		id: 1288493,
		path: '/products',
		image: 'https://media.sugarcosmetics.com/upload/CDF.jpg',
		name: 'Bronzer',
	},
]

export default function withSearchPalette(OriginalCompnent) {
	return function NewComponent() {
		return <OriginalCompnent topSearch={topSearch} hotPicks={hotPicks} />
	}
}
