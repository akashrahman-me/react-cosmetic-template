import ReactImageZoom from 'react-image-zoom'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import useWidth from '../hooks/useWidth'

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 768 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
	},
}

export default function ProductPreview({ preview, product, changeImage }) {
	const width = useWidth()

	return (
		<>
			{width <= 768 && (
				<div className="position-relative pb-4 mb-3">
					<Carousel
						responsive={responsive}
						infinite={true}
						autoPlay={true}
						renderDotsOutside={true}
						showDots={true}
					>
						{product.images.map(image => (
							<div className="px-5 text-center" key={image.id}>
								<img height="300px" src={image.url} alt="" />
							</div>
						))}
					</Carousel>
				</div>
			)}

			{width >= 768 && (
				<div className="col-9 col-lg-4 d-flex">
					<div style={{ zIndex: 2 }}>
						<ReactImageZoom width={290} height={400} zoomWidth={400} img={preview} />
					</div>
				</div>
			)}

			<div className="col-3 col-lg-3 product2DesktopSwatchWrapper d-none d-md-block">
				<div className="position-relative">
					<div className="position-absolute bg-dark text-center text-white sdlkje">
						<MdKeyboardArrowUp fontSize={30} />
					</div>
					<div className="position-absolute bg-dark text-center text-white sdlfkjel">
						<MdKeyboardArrowDown fontSize={30} />
					</div>
					{product.images.map((image, index) => (
						<div
							className="d-flex justify-content-center cursor"
							key={image.id}
							style={index === 0 ? { paddingTop: 36 } : {}}
						>
							<img
								className="my-2 prodProductDiv"
								style={{ height: '115px' }}
								src={image.url}
								onMouseEnter={changeImage}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
