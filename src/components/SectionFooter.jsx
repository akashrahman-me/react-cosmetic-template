import { useState } from 'react'

export default function SectionFooter() {
	const [expand, setExpand] = useState(false)
	const toggleExpand = e => setExpand(!expand)

	return (
		<div className="container myFooter">
			<div
				className={`mt-3 py-2 px-2 cursor-pointer ${expand ? 'footerHeading' : ''}`}
				onClick={toggleExpand}
			>
				<h6>READ MORE ABOUT SUGAR COSMETICS</h6>
			</div>
			{expand && (
				<div className="container mx-1 mt-3 mb-3 footCont">
					<div>
						<h2 style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									Enhance your beauty looks with SUGAR COSMETICS
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								Your search for a makeup and beauty range that’s cruelty-free, high on style,
								and even higher on performance ends here at SUGAR Cosmetics! SUGAR makeup
								stands for striking formulas that perfectly suit every Indian skin tone,
								extremely rich colour payoff, along with a unique and incredible range of
								products that stand the test of time. This hugely popular range of premium
								colour cosmetics and beauty products are crafted in state-of-the-art
								facilities across Germany, Italy, India, USA, and Korea. The clutter-breaking
								450+ makeup products are skillfully wrapped in a signature low-poly mosaic
								designed packaging that is bursting with colour and is sure to complement the
								sweet and sassy side of you.
							</span>
						</p>
						<p style={{ marginBottom: '.0001pt', lineHeight: 'normal' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								The chart-topping makeup &amp; beauty range is spread across categories like
								Lip makeup, Eye makeup, Face makeup, Nail paints and Skin care. The
								best-selling beauty products in India extend from the long lasting
							</span>
							<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									lipsticks to creamy
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>lip crayons</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>,</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>lip primers</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}> to</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										eyebrow definers
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									, foundation stick with an inbuilt brush to cushion BB compacts, setting
									mist to makeup cleansing water. SUGAR has pioneered the trend shift
									towards “mattes'' with its cult-favourite range of Matte
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Liquid Lipsticks
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									and equally popular Matte Eyeliners. Some of the recent innovations like
									the ultra-luxe range of lipsticks called Mettle, Jelly Highlighters, a
									range of face makeup including colour correctors, highlighters, bronzers
									and blushes in a stick format, have created waves in the makeup market.
									Say hello to SUGAR’s newest skincare category with our range of Sheet
									Masks, Clay Masks, Eye Creams and a ground-breaking hyaluronic acid and
									Vitamin C skincare range and so much more.
								</span>
							</span>
						</p>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								So get ready to dive into the world of SUGAR Cosmetics and rule the world, one
								look at a time!
							</span>
						</p>
						<h2 style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									Look your glamorous best with Exclusive SUGAR Makeup Collection!
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								Whether you are a makeup connoisseur or a budding enthusiast, it is easy to be
								overwhelmed in the sea of <strong>beauty products in India</strong>. But with
								SUGAR Cosmetics, you can put your search for the perfect makeup collection to
								rest. Since its inception, SUGAR has been working with an aim to create a
								high-quality yet affordable range of products to complement the iconic Indian
								beauty. Not only that, you can shop for all these cosmetics online without
								going through a tiring process of finding a cosmetic store that will cater to
								your needs.
							</span>
						</p>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								Makeup is not just a necessity; it’s a statement that says we are beautiful,
								but a dash of lipstick every once in a while makes us feel sexy. SUGAR
								Cosmetics truly keeps up to our promise to have your back to make heads turn
								wherever you go. Make sure you own a beauty kit with products that are
								exclusively created and recommended for you by beauty experts, but most of all
								– own a makeup that makes you feel confident in your own skin. Your selection
								of cosmetics to build your makeup stash, is sure to provide you with an
								ensemble that is on-trend and a reflection of you and your style. This makeup
								collection is everything you need to look stunning while you’re on the go; and
								you might just fall in love with yourself all over again.
							</span>
						</p>
						<h2 style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									How to Choose the Right Makeup &amp; Cosmetics?
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								While we guide you through the best picks to make your makeup kit of this
								stellar range, here are a few things to keep in mind while choosing the right
								products for you. Number one, understand your skin texture, skin tone, and
								skin undertone. For texture – If you have dry skin, opt for crème based,
								hydrating products like liquid foundations, cushion compacts that are infused
								with moisturizing ingredients like aloe vera, glycerin and if you have oily
								skin, pick non-greasy, powder-based makeup that has oil-absorbing ingredients
								like kaolin clay. SUGAR Cosmetics stands strong to the promise of inclusivity
								in our makeup range and provides a plethora of shades that suit all skin tones
								and undertones. While you are spoiled for choice when shopping online at SUGAR
								Cosmetics with makeup products that are trending, and hues that are raging the
								makeup charts, never forget to own your style and be unapologetically
								yourself!
							</span>
						</p>
						<h2 style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									SUGAR’s Lipstick Range: Let your lips steal the show!
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								A lipstick is the sassiest makeup product a girl can own. With SUGAR
								lipsticks, now you can flaunt your pout and grab eyeballs wherever you go. Our
								lipsticks are rich pigmented and loaded with natural ingredients to ensure
								your lips are healthy and happy, always. You can now select from various lip
								makeup products like lip crayons, lacquers,
							</span>
							<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>lip gloss</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									and lip liners in matte, creamy matte and glossy finish. With matte lip
									colours being all the rage, you can shop our delectable range of
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Matte as Hell crayon lipstick mini set
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									where you can select any 3 lip colours of your choice. In case you are
									looking for a smudge proof lipstick, our
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Smudge Me Not
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									liquid lipstick is sure to become your lip’s best friend. Just a single
									coat and you are done for the day and night too. This kiss-proof range
									ensures your lips remain gorgeously tainted while you eat, drink and kiss
									your heart out! Available in 52 shades, this lip line is a riot of colours
									and choosing one might be tough. With an endless range of{' '}
								</span>
								<a href="#">
									<span style={{ color: 'blue', background: 'white' }}>
										lipstick shades
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									and textures to choose from, you are sure to find your perfect SUGAR
									lipstick for every mood and occasion.
								</span>
							</span>
						</p>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								To get a smooth application for your lipstick and make it last longer, begin
								with a lip primer like the SUGAR Seal The Show Lip Primer. Start with defining
								your pout with the SUGAR Lipping On The Edge Lip Liner that gives you fuller,
								matte looking lips. There is an abundance of choice for the type of lipstick,
								the texture and finish that you could choose froin. Opt for a Liquid Lipstick
								with a super matte finish and long-lasting power like the SUGAR Smudge Me Not
								Liquid Lipstick, or an easy-to-use crayon lipstick like the SUGAR Matte As
								Hell Crayon Lipstick with a comfort matte finish that skips the need of a lip
								liner. You will be showered with choices from a classic bullet lipstick like
								the SUGAR Nothing Else Matter Longwear Lipstick, to twist up oval-shaped slim
								bullet lipstick like the SUGAR Matte Attack Transferproof Lipstick ensuring
								precise and proper application and coverage. You can choose from a super matte
								texture to a velvety matte feel, and crème, metallic or gloss finish lipsticks
								from SUGAR’S incredible lip makeup collection. Try the new Wonder Woman
								Lipsticks that are 100% vegan, and your lipstick shades collection will be
								incomplete without a classy red and a perfect nude that appropriately
								complements your skin colour. Other must-have lipstick colours are a popping
								pink and purple for parties, a soft mauve and pink or earthy browns for an
								office look or day dates, and some glossy lipstick shades and metallic
								lipstick colours for the day you want to glam it up. As a beginner, we would
								recommend your go-to lipstick should definitely be a subtle shade (soft pink
								or nude brown lipstick colour).
							</span>
						</p>
						<h2 style={{ marginBottom: '.0001pt', lineHeight: 'normal' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									SUGAR Eye Makeup range: Check out an exciting collection of kajals,
									eyeliners &amp; mascaras!
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								With SUGAR’s eye makeup range, you can now play with dramatic
							</span>
							<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>eyeliners</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									, deeply tainted Kajals, vibrant eye shadows and much more. If you are
									looking for a Kajal that actually delivers what it says, our
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Kohl Of Honour Intense Kajal-01 Blackout black
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									is for you. This extreme-wear, waterproof kajal is smudge free, transfer
									resistant and stays on for 12 hours straight. Eye makeup is incomplete
									without an eye liner and the
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Wingman Waterproof Microliner-01 I’ll be black
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									is a dream come true eyeliner with matte finish. It is smudge proof,
									deeply pigmented and promises a stay of up to 12 hours. Next try our
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Blend the Rules Eyeshadow Palette
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									, an iconic trio of warm neutrals to create smokey, mauve and nude effects
									on your eyes. Finish your eye makeup with
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Lash Mob Limitless Mascara-01 Black with a Bang
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									. The creamy mascara separates, defines and combs through your lashes
									giving you that defined long lash look.
								</span>
							</span>
						</p>
						<h2 style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									SUGAR Face Makeup range: One-stop cosmetics shop for a flawless complexion
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								Now, looking like a million bucks is easy with SUGAR’s versatile face makeup
								range. All you need is long-wear
							</span>
							<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>foundations</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									, setting powders and professional makeup brushes and some makeup skills
									to transform you into a glitzy goddess. Great makeup requires a flawless
									base and our
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Ace of Face Foundation Stick
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									stands the test of time. Quite literally! This creamy, rich foundation
									feels like a second skin and offers 22 different shades for light, medium
									and dark complexion to match your skin tone. You can shop for these{' '}
									<strong>beauty products online </strong>and much more like the contour
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										De Force Mini Blush
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>,</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Dream Cover SPF15 Mattifying Compact
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}> and </span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										&nbsp;
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Bling Leader Illuminating&nbsp; Moisturiser
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									from our website.
								</span>
							</span>
						</p>
						<h2 style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									Step-by-Step Guide to Ace your Makeup Routine
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								Prepare yourself to play with makeup and find the look that shouts ‘YOU!’ Take
								a read through a quick guide to the types of makeup products that you can opt
								for while shopping online at SUGAR.
							</span>
						</p>
						<ul>
							<li>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									<strong>Prep:</strong> To begin with, always start putting your makeup on
									a fresh and clean canvas. This means that you should always wash your face
									and clear out any residue with a good cleansing water or lotion to start
									right like the SUGAR Swipe Right Cleansing Water. For a true
									glow-from-within look, make sure you follow this up with a sheet mask that
									helps your skin feel supple and smooth. Once the face is set, choose from
									SUGAR’s collection of face primers, which will help keep your makeup in
									place for a long period of time. A little goes a long way with a pea-sized
									amount of primer that acts as a skin-perfector, creating the definition of
									a flawless base whilst blurring out wrinkles and fine lines. According to
									your skin time, you can choose a mattifying face primer or a hydrating
									face primer.
								</span>
							</li>
							<li>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									<strong>Build your makeup routine</strong>: Start your face makeup by
									covering any imperfections, blemishes or skin discolourations by using the
									SUGAR Magic Wand Waterproof Concealer and the SUGAR Face FWD &gt;&gt;{' '}
								</span>
								<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
									<a href="#">
										<span style={{ color: 'blue', background: 'white' }}>
											Colour Corrector
										</span>
									</a>
									<span style={{ color: 'black', background: 'white' }}>
										{' '}
										sticks. Use the two makeup products to cover your under eye dark
										circles, hyperpigmentation, blemishes, redness, scars and spots. Dot
										in the product on your face gently and blend in using a light hand.
										After creating a flawless base, apply your foundation in the shade
										that’s closest to your skin tone. The best foundation type you could
										opt for is the foundation cream that comes in a stick format with an
										attached blending brush at the other end, making it handy and easy to
										use like the SUGAR Ace Of Face Foundation Stick. After creating your
										picture-perfect canvas, finish your base by dabbing some compact or
										loose powder to set it. For those days when you want to go light on
										your face makeup, simply use a concealer, followed with a BB cream
										like the SUGAR Goddess Of Flawless SPF30+ BB Cream or SUGARPower Clay
										SPF20 BB Cushion that suits your skin tone and set it in with the
										SUGAR Dream Cover SPF15 Mattifying Compact.
									</span>
								</span>
							</li>
							<li>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									<strong>Contour and define your features</strong>: It’s now time to
									contour your face, get that perfect chiseled look. Create a defined
									jawline, highlight your best features and give yourself those flushed
									cheeks. Use the SUGAR Contour De Force Mini Bronzer or the SUGAR Face FWD
									&gt;&gt; Contour Stick under your cheekbones to sculpt and define. Apply
									small amounts of your bronzer along the hollow till your hairline and on
									the sides of your nose to achieve a defined look. You can also apply it
									under your jawline for a completely sculpted look. For a brilliant flush
									of colour use a blush brush and apply the SUGAR Contour De Force Mini
									Blush to the apples of the cheek. Amp up the shine and glow on your skin
									by applying the SUGAR Contour De Force Mini Highlighter. Apply your
									highlighter anywhere you want an intense glow, like the top of your
									cheekbones, over or under browbones, down the bridge of the nose, on the
									cupid's bow of your lips and even the inner corner of the eyes.
								</span>
							</li>
							<li>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									<strong>Flaunt beautiful eye makeup</strong>: Now let’s talk about
									creating an impeccable ‘eye candy’! Start your eye makeup by defining your
									eyebrow. Use the SUGAR Arch Arrival Brow Definer in the right shade that
									matches the shade of your eyebrow hair. Define and fill in your eyebrows
									in short strokes, and then comb them out with the attached brush to
									achieve naturally groomed or strikingly bold eyebrows. Next, win over your
									eye game by choosing a richly pigmented and blendable eyeshadow palette
									that comes with a mirror and dual-ended applicator. Your eye shadow kit
									should include matte eyeshadow shades in nudes and deeper hues, metallic
									and foil powders. You can choose any of your fave from the SUGAR Blend The
									Rules Eyeshadow Palette or the new
								</span>
								<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
									<a href="#">
										<span
											style={{
												color: 'black',
												background: 'white',
												textDecoration: 'none',
											}}
										>
											{' '}
										</span>
										<span style={{ color: '#1155cc', background: 'white' }}>
											Wonder Woman eyeshadow palettes
										</span>
									</a>
									<span style={{ color: 'black', background: 'white' }}>
										{' '}
										that has a mix of matte, shimmer and high-shine foil finish eyeshadow
										shades and bronzer,
									</span>
									<a href="#">
										<span
											style={{
												color: 'black',
												background: 'white',
												textDecoration: 'none',
											}}
										>
											{' '}
										</span>
										<span style={{ color: '#1155cc', background: 'white' }}>blush</span>
									</a>
									<span style={{ color: 'black', background: 'white' }}>
										{' '}
										to add definition.&nbsp;
									</span>
								</span>
							</li>
							<li>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									<strong>Pretty up your nails</strong>: Your makeup kit is never complete
									without a range of nail polish colours. Let your fingers do the talking
									with SUGAR’s nail polish range called{' '}
								</span>
								<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
									<a href="#">
										<span style={{ color: 'blue', background: 'white' }}>
											Tip Tac Toe Nail Lacquers
										</span>
									</a>
									<span style={{ color: 'black', background: 'white' }}>
										{' '}
										that are sure to keep your tips on-point! Choose your favourite nail
										paint colours from a wide range of glossy, matte or shimmer nail
										lacquers. The chip-free, streak-free formulation, quick dry formula
										and specially crafted ergonomic applicator checks on all your nail
										paint woes. Get experimental and creative with nail polish trends and
										nail art fads by choosing the best fits for you from our wide range of
										nail paintcolours.&nbsp;
									</span>
								</span>
							</li>
						</ul>
						<h2 style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									Buy the best of SUGAR Beauty Kits &amp; Makeup Value sets that are perfect
									to indulge!&nbsp;
								</span>
							</strong>
						</h2>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								Worried about what to pack for your next summer vacay trip or looking for
								all-in-one makeup sets to glam for a wedding? Choose from an assemblage of
								gorgeous beauty kits and makeup combos like the
							</span>
							<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Liquid Lipstick + Kohl Value set
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}> and</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Eyeliner + Kajal Value set
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									or from super saver combo packs like the
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Lip Crayon value set
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}> and</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Prepped Up Combo
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									face mask sheets. Indulge in
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										glowing skin beauty set
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}> or</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										beginner-friendly makeup kit
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									that includes everything for you to look fabulous. Pick our exclusive
									launch
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Pride Edition mini lipstick sets
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									in rainbow-themed packaging are all-out bold, loud and bright in every
									way.
								</span>
							</span>
						</p>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									SUGAR’s new skincare range: Products that add glow and keep your skin
									healthy!
								</span>
							</strong>
						</p>
						<p style={{ lineHeight: 'normal', margin: '15.0pt 0in 15.0pt 0in' }}>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								Makeup looks great when complemented with smooth skin and a natural glow.
								SUGAR Cosmetics brings for you an exclusive 100% vegetarian and cruelty-free
								skin care range that will pamper and nourish your skin from within. Grab your
								SUGAR products from your nearest cosmetic store or order them online in India.
								From refreshing face masks, illuminating{' '}
							</span>
							<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
								<a href="#">
									<span style={{ color: 'blue', background: 'white' }}>moisturizers</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>, </span>
								<a href="#">
									<span style={{ color: 'blue', background: 'white' }}>
										face setting mists
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									and makeup remover, we have it all covered for you. Packed with the
									goodness of vitamin C, our
								</span>
								<a href="#">
									<span
										style={{
											color: 'black',
											background: 'white',
											textDecoration: 'none',
										}}
									>
										{' '}
									</span>
									<span style={{ color: '#1155cc', background: 'white' }}>
										Citrus Got Real
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									range will cover all your skin concerns like blemishes, dryness and
									dullness to give you skin that is hydrated, glowing and healthy. For dull,
									dehydrated and dry skin opt for unique Hyaluronic acid-based skincare
									packed with great skin loving ingredients. The SUGAR Aquaholic skincare
									range works magic and provides instant hydration to your skin while
									relaxing your skin. For those TLC sessions during the weekends, you can
									choose from a wide range of SUGAR face masks that will rejuvenate your
									skin.
								</span>
							</span>
						</p>
						<p style={{ lineHeight: 'normal' }}>
							<strong>
								<span
									style={{
										fontSize: '10.0pt',
										fontFamily: '"Arial",sans-serif',
										color: 'black',
										background: 'white',
									}}
								>
									Some skin TLC
								</span>
							</strong>
							<span
								style={{
									fontSize: '10.0pt',
									fontFamily: '"Arial",sans-serif',
									color: 'black',
									background: 'white',
								}}
							>
								: Removing your makeup, and continuing with a cleansing, toning and
								moisturizing routine is mandatory before you retire for the day. This keeps
								your{' '}
							</span>
							<span style={{ fontSize: '10.0pt', fontFamily: '"Arial",sans-serif' }}>
								<a href="#">
									<span style={{ color: 'blue', background: 'white' }}>skin</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									healthy and prevents premature ageing of skin. Use gentle{' '}
								</span>
								<a href="#">
									<span style={{ color: 'blue', background: 'white' }}>
										makeup cleansing water
									</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									{' '}
									to wipe out your waterproof makeup, and then follow the Korean beauty care
									routine of double cleansing. This means you use an oil-based cleanser to
									wash your face and clear out any makeup residue, dirt and grime and follow
									with a gentle water-based face wash after that. Proceed with a toner or
									facial essence to refine pores and balance skin pH, use a pore cleansing
									mask and then a rejuvenating Korean sheet mask. Post that you can hydrate
									your skin using an overnight sleeping face mask. Your perfect picks for a
									quick skincare routine would be SUGAR Swipe Right Cleansing Water,
									following with the SUGAR Power Clay 3-min Pore Cleansing Mask or Power
									Clay Peel Off Mask. You can also use your favourite from SUGAR’s wide
									range of{' '}
								</span>
								<a href="#">
									<span style={{ color: 'blue', background: 'white' }}>Sheet Masks</span>
								</a>
								<span style={{ color: 'black', background: 'white' }}>
									. Then end this routine with the SUGAR Aquaholic Overnight Water Mask.
									This routine helps to avoid clogging of pores and ensures healthy, supple
									and fresh-looking skin.
								</span>
							</span>
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
