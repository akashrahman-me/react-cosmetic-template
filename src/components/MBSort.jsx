import { MdClose } from 'react-icons/md'

export default function MBSort({ handleSort }) {
	return (
		<div className="col-12">
			<div className="bg-light pt-1 mb-1 px-3">
				<div className="text-dark d-flex justify-content-between" style={{ color: 'black' }}>
					<h5 className="pt-1 brandColor">Sort</h5>
					<div onClick={handleSort}>
						<MdClose fontSize={24} className="mt-1" />
					</div>
				</div>
			</div>
			<div className="px-3">
				<p className="text-dark">Relevance</p>
				<p className="text-dark">Price - high to low</p>
				<p className="text-primary">Price - low to high</p>
				<p />
			</div>
		</div>
	)
}
