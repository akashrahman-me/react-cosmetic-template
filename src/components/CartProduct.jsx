import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'

export default function CartProduct({ data, handleRemoveItem, mobile }) {
	const [item, setItem] = useState(data.item)
	const addItem = () => setItem(item => item + 1)
	const removeItem = () => setItem(item => item - 1)

	return mobile ? (
		<div className="mb-2">
			<div>
				<div className="d-flex bg-white">
					<Link to={data.path}>
						<div className="px-2 py-2 d-flex align-items-center" style={{ width: '80px' }}>
							<img
								src={data.image}
								className="cursor img-fluid d-block"
								width="100%"
								height="100%"
								alt={data.title}
							/>
						</div>
					</Link>
					<div className="flex-grow-1 font-weight-bold pt-1 position-relative">
						<div className="cartProdFlex">
							<div>
								<Link to={data.path} style={{ color: 'black' }}>
									<div className="pt-1">
										<div
											className="d-inline-block text-truncate"
											style={{
												maxWidth: '18rem',
												fontSize: '14px',
												fontWeight: 550,
											}}
										>
											{data.title}
										</div>
									</div>
								</Link>
							</div>
							<div>
								<Link to={data.path} style={{ color: 'black' }}>
									<div className="text-muted" style={{ fontSize: '12px' }}>
										{data.subtitle}
									</div>
								</Link>
							</div>
							<div>
								<Link to={data.path} style={{ color: 'black' }}>
									<div
										className="d-flex text-secondary justify-content-between "
										style={{ fontSize: '12px' }}
									>
										<div className="d-flex justify-content-start">
											{data.discount && (
												<div
													style={{
														textDecoration: 'line-through',
														color: 'rgb(252, 39, 121)',
													}}
												>
													Rs.{data.discount}
												</div>
											)}

											<div className={data.discount ? 'px-2' : ''}>Rs.{data.price}</div>
										</div>
									</div>
								</Link>
							</div>
							<div className="mt-0 py-1">
								<div className="d-flex justify-content-between">
									<button
										type="button"
										className="bg-transparent border-0 m-0 p-0"
										onClick={handleRemoveItem}
										id={data.id}
									>
										<MdDelete fontSize={24} color="rgb(108, 117, 125)" />
									</button>
									<div
										className="border d-flex justify-content-end mx-2"
										style={{
											fontSize: '14px',
											fontWeight: 510,
											color: 'rgb(107, 112, 92)',
										}}
									>
										<button
											type="button"
											className="bg-transparent border-0 m-0 p-0"
											id={data.id}
											onClick={item >= 2 ? removeItem : handleRemoveItem}
										>
											<span className="px-2">-</span>
										</button>
										<span
											className="px-2 "
											style={{
												backgroundColor: 'rgb(234, 234, 234)',
											}}
										>
											{item}
										</span>
										<button
											type="button"
											className="bg-transparent border-0 m-0 p-0"
											onClick={addItem}
										>
											<span className="px-2">+</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="py-2">
			<div className="row">
				<div className="col-7">
					<div className="row">
						<div className="col-3">
							<div>
								<Link to={data.path}>
									<img
										src={data.image}
										width={90}
										height={90}
										className="rounded shadow-sm img-fluid d-block h-90"
									/>
								</Link>
							</div>
						</div>
						<div className="col-9 mt-3 cart_productTitle">
							<div className="d-flex flex-column justify-content-between">
								<div className=" ">
									<Link
										to={data.path}
										style={{
											textDecoration: 'none',
											color: 'rgb(87, 85, 85)',
										}}
									>
										<p
											style={{
												overflow: 'hidden',
											}}
										>
											<span>Contour De Force Face Palette</span>
										</p>
									</Link>
								</div>
								<div>{data.subtitle}</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-5 ">
					<div className="d-flex justify-content-around mt-4">
						<div onClick={handleRemoveItem} id={data.id} className="cursor-pointer">
							<MdDelete fontSize={16} color="#6c757d" />
						</div>
						<div className="d-flex justify-content-around ">
							<div
								className="cursor cart_qtyActive  position-relative mt-1"
								id={data.id}
								onClick={item >= 2 ? removeItem : handleRemoveItem}
							>
								<span className="position-absolute item-decreament-button">-</span>
							</div>
							<div className="px-2 ">
								<span style={{ fontSize: '12px' }}>{item}</span>
							</div>
							<div className="cursor cart_qtyActive  position-relative mt-1 " onClick={addItem}>
								<span className="position-absolute item-increament-button">+</span>
							</div>
						</div>
						<div
							style={{
								display: 'inline-block',
								fontSize: '12px',
							}}
							className="pt-1"
						>
							<span>{data.item}</span>
							<span className="px-1">x</span>
							<span>{data.price}</span>
							<span className="px-1">=</span>
							<span>{parseInt(data.item) * parseInt(data.price)}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
