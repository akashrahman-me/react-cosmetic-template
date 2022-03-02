import image from '../images/image1x1.jpg'
import image1 from '../images/image1x1-1.jpg'
import Offerblog from '../components/OfferBlog'
import { useState } from 'react'
import Footer from '../components/Footer'
import MBFooter from '../components/MBFooter'
import useWidth from '../hooks/useWidth'
import BackNavbar from '../components/BackNavbar'
import Navbar from '../components/Navbar'

const offersData = [
	{
		id: 39493843,
		path: '/offers-vendor',
		image: image1,
		code: 'GJMSO',
	},
	{
		id: 9348739,
		path: '/offers-vendor',
		image: image,
		code: 'GSLER',
	},
	{
		id: 923847832987,
		path: '/offers-vendor',
		image: image1,
		code: 'LSKDJ',
	},
	{
		id: 23890473098,
		path: '/offers-vendor',
		image: image,
		code: 'GRFHF',
	},
	{
		id: 39840239,
		path: '/offers-vendor',
		image: image1,
		code: 'RWERD',
	},
	{
		id: 32084039,
		path: '/offers-vendor',
		image: image,
		code: 'ASDE',
	},
]

export default function Offers() {
	const [copy, setCopy] = useState('')
	const width = useWidth()

	return (
		<>
			{width >= 768 ? <Navbar /> : <BackNavbar backurl="/" title="Offers" />}

			<div className="container-fluid">
				<div
					className={
						width >= 768
							? `fs-2 d-flex justify-content-center pt-1 mb-3`
							: `forYouOffers text-center py-2 rounded-3 mt-1`
					}
				>
					General Offers
				</div>
			</div>

			<div className="pb-5 pb-md-0">
				<div className="row pt-2 container-fluid bg-white pe-0 pb-3 pb-md-0">
					{offersData.map(offer => (
						<div className="col-md-6 col-lg-4 my-2" key={offer.id}>
							<Offerblog offer={offer} copy={copy} setCopy={setCopy} />
						</div>
					))}
				</div>
			</div>

			{width >= 768 ? <Footer /> : <MBFooter />}
		</>
	)
}
