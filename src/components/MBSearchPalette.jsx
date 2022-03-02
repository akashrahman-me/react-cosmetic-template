import { MdTrendingUp, MdWhatshot } from 'react-icons/md'
import { Link } from 'react-router-dom'
import withSearchPalette from '../HOCs/withSearchPalette'

function MBSearchPalette({ topSearch, hotPicks }) {
	return (
		<div className="pt-1 px-2 search-palette">
			<div>
				<div>
					<div className="d-flex">
						<div className="SearchNavbar_searchTags py-2 px-1">
							<MdWhatshot fontSize={16} />
						</div>
						<div className="SearchNavbar_searchTags px-2 py-2">Hot Picks</div>
					</div>
					<div className="d-flex">
						{hotPicks.map(hotPick => (
							<div className="px-2" key={hotPick.id}>
								<Link to={hotPick.path}>
									<div style={{ height: '3.5rem' }}>
										<img
											src={hotPick.image}
											height="100%"
											style={{ borderRadius: '5px' }}
										/>
									</div>
								</Link>
								<div
									className="pt-1 d-inline-block text-truncate"
									style={{ fontSize: '0.6rem', textAlign: 'center', maxWidth: '50px' }}
								>
									{hotPick.name}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<div className="d-flex">
						<div className="SearchNavbar_searchTags py-2 px-1">
							<MdTrendingUp fontSize={16} />
						</div>
						<div className="SearchNavbar_searchTags px-2 py-2">Frequently Searched</div>
					</div>
					<div className="d-flex flex-wrap">
						{topSearch.map(data => (
							<div className="px-2 mb-2" key={data.id}>
								<Link to={data.path}>
									<div
										className="rounded-pill px-2"
										style={{
											fontSize: '0.6rem',
											textAlign: 'center',
											background: 'white',
											padding: '0.3rem 0.4rem',
										}}
									>
										{data.value}
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default withSearchPalette(MBSearchPalette)
