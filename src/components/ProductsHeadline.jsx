import useWidth from '../hooks/useWidth'

export default function ProductsHeadline({ name, items }) {
	const width = useWidth()

	return (
		<div className={`${width >= 768 ? 'px-3' : ''} text-center`}>
			<div className={`d-flex ${width >= 768 ? 'px-3' : ''} totalCountCss`}>
				<h1>{name}</h1>
				<p className="px-2 text-muted">-</p>
				<p className={`text-muted ${width <= 768 ? 'mb-0' : ''}`}>{items} items</p>
			</div>
		</div>
	)
}
