import homeIcon from '../images/breadcrumb_home.svg'
import { Link } from 'react-router-dom'
import React from 'react'
import useWidth from '../hooks/useWidth'

export default function Bereadcrumb({ pages, fontWeight }) {
	const width = useWidth()

	return (
		<div className={`d-flex ${width >= 768 ? 'px-3' : ''}`}>
			<div>
				<Link to="/">
					<img src={homeIcon} style={{ color: 'black', marginTop: -6 }} />
				</Link>
			</div>
			{Array.isArray(pages) &&
				pages.map(page => (
					<React.Fragment key={Math.random()}>
						<div className="px-2 text-muted">/</div>
						<Link to={page.path} className="text-muted">
							<span style={fontWeight ? { fontWeight: fontWeight } : {}}>{page.name}</span>
						</Link>
					</React.Fragment>
				))}
		</div>
	)
}
