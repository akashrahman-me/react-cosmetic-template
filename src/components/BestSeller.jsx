import { useState } from 'react'
import lessThan from '../images/less-than.png'
import greaterThan from '../images/greater-than.png'
import BestSellerCard from './BestSellerCard'
import useWidth from '../hooks/useWidth'

/* Example of props.datam = [
	{
		path: '/products/aquaholic-overnight-water-mask', // products details apge
		image: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688',
		title: `Charcoal Patrol Face Mask`,
		price: 1697, // prodicut pricediscount:
		discount: {
			price: 1199,
			percentage: '29%',
		},
	},
	...
]
*/

export default function BestSeller({ datam, headline }) {
	const [nextprev, setNextprev] = useState(false)
	const handleItem = direction => {
		console.log(direction)
		// ON Click then hit the api server for change item
	}

	const width = useWidth()

	return (
		<div className={headline !== undefined ? 'container-fluid' : ''}>
			{headline !== undefined && <h3 className="my-4">{headline}</h3>}
			<div
				className={`container-fluid row ${width <= 768 ? 'p-0 m-0' : ''}`}
				onMouseEnter={() => setNextprev(true)}
				onMouseLeave={() => setNextprev(false)}
			>
				{width >= 768 && (
					<div
						className="col-1 pt-5 cursor-pointer"
						style={{ marginTop: '5rem' }}
						onClick={() => handleItem('previous')}
					>
						{nextprev && <img src={lessThan} className="d-block img-fluid" />}
					</div>
				)}
				<div className={`col-12 col-md-10 ${width <= 768 ? 'p-0' : ''} `}>
					<div className="row flex-nowrap flex-md-wrap overflow-hidden pb-2">
						{datam.map(data => (
							<BestSellerCard data={data} key={data.id} />
						))}
						{/* End */}
					</div>
				</div>
				{width >= 768 && (
					<div
						className="col-1 pt-5 cursor-pointer"
						style={{ marginTop: '5rem' }}
						onClick={() => handleItem('next')}
					>
						{nextprev && <img src={greaterThan} className="d-block img-fluid" />}
					</div>
				)}
			</div>
		</div>
	)
}
