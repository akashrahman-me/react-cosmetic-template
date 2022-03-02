import useWidth from '../hooks/useWidth'

export default function Banner() {
	const width = useWidth()

	return (
		<div>
			<img
				src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/436dd036-c99a-4ea9-8b8f-18656d792cf0.jpg"
				alt="Banner"
				width="100%"
				className="d-none d-md-block banner-image-blur"
			/>
			<img
				src={
					width >= 768
						? 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/436dd036-c99a-4ea9-8b8f-18656d792cf0.jpg'
						: 'https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/4d1ae332-a33f-451e-a495-d9966d69ee4d.jpg'
				}
				alt="Banner"
				className={`${width >= 768 ? 'container' : 'mb-3'} mx-auto d-block position-relative`}
				style={{ zIndex: 1, ...(width >= 768 ? { marginTop: -246 } : {}) }}
				height={width >= 768 ? 270 : 'auto'}
				width="100%"
			/>
		</div>
	)
}
