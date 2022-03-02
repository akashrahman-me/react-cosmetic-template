import filterIcon from '../images/filterIcon.png'

export default function Filters() {
	return (
		<div className="px-3 filterDropdown">
			<span>
				<img src={filterIcon} style={{ fontSize: '15px' }} />
			</span>
			<span className="px-1 cursor position-relative">Filters</span>
			<div className="filterDropDownContent">
				<div>
					<div
						className="d-flex justify-content-between px-2 py-2"
						style={{ fontSize: '13px', fontWeight: 'bold' }}
					>
						<div>Smart Filters</div>
						<div style={{ cursor: 'pointer' }}>Reset all</div>
					</div>
					<div className="border-top" />
					<div className="px-2 py-2 filterScroll">
						<div className="d-flex justify-content-between bg-light" style={{ color: 'gray' }}>
							<div className="px-1 py-2 col-2">
								<u>Product Type</u>
							</div>
							<div className="px-1 py-2 col-2">
								<u>Feature</u>
							</div>
							<div className="px-1 py-2 col-2">
								<u>Finish</u>
							</div>
							<div className="px-1 py-2 col-2">
								<u>Formulation</u>
							</div>
							<div className="px-1 py-2 col-2">
								<u>Concern</u>
							</div>
						</div>
						<div className="d-flex justify-content-between filtersCheckbox">
							<div className="col-2">
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Kajal-product_type"
											name="Kajal-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Kajal-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Kajal
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Mascara-product_type"
											name="Mascara-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Mascara-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Mascara
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Eyeliner-product_type"
											name="Eyeliner-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Eyeliner-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Eyeliner
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Brow Definer-product_type"
											name="Brow Definer-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Brow Definer-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Brow Definer
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Blushes & Bronzers-product_type"
											name="Blushes & Bronzers-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Blushes & Bronzers-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Blushes &amp; Bronzers
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Blush-product_type"
											name="Blush-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Blush-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Blush
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Bronzer-product_type"
											name="Bronzer-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Bronzer-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Bronzer
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Foundations & Concealers-product_type"
											name="Foundations & Concealers-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Foundations & Concealers-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Foundations &amp; Concealers
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Primer-product_type"
											name="Primer-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Primer-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Primer
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Lip Primer-product_type"
											name="Lip Primer-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Lip Primer-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Lip Primer
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Liquid Lipstick-product_type"
											name="Liquid Lipstick-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Liquid Lipstick-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Liquid Lipstick
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Matte Lipstick-product_type"
											name="Matte Lipstick-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Matte Lipstick-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Matte Lipstick
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Powder-product_type"
											name="Powder-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Powder-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Powder
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Moisturizer-product_type"
											name="Moisturizer-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Moisturizer-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Moisturizer
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Contour-product_type"
											name="Contour-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Contour-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Contour
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Corrector-product_type"
											name="Corrector-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Corrector-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Corrector
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Highlighter-product_type"
											name="Highlighter-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Highlighter-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Highlighter
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Lip Gloss-product_type"
											name="Lip Gloss-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Lip Gloss-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Lip Gloss
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Matte Eyeliner-product_type"
											name="Matte Eyeliner-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Matte Eyeliner-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Matte Eyeliner
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Creme Lipstick-product_type"
											name="Creme Lipstick-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Creme Lipstick-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Creme Lipstick
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="BB Cushion-product_type"
											name="BB Cushion-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="BB Cushion-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										BB Cushion
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Value set-product_type"
											name="Value set-product_type"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Value set-product_type"
										className="text-capitalize pt-1 filterText cursor"
									>
										Value set
									</label>
								</div>
							</div>
							<div className="col-2">
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Purple-feature"
											name="Purple-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Purple-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Purple
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Smudge Free-feature"
											name="Smudge Free-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Smudge Free-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Smudge Free
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Velvet-feature"
											name="Velvet-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Velvet-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Velvet
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Waterproof-feature"
											name="Waterproof-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Waterproof-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Waterproof
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Black-feature"
											name="Black-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Black-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Black
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Curling-feature"
											name="Curling-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Curling-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Curling
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Lengthening-feature"
											name="Lengthening-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Lengthening-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Lengthening
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Matte-feature"
											name="Matte-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Matte-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Matte
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Smudge Proof-feature"
											name="Smudge Proof-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Smudge Proof-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Smudge Proof
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Eyeliner-feature"
											name="Eyeliner-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Eyeliner-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Eyeliner
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Long Lasting-feature"
											name="Long Lasting-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Long Lasting-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Long Lasting
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Pen-feature"
											name="Pen-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Pen-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Pen
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Smudgeproof-feature"
											name="Smudgeproof-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Smudgeproof-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Smudgeproof
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Primer-feature"
											name="Primer-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Primer-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Primer
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Lip Primer-feature"
											name="Lip Primer-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Lip Primer-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Lip Primer
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Liquid-feature"
											name="Liquid-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Liquid-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Liquid
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Translucent Powder-feature"
											name="Translucent Powder-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Translucent Powder-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Translucent Powder
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Liquid Eyeliner-feature"
											name="Liquid Eyeliner-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Liquid Eyeliner-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Liquid Eyeliner
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Matte Eyeliner-feature"
											name="Matte Eyeliner-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Matte Eyeliner-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Matte Eyeliner
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Black Kajal-feature"
											name="Black Kajal-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Black Kajal-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Black Kajal
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Crème-feature"
											name="Crème-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Crème-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Crème
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Glossy-feature"
											name="Glossy-feature"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Glossy-feature"
										className="text-capitalize pt-1 filterText cursor"
									>
										Glossy
									</label>
								</div>
							</div>
							<div className="col-2">
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Matte-finish"
											name="Matte-finish"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Matte-finish"
										className="text-capitalize pt-1 filterText cursor"
									>
										Matte
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Natural-finish"
											name="Natural-finish"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Natural-finish"
										className="text-capitalize pt-1 filterText cursor"
									>
										Natural
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Creme-finish"
											name="Creme-finish"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Creme-finish"
										className="text-capitalize pt-1 filterText cursor"
									>
										Creme
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Gloss-finish"
											name="Gloss-finish"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Gloss-finish"
										className="text-capitalize pt-1 filterText cursor"
									>
										Gloss
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Double Matte-finish"
											name="Double Matte-finish"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Double Matte-finish"
										className="text-capitalize pt-1 filterText cursor"
									>
										Double Matte
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Bullet-finish"
											name="Bullet-finish"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Bullet-finish"
										className="text-capitalize pt-1 filterText cursor"
									>
										Bullet
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Glossy-finish"
											name="Glossy-finish"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Glossy-finish"
										className="text-capitalize pt-1 filterText cursor"
									>
										Glossy
									</label>
								</div>
							</div>
							<div className="col-2">
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Liquid-product_formulation"
											name="Liquid-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Liquid-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Liquid
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Pressed Powder-product_formulation"
											name="Pressed Powder-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Pressed Powder-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Pressed Powder
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Cream-product_formulation"
											name="Cream-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Cream-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Cream
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Bullet-product_formulation"
											name="Bullet-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Bullet-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Bullet
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Loose Powder-product_formulation"
											name="Loose Powder-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Loose Powder-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Loose Powder
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Kajal-product_formulation"
											name="Kajal-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Kajal-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Kajal
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Stick-product_formulation"
											name="Stick-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Stick-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Stick
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Matte-product_formulation"
											name="Matte-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Matte-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Matte
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Crème-product_formulation"
											name="Crème-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Crème-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										Crème
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="BB Cream-product_formulation"
											name="BB Cream-product_formulation"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="BB Cream-product_formulation"
										className="text-capitalize pt-1 filterText cursor"
									>
										BB Cream
									</label>
								</div>
							</div>
							<div className="col-2">
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Blurring-product_concern"
											name="Blurring-product_concern"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Blurring-product_concern"
										className="text-capitalize pt-1 filterText cursor"
									>
										Blurring
									</label>
								</div>
								<div className="d-flex">
									<div className="px-1 py-1">
										<input
											type="checkbox"
											id="Under eye-product_concern"
											name="Under eye-product_concern"
											style={{
												backgroundColor: 'rgb(197, 26, 68)',
											}}
										/>
									</div>
									<label
										htmlFor="Under eye-product_concern"
										className="text-capitalize pt-1 filterText cursor"
									>
										Under eye
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center py-2 applyFilters cursor">Apply Filter(s)</div>
			</div>
		</div>
	)
}
