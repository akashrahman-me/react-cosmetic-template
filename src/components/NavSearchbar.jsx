import { MdLocalMall, MdFavorite, MdClose } from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo1x1.jpg'
import SearchPalette from './SearchPalette'
import persionIcon from '../images/person.png'
import discountIcon from '../images/discountIcon.svg'

export default function NavSearchbar({ handler }) {
	const [searchPalette, setSearchPalette] = useState(false)
	const [search, setSearch] = useState('')
	const changeSearch = e => setSearch(e.currentTarget.value)

	return (
		<div className="d-flex bg-light py-3">
			<div className="col-2 d-flex justify-content-center">
				<Link to="/" style={{ color: 'black' }}>
					<div className="py-0">
						<img
							src={logo}
							title="SUGAR Cosmetics"
							alt="SUGAR Cosmetics"
							className="rounded-circle"
							style={{
								position: 'absolute',
								marginTop: '-10px',
								width: '60px',
								height: '60px',
							}}
						/>
					</div>
				</Link>
			</div>
			<div className="col-6 d-flex justify-content-between">
				<div
					className="col-12 rounded-pill d-flex bg-white navbarDropdown"
					style={{ height: '40px' }}
					onMouseLeave={() => setSearchPalette(false)}
				>
					<input
						className="col-9 px-4 searchInput"
						placeholder='Try "Liquid Lipstick"'
						value={search}
						onMouseEnter={() => setSearchPalette(true)}
						onChange={changeSearch}
					/>
					<div
						className="col-1 d-flex justify-content-center pt-2 text-muted cursor-pointer"
						style={{ zIndex: 100, backgroundColor: 'white' }}
						onClick={() => setSearch('')}
					>
						{search !== '' && <MdClose fontSize={22} />}
					</div>
					<div
						className="col-2 bg-dark d-flex justify-content-center py-2 searchButton cursor-pointer"
						style={{
							color: 'white',
							fontSize: '15px',
						}}
					>
						Search
					</div>
					{searchPalette && <SearchPalette />}
				</div>
			</div>
			<div className="col-3 d-flex justify-content-center" style={{ fontSize: '15px' }}>
				<div className="d-flex justify-content-center">
					<div className="py-2">
						<img src={persionIcon} className="" />
					</div>
					<div className="px-1 py-2 text-decoration-underline cursor-pointer" onClick={handler}>
						Login/Register
					</div>
				</div>
			</div>
			<div className="col-1 d-flex justify-content-start  py-1">
				<div className="px-2 position-relative">
					<MdFavorite color="#495057" fontSize="20px" />
				</div>
				<div className="px-1">
					<Link to="/cart" className="text-decoration-none color-black">
						<div className="position-relative">
							<MdLocalMall color="#495057" fontSize="20px" />
						</div>
					</Link>
				</div>
				<Link to="/offers">
					<div className="px-2 cursor">
						<img src={discountIcon} alt="discount" width="18px" height="18px" />
					</div>
				</Link>
			</div>
		</div>
	)
}
