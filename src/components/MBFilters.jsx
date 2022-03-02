import { useEffect } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

export default function MBFilters({ data }) {
	const { filterVisible, handleFilterVisible, categoriesFilter, handleCategoriesFilter, filters } = data

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => (document.body.style.overflow = 'auto')
	}, [])

	return (
		filterVisible && (
			<div className="">
				<div className="container-fluid fixed-top bg-dark py-2" style={{ height: 50 }}>
					<div>
						<div onClick={handleFilterVisible}>
							<MdKeyboardBackspace
								className="float-start"
								fontSize={26}
								color="white"
								style={{ marginTop: 5 }}
							/>
						</div>
						<h6 className="float-start py-2 px-3" style={{ color: 'white', float: 'right' }}>
							Filters
						</h6>
						<h6
							className="float-end py-2 px-2 pt-2"
							style={{ color: 'white', fontSize: '13px' }}
							onClick={handleFilterVisible}
						>
							CLEAR ALL
						</h6>
					</div>
				</div>
				<div className="d-flex flex-wrap mt-5 mb-4">
					<div className="col-5 bg-light text-black">
						{filters.categories.map((name, index) => (
							<div key={name}>
								<div
									className="py-3 px-2 fs-6 bg-white"
									onClick={() => handleCategoriesFilter(index)}
								>
									{name}
								</div>
							</div>
						))}
					</div>
					<div className="col-7 child-scroll-hide">
						<div
							className="bg-white text-black"
							style={{ height: 'calc(100vh - 78px)', paddingBottom: 50 }}
						>
							{categoriesFilter.map(value => (
								<label className="d-flex pt-4 fs-6" htmlFor={value} key={value}>
									<div className="px-2">
										<input
											type="checkbox"
											id={value}
											name={value}
											style={{ backgroundColor: 'rgb(197, 26, 68)' }}
										/>
									</div>
									<label htmlFor={value} className="text-capitalize">
										{value}
									</label>
								</label>
							))}
						</div>
					</div>
				</div>
				<div
					className="container-fluid border fixed-bottom d-flex justify-content-center"
					style={{ background: 'white', height: 75 }}
				>
					<div className="py-3">
						<button
							type="button"
							className="btn btn-dark py-2 px-5"
							onClick={handleFilterVisible}
						>
							<span className="px-2">APPLY</span>
						</button>
					</div>
				</div>
			</div>
		)
	)
}
