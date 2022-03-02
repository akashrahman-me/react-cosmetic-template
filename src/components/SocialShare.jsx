import { SocialIcon } from 'react-social-icons'

const platforms = [
	{
		id: 985049858,
		path: 'https://whatsapp.com',
	},
	{
		id: 93840938,
		path: 'https://facebook.com',
	},
	{
		id: 34898309,
		path: 'https://twitter.com',
	},
	{
		id: 2908349,
		path: 'https://tumblr.com',
	},
	{
		id: 894985948,
		path: 'https://linkedin.com',
	},
]

export default function SocialShare() {
	return (
		<div className="social-icon-wrap">
			{platforms.map(platform => (
				<SocialIcon style={{ width: 22, height: 22 }} url={platform.path} key={platform.id} />
			))}
		</div>
	)
}
