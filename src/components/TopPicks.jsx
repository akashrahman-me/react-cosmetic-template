import { Link } from 'react-router-dom'
import useWidth from '../hooks/useWidth'

export default function TopPicks({ datam, headline }) {
	const width = useWidth()

	return (
		<div>
			<div className="my-3">
				{width >= 768 ? <h2>{headline}</h2> : <h5 className="text-center">{headline}</h5>}
			</div>
			<div className="d-flex justify-content-center flex-column flex-md-row">
				{datam.map(data => (
					<div className="px-md-4 px-lg-5" key={data.id}>
						<Link to={data.path}>
							<div>
								<span
									className="lazy-load-image-background  lazy-load-image-loaded"
									style={{
										display: 'inline-block',
										height: 'auto',
										width: '100%',
									}}
								>
									<img
										alt=""
										src={data.image}
										className="d-block img-fluid  cursor-pointer"
										width="100%"
										height="auto"
									/>
								</span>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
