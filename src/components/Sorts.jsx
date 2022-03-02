import sortIcon from '../images/sortIcon.png'

export default function Sorts() {
	return (
		<div className="px-3 sortDropdown">
			<span className="px-1">
				<img src={sortIcon} style={{ fontSize: '15px' }} />
			</span>
			<span className="cursor">Sort</span>
			<div className="sortDropDownContent">
				<div className="d-flex justify-content-between py-3 px-2">
					<div className="sortText fw-bold">Select Sorting</div>
					<div
						className="sortText fw-bold cursor"
						style={{ color: 'black', textDecoration: 'none' }}
					>
						Clear All
					</div>
				</div>
				<div className="sortCategory">
					<div className="py-1 px-1 border-top">
						<svg
							className="MuiSvgIcon-root"
							focusable="false"
							viewBox="0 0 24 24"
							aria-hidden="true"
							style={{ fontSize: '20px' }}
						>
							<path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
						</svg>
						<span className="px-2 sortText">Relevance</span>
					</div>
					<div className="highlightSort py-1 px-1 border-top">
						<svg
							className="MuiSvgIcon-root"
							focusable="false"
							viewBox="0 0 24 24"
							aria-hidden="true"
							style={{ fontSize: '18px' }}
						>
							<path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
						</svg>
						<span className="px-2 sortText">Price - High to Low</span>
					</div>
					<div className="py-1 px-1 border-top">
						<svg
							className="MuiSvgIcon-root"
							focusable="false"
							viewBox="0 0 24 24"
							aria-hidden="true"
							style={{ fontSize: '18px' }}
						>
							<path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
						</svg>
						<span className="px-2 sortText">Price - Low to High</span>
					</div>
				</div>
			</div>
		</div>
	)
}
