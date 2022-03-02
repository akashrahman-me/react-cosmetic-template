import { Link } from 'react-router-dom'
import { MdTrendingUp, MdWhatshot } from 'react-icons/md'
import React from 'react'
import withSearchPalette from '../HOCs/withSearchPalette'

function SearchPalette({ topSearch, hotPicks }) {
	return (
		<div className="navbarDropdownContent col-5 search-palette">
			<div className="px-2 pt-5">
				<div>
					<div className="d-flex">
						<div className="searchTags py-2 px-1">
							<MdTrendingUp fontSize={15} />
						</div>
						<div className="searchTags py-2">Frequently Searched</div>
					</div>
					<div className="d-flex flex-wrap">
						{topSearch.map(data => (
							<div className="px-1 mb-2" key={data.id}>
								<Link to={data.path}>
									<div className="rounded-pill px-1 search-palette-value">{data.value}</div>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div>
					<div className="d-flex">
						<div className="searchTags py-2 px-1">
							<MdWhatshot fontSize={15} />
						</div>
						<div className="searchTags py-2">Hot Picks</div>
					</div>
					<div className="d-flex flex-wrap pb-2">
						{hotPicks.map(hotPick => (
							<div className="px-2" key={hotPick.id}>
								<Link to={hotPick.path}>
									<div
										style={{
											height: '4rem',
											background: 'white',
										}}
									>
										<img src={hotPick.image} height="100%" className="px-1 py-1" />
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

export default React.memo(withSearchPalette(SearchPalette))
