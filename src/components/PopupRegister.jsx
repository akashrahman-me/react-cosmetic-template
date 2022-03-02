import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OTPInput, { ResendOTP } from 'otp-input-react'
import smartphoneIcon from '../images/smartphone.svg'
import Login_bg from '../images/Login_bg.svg'
import { Link } from 'react-router-dom'

export default function PopupRegister({ registration, handler }) {
	// Pattern for number
	const [trackRequest, setTrackRequest] = useState(true)
	const [number, setNumber] = useState('')
	const changeNumber = v => {
		setTrackRequest(v.length !== 10)
		setNumber(v)
	}
	const [isOTPSend, setIsOTPSend] = useState(false)
	const requestOTP = e => {
		e.preventDefault()
		setIsOTPSend(true)
		setTrackRequest(true)
		console.log(number) // here found number
	}
	const renderForNumberButton = buttonProps => (
		<button style={{ all: 'unset' }} {...buttonProps} disabled={buttonProps.remainingTime !== 0}>
			<span
				className={`text-decoration-underline ${
					buttonProps.remainingTime === 0 ? 'cursor-pointer' : ''
				}`}
			>
				{buttonProps.remainingTime !== 0 ? `Resend OTP in ${buttonProps.remainingTime}` : `Resend`}
			</span>
		</button>
	)

	// Pattern for OTP
	const [OTP, setOTP] = useState('')
	const [trackOTP, setTrackOTP] = useState(true)
	const changeOTP = e => {
		setOTP(e)
		setTrackOTP(e.length !== 4)
	}
	const submitOTP = e => {
		e.preventDefault()
		console.log(OTP) // here found OTP that submited
	}

	return (
		<Offcanvas
			show={registration}
			onHide={handler}
			placement="end"
			scroll={true}
			style={{
				backgroundImage: `url("${Login_bg}")`,
				height: '130vh',
				backgroundPosition: 'center center',
				backgroundSize: 'cover',
				width: '60%',
				maxWidth: 670,
				minWidth: 400,
			}}
		>
			<Offcanvas.Body>
				<div className="cursor-pointer" onClick={handler}>
					<MdClose color="white" fontSize={20} />
				</div>
				<div className="loginSignup mt-2">Login/Signup</div>
				<div
					style={{
						width: 600,
						boxShadow:
							'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
					}}
					className="p-3 mt-3 bg-white rounded"
					aria-label="login and registration form container"
				>
					<div className="d-flex justify-content-start align-items-center">
						<img
							src={smartphoneIcon}
							alt="smartphone"
							title="smartphone"
							height="30px"
							width=""
						/>
						<div className="px-3 loginHeading">Login/Signup Using Phone</div>
					</div>
					<form>
						<div className="mt-3 pt-1 d-flex justify-content-start align-items-center">
							<div className="mt-2">
								<h4>+91</h4>
							</div>
							<div className="px-3">
								<OTPInput
									value={number}
									onChange={changeNumber}
									OTPLength={10}
									otpType="number"
									disabled={false}
									numInputs={9}
									inputClassName="number-input"
									style={{ marginBottom: -6 }}
								/>
							</div>
							<div className="px-2">
								<button className="otpButton" disabled={trackRequest} onClick={requestOTP}>
									Request OTP
								</button>
							</div>
						</div>
					</form>
					<div className="py-3 ">
						{isOTPSend ? (
							<p className="reqPara py-1 d-flex align-items-center">
								<span className="me-1">Didn't get the OTP?</span>
								<ResendOTP
									renderButton={renderForNumberButton}
									renderTime={() => <></>}
									maxTime={60}
									onResendClick={() => console.log('Resend clicked for new OTP')}
								/>
							</p>
						) : (
							<p className="reqPara py-1">Enter your phone number to request an OTP</p>
						)}

						<hr />
					</div>
					<div className="">
						<p className="otpPrint" style={{ marginBottom: 4 }}>
							Enter the 4 digit OTP received on your phone.
						</p>
					</div>
					<form>
						<div className="d-flex justify-content-start align-items-center">
							<OTPInput
								value={OTP}
								onChange={changeOTP}
								OTPLength={4}
								otpType="number"
								disabled={!isOTPSend}
								inputClassName="otp-inputs"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="verifyOtpButton"
								disabled={trackOTP}
								onClick={submitOTP}
							>
								Verify OTP
							</button>
						</div>
					</form>
					<div className="d-flex align-items-center py-3 mt-2">
						<input
							className="form-check-input me-2"
							type="checkbox"
							id="checkboxNoLabel"
							value=""
							style={{ marginTop: 0 }}
						/>
						<p className="mb-0 ml-4 whatsappPara">
							{' '}
							Get Important Updates on Whatsapp.{' '}
							<Link
								to="/terms"
								className="text-decoration-underline"
								style={{ fontWeight: '600' }}
							>
								Terms and Conditions
							</Link>
						</p>
					</div>
				</div>
				<div class="py-5 text-center">
					<p class="infoPara">
						Registering for this site allows you to access your order status and history. Just
						fill in the
						<br />
						fields below, and we'll get a new account set up for you in no time. We will only ask
						you
						<br />
						for information necessary to make the purchase process faster and easier.
					</p>
					<p class="py-4 disclaimerPara">
						By Signing up or logging in, you agree to our{' '}
						<Link to="/terms" className="text-decoration-none fontSemibold">
							Terms and Conditions
						</Link>
					</p>
				</div>
				<div className="py-5"></div>
				<div className="py-4"></div>
			</Offcanvas.Body>
		</Offcanvas>
	)
}
