import './styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/products'
import MBProducts from './pages/MBProducts'
import Terms from './pages/Terms'
import Returns from './pages/Returns'
import FAQs from './pages/FAQs'
import AboutUs from './pages/AboutUs'
import Page404 from './pages/Page404'
import Offers from './pages/Offers'
import OffersVendor from './pages/OffersVendor'
import MBOffersVendor from './pages/MBOffersVendor'
import ComboPage from './components/ComboPage'
import Categories from './pages/Categories'
import MBCart from './pages/MBCart'
import Cart from './pages/Cart'
import Search from './pages/Search'
import MBSearch from './pages/MBSearch'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useRestoredScroll from './hooks/useRestoredScroll'

export default function App() {
	const RestoredScrollbar = useRestoredScroll

	return (
		<BrowserRouter>
			<RestoredScrollbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/products"
					element={<ComboPage mobile={<MBProducts />} desktop={<Products />} />}
				/>
				<Route path="/product" element={<Product />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/cart" element={<ComboPage mobile={<MBCart />} desktop={<Cart />} />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/returns" element={<Returns />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/search" element={<ComboPage mobile={<MBSearch />} desktop={<Search />} />} />
				<Route path="/faqs" element={<FAQs />} />
				<Route
					path="/offers-vendor"
					element={<ComboPage mobile={<MBOffersVendor />} desktop={<OffersVendor />} />}
				/>
				<Route path="/offers" element={<Offers />} />
				<Route path="*" element={<ComboPage mobile={<Page404 mobile />} desktop={<Page404 />} />} />
			</Routes>
		</BrowserRouter>
	)
}

// reactjs/nextjs developer: akashrahman.me@gmail.com
