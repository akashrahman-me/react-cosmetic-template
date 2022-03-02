import sortImageIcon from '../images/sortImage.png'
import filterIcon from '../images/filterIcon.png'

export default function MBFilterSortButton({ handleFilter, handleSort }) {
	return (
		<>
			<div className="col-4 offset-1">
				<h5 className="color-dark text-center cursor-pointer" onClick={handleSort}>
					<img src={sortImageIcon} width={24} height={24} />
					<span style={{ fontSize: '15px', color: 'black' }}>Sort</span>
				</h5>
			</div>
			<div className="offset-2 col-4">
				<h5 className="color-dark text-center cursor-pointer" onClick={handleFilter}>
					<img src={filterIcon} width={24} height={24} />
					<span
						style={{
							fontSize: '15px',
							color: 'black',
						}}
					>
						Filter
					</span>
				</h5>
			</div>
		</>
	)
}
