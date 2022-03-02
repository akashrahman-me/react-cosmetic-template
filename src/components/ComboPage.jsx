import useWidth from '../hooks/useWidth'

export default function CompoPage({ mobile, desktop }) {
	const width = useWidth()

	if (width >= 768) {
		return desktop
	} else {
		return mobile
	}
}
