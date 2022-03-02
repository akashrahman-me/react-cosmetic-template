import { useState } from 'react'

let preDefinedDatam = [
	{
		id: 34234,
		path: '/product',
		title: 'Contour De Force Face Palette',
		subtitle: '01 Subtle Summit',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/1_55b85084-94b7-41bf-85df-2b853ee9ba9f.jpg?v=1639582633',
		price: '799.0',
		item: 2,
	},
	{
		id: 5454,
		path: '/product',
		title: 'Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic (Black With Silver Glitter) - DP',
		subtitle: '',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/1_9814781c-2d1a-4019-ba96-94b9df6f2345.jpg?v=1639585030',
		price: '100.0',
		discount: '499',
		item: 1,
	},
	{
		id: 2543,
		path: '/product',
		title: 'Rage For Coverage 24Hr Foundation',
		subtitle: '55 Americano (Medium Deep, Warm Undertone)',
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-rage-for-coverage-24hr-foundation-55-americano-medium-deep-warm-undertone-28391257473107.jpg?v=1623073582',
		price: '799.0',
		item: 4,
	},
	{
		id: 434565,
		path: '/product',
		title: `Matte as Hell Crayon Mini Lipstick - 01 Scarlett O'Hara`,
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-minis-lipstick-01-scarlett-o-hara-28219914354771_39239823-2ed8-4b8d-b0db-48c857ae0e3f.jpg?v=1642070562',
		price: '199.0',
		discount: '599.00',
		item: 1,
	},
]

export default function withCart(OriginalCompnent) {
	return function NewComponent() {
		const [datam, setDatam] = useState(preDefinedDatam)
		const handleRemoveItem = e => {
			const id = e.currentTarget.id
			const removedItem = datam.filter(data => data.id == id)[0]
			const demoDatam = datam.map(element => element)
			demoDatam.map((data, index) => {
				if (
					JSON.stringify(data) === JSON.stringify(removedItem) &&
					window.confirm('Are you sure to remove it?')
				) {
					demoDatam.splice(index, 1)
					setDatam(demoDatam)
				}
			})
		}

		return <OriginalCompnent datam={datam} handleRemoveItem={handleRemoveItem} />
	}
}
