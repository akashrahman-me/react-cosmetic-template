import CollectionTitle from '../components/CollectionTitle'
import LoadingSpinner from '../components/LoadingSpinner'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
	return (
		<>
			<Navbar />
			<div className="px-3">
				<CollectionTitle
					render={() => (
						<div>
							Search Results for <span className="text-decoration-underline">Lip</span>
						</div>
					)}
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
