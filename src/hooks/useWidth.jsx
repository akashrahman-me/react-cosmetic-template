import { useEffect, useState } from 'react'

export default function useWidth() {
	const [width, setWidth] = useState(0)
	useEffect(() => {
		setWidth(document.body.clientWidth)
		window.addEventListener('resize', function () {
			setWidth(document.body.clientWidth)
		})
	})

	return width
}
