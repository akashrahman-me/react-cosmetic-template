import CollectionTitle from '../components/CollectionTitle'
import LoadingSpinner from '../components/LoadingSpinner'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bereadcrumb from '../components/Bereadcrumb'
import ProductsHeadline from '../components/ProductsHeadline'

export default function Products() {
	return (
		<>
			<Navbar />
			<div className="px-3">
				<CollectionTitle
					render={() => (
						<Bereadcrumb pages={[{ name: 'Meckup', path: '/product' }]} fontWeight="600" />
					)}
					renderInfo={() => <ProductsHeadline name="Mekup" items={44} />}
				/>
				<div className="container ">
					<div className="d-flex flex-wrap">
						{[...Array(20)].map(product => (
							<Product key={Math.random()} />
						))}
					</div>
				</div>
				<LoadingSpinner />
			</div>
			<Footer />
		</>
	)
}
