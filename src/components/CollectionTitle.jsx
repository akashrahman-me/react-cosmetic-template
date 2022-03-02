import Filters from './Filters'
import Sorts from './Sorts'
import useWidth from '../hooks/useWidth'

export default function CollectionTitle({ render, renderInfo }) {
	const width = useWidth()

	return (
		<div className="container-fluid">
			<div
				className={`d-flex justify-content-between collectionTitle ${
					width >= 768 ? 'px-3 pb-2 mt-4' : 'mt-2'
				}`}
			>
				{render !== undefined && render()}
				{width >= 768 && (
					<div className="d-flex justify-content-between">
						<Filters />
						<Sorts />
					</div>
				)}
			</div>
			{renderInfo !== undefined && renderInfo()}
		</div>
	)
}
