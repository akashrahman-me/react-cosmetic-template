import { useState } from 'react'

const filters = {
	categories: ['Product Type', 'Concern'],
	options: [
		[
			'Face Mask',
			'Sheet Mask',
			'Moisturizer',
			'Hydrating Stick',
			'Water Mask',
			'Hand Sanitizer',
			'Sunscreen',
			'Cooling Stick',
			'Refreshing Mist',
			'Cleansing Mask',
			'Fishing Park',
			'Testimonial Heard',
			'Zero Max',
		],
		['Brightening', 'Hydration', 'Anti-Ageing', 'Sun Protection', 'Acne', 'Oil Control'],
	],
}

export default function withMobileFooter(OriginalComponent) {
	return function NewComponent() {
		const [filterVisible, setFilterVisible] = useState(false)
		const handleFilterVisible = () => setFilterVisible(v => !v)
		const [categoriesFilter, setCategoriesFilter] = useState(filters.options[0])
		const handleCategoriesFilter = index => setCategoriesFilter(filters.options[index])

		const [sortVisible, setSortVisible] = useState(false)
		const handleSortVisible = () => setSortVisible(!sortVisible)

		return (
			<OriginalComponent
				mobileFooter={{
					filterVisible,
					setFilterVisible,
					handleFilterVisible,
					categoriesFilter,
					setCategoriesFilter,
					handleCategoriesFilter,
					sortVisible,
					setSortVisible,
					handleSortVisible,
					filters,
				}}
			/>
		)
	}
}
