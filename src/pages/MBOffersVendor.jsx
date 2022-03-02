import LoadingSpinner from '../components/LoadingSpinner'
import MBFilters from '../components/MBFilters'
import MiniProduct from '../components/MiniProduct'
import Banner from '../components/Banner'
import withMobileFooter from '../HOCs/withMobileFooter'
import CollectionTitle from '../components/CollectionTitle'
import Bereadcrumb from '../components/Bereadcrumb'
import ProductsHeadline from '../components/ProductsHeadline'
import MBFilterFooter from '../components/MBFilterFooter'
import MBNavbar from '../components/MBNavbar'

function MBOffersVendor({ mobileFooter }) {
	const { filterVisible } = mobileFooter

	return filterVisible ? (
		<MBFilters data={mobileFooter} />
	) : (
		<div>
			<MBNavbar searchButton={false} title="Meckup" />
			<Banner />
			<CollectionTitle
				render={() => <Bereadcrumb pages={[{ name: 'Meckup', path: '/product' }]} fontWeight="600" />}
				renderInfo={() => <ProductsHeadline name="Mekup" items={44} />}
			/>
			<div style={{ overflowX: 'hidden', lineHeight: '0px' }} className="mx-1">
				<div className="d-flex flex-wrap p-0">
					{[...Array(12)].map(product => (
						<MiniProduct key={Math.random()} />
					))}
				</div>
			</div>
			<LoadingSpinner />
			<MBFilterFooter data={mobileFooter} />
		</div>
	)
}

export default withMobileFooter(MBOffersVendor)
