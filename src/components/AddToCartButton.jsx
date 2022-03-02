import addtowishlistIcon from '../images/addtowishlist.svg'
import { useState } from 'react'

export default function AddToCartButton() {
	const [added, setAdded] = useState(false)
	const handleAdded = () => {
		setAdded(v => !v)
		setTimeout(setAdded, 3000, false)
	}

	return (
		<div className="mb-2 fixed-bottom text-center">
			<div className="d-inline-flex justify-content-center mb-2 cursor-pointer" onClick={handleAdded}>
				<div className="productWishlistIcon">
					<img
						rel="preload"
						src={addtowishlistIcon}
						alt="wishlistImg"
						style={{ height: '30px', width: '30px' }}
					/>
				</div>
				<div className="productAddToCart">ADD TO CART</div>
			</div>
			{added && (
				<div
					className="d-flex justify-content-between py-3 px-2 text-start"
					style={{ backgroundColor: '#0A0000', color: 'white' }}
				>
					<div className="flex-grow-1">Items added to Cart</div>
					<div style={{ color: '#FC2779' }}>
						<div style={{ color: '#FC2779' }}>VIEW CART</div>
					</div>
				</div>
			)}
		</div>
	)
}
