import LoadingSpinner from '../components/LoadingSpinner'
import MBFilters from '../components/MBFilters'
import MiniProduct from '../components/MiniProduct'
import Banner from '../components/Banner'
import withMobileFooter from '../HOCs/withMobileFooter'
import CollectionTitle from '../components/CollectionTitle'
import Bereadcrumb from '../components/Bereadcrumb'
import ProductsHeadline from '../components/ProductsHeadline'
import MBFilterFooter from '../components/MBFilterFooter'
import SearchNavbar from '../components/SearchNavbar'
import { useState } from 'react'
import MBSearchPalette from '../components/MBSearchPalette'

function MBSearch({ mobileFooter }) {
	const { filterVisible, handleFilterVisible, sortVisible, handleSortVisible } = mobileFooter

	const [search, setSearch] = useState('')
	const changeSearch = e => {
		typeof e === 'string' ? setSearch(e) : setSearch(e.currentTarget.value)
	}

	return (
		<div className="globalBackground" style={{ scrollBehavior: 'smooth' }}>
			<SearchNavbar changeSearch={changeSearch} search={search} />

			<main style={{ paddingBottom: '4em' }}>
				{search === '' ? (
					<MBSearchPalette />
				) : (
					<div>
						<div style={{ overflowX: 'hidden', lineHeight: 0 }} className="mx-1">
							<div className="d-flex flex-wrap p-0">
								{[...Array(12)].map(product => (
									<MiniProduct key={Math.random()} />
								))}
							</div>
						</div>
						<LoadingSpinner />
						<MBFilterFooter data={mobileFooter} />
					</div>
				)}

				{false && (
					<>
						<MBFilters data={mobileFooter} />
						{!filterVisible && (
							<div>
								<Banner />
								<CollectionTitle
									render={() => (
										<Bereadcrumb
											pages={[{ name: 'Meckup', path: '/product' }]}
											fontWeight="600"
										/>
									)}
									renderInfo={() => <ProductsHeadline name="Mekup" items={44} />}
								/>
								<div style={{ overflowX: 'hidden', lineHeight: 0 }} className="mx-1">
									<div className="d-flex flex-wrap p-0">
										{[...Array(12)].map(product => (
											<MiniProduct key={Math.random()} />
										))}
									</div>
								</div>
								<LoadingSpinner />
								<MBFilterFooter
									sortVisible={sortVisible}
									handleSort={handleSortVisible}
									handleFilter={handleFilterVisible}
								/>
							</div>
						)}
					</>
				)}
			</main>
		</div>
	)
}

export default withMobileFooter(MBSearch)
