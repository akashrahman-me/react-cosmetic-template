import keyboardBackspaceIcon from '../images/keyboardBackspace.svg'
import clearWhiteIcon from '../images/clearWhite.svg'
import { Link } from 'react-router-dom'

export default function SearchNavbar({ changeSearch, search }) {
	return (
		<div style={{ backgroundColor: 'black' }} className="sticky-top py-2 px-2">
			<div className="d-flex">
				<div className="col-1">
					<Link to="/">
						<img src={keyboardBackspaceIcon} width={28} height={28} />
					</Link>
				</div>
				<div className="col-10 SearchNavbar_inputTag" style={{ borderBottom: '2px solid white' }}>
					<input
						type="text"
						placeholder="Search..."
						className="SearchNavbar_cursorFocus SearchNavbar_searchBar py-1"
						autoFocus={true}
						onChange={changeSearch}
						value={search}
					/>
				</div>
				<div className="col-1 py-1">
					<img
						src={clearWhiteIcon}
						width={25}
						height={25}
						onClick={() => changeSearch('')}
						className="cursor-pointer"
					/>
				</div>
			</div>
		</div>
	)
}
