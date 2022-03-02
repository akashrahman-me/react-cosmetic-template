import MBSort from './MBSort'
import MBFilterSortButton from './MBFilterSortButton'
import MBFilters from './MBFilters'

export default function MBFilterFooter({ data }) {
	const { filterVisible, handleFilterVisible, sortVisible, handleSortVisible } = data

	const visible = filterVisible !== true && sortVisible !== true

	return (
		<div className="fixed-bottom py-1 bg-white border-top border-bottom">
			<div className="text-align-center text-white pt-1">
				<div className={`d-flex flex-wrap ${!visible ? 'flex-column' : ''}`}>
					{filterVisible && <MBFilters data={data} />}
					{sortVisible && <MBSort handleSort={handleSortVisible} />}
					{visible && (
						<MBFilterSortButton
							handleFilter={handleFilterVisible}
							handleSort={handleSortVisible}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
