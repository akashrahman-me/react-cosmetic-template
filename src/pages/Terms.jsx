import FooterHeading from '../components/FooterHeading'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MBNavbar from '../components/MBNavbar'
import MBFooter from '../components/MBFooter'
import useWidth from '../hooks/useWidth'
import common from '../common.json'

export default function Terms() {
	const width = useWidth()

	return (
		<>
			{width >= 768 ? <Navbar /> : <MBNavbar searchButton={false} />}
			<FooterHeading title="TERMS &amp; CONDITIONS" />
			<section className="footer-page-body px-0 px-md-5 mt-5 pb-5 pb-md-0">
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Introduction </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							{common.domain} website ("Website") and {common.textdomain} App (“Android or iOS
							Mobile Application”) are Internet based content and e-commerce portal
							headquartered at Vellvette Lifestyle Pvt. Ltd.
						</p>{' '}
						<p>
							Use of the Website and/or App is offered to you conditioned on acceptance without
							modification of all the terms, conditions and notices contained in these Terms, as
							may be posted on the Website and/or App from time to time. {common.textdomain} at
							its sole discretion reserves the right not to accept a User from registering on
							the Website and/or App without assigning any reason thereof.
						</p>
						<p>
							Except where additional terms and conditions are provided which are product
							specific, these terms and conditions supersede all previous representations,
							understandings, or agreements and shall prevail notwithstanding any variance with
							any other terms of any order submitted. By using the services of{' '}
							{common.textdomain}, you agree to be bound by the Terms &amp; Conditions.
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}>
						{' '}
						User Account, Password, and Security{' '}
					</h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							Use of the Site and/or App is available only to persons who can form legally
							binding contracts under applicable law. Persons who are 'incompetent to contract'
							within the meaning of the Indian Contract Act, 1872 including un-discharged
							insolvents etc. are not eligible to use the Site. If you are a minor i.e. under
							the age of 18 years but at least 13 years of age you may use this Site and/or App
							only under the supervision of a parent or legal guardian who agrees to be bound by
							these Terms of Use. If your age is below that of 18 years your parents or legal
							guardians can transact on behalf of you if they are registered users. You are
							prohibited from purchasing any material which is for adult consumption the sale or
							purchase of which to/by minors are strictly prohibited.
						</p>
						<br />
						<p>
							You will receive a username and password for your account upon completing the
							Website's or App’s registration process, or alternatively you can choose to browse
							through an existing Gmail or Facebook account by providing necessary permissions.
							You are responsible for maintaining the confidentiality of the password and
							account, and are fully responsible for all activities that occur under your
							password or account. You agree to (a) immediately notify {common.textdomain} of
							any unauthorized use of your password or account or any other breach of security,
							and (b) ensure that you exit from your account at the end of each session.{' '}
							{common.textdomain}
							Cosmetics cannot and will not be liable for any loss or damage arising from your
							failure to comply with the above mentioned guidelines or maintain security of your
							account.
						</p>
						<br />
						<p>
							By using website and/or App, you agree not to host, display, upload, modify,
							publish, transmit, update or share any information that:
						</p>
						<p>i. belongs to another person;</p>
						<p>
							ii. infringes upon another person’s copyright, trademark, patent or other
							propriety rights;
						</p>
						<p>
							iii. is harmful to minors, harassing, blasphemous defamatory, obscene, invasive of
							another’s privacy; or
						</p>
						<p>iv. impersonate another person.</p>
						<br />
						<p>
							By registering to our website or App, you agree to receive marketing and
							promotional communication from {common.textdomain} via SMS, WhatsApp, email, and
							any other form of notification(s).
						</p>
						<br />
						<p>Limited instances where we may share your personal information include:</p>
						<br />
						<p>
							When we have your consent. This includes sharing information with Facebook when
							you’ve chosen to link it to your {common.textdomain} account or publish your
							activity on {common.textdomain} to your wall.
						</p>
						<br />
						<p>
							We may employ third party companies or individuals to process personal information
							on our behalf based on our instructions and in compliance with this Privacy
							Policy. In addition, some of the information we request may be collected by third
							party providers on our behalf.
						</p>
						<br />
						<p>
							If we believe that disclosure is reasonably necessary to comply with a law,
							regulation or legal request; to protect the safety, rights, or property of the
							public, any person, or {common.textdomain}; or to detect, prevent, or otherwise
							address fraud, security or technical issues.
						</p>
						<br />
						<p>
							We may engage in a merger, acquisition, bankruptcy, dissolution, reorganization,
							or similar transaction or proceeding that involves the transfer of the information
							described in this Policy.
						</p>
						<br />
						<p>
							We may also share aggregated or non-personally identifiable information with our
							partners or others. For example, we may tell a business using {common.textdomain}{' '}
							how many people viewed any product or category of products or even most popular
							sold brand from our website, most searched color etc.
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Product use &amp; services </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							The products and services available on the web and app Platform, and the samples,
							if any,that Platform may provide you, are for your personal and/or professional
							use only. The products or services, or samples thereof, which you may receive from
							us, shall not be sold or resold for any/commercial reasons.
						</p>
						<p>
							It is advised that consumers with allergies should always read a product's
							ingredient statement before use.
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Pricing and offer information </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							{common.textdomain} strives to provide accurate product and pricing information,
							however errors may occur.
						</p>
						<p>
							Prices and availability of the products and services provided or offered on the
							site and/or app are subject to change without prior notice and at the sole
							discretion of company
						</p>
						<p>
							Products offered as GWP (Gift with Purchase) are subjected to availability of
							exact variant
						</p>
						<p>
							Company reserves all rights to withdraw any ongoing offer and/or promotion without
							prior notice
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Payments </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							Mode of payment - Payments for the products available on Site and app may be made
							in the following ways:
						</p>
						<p>
							- UPI, Credit Cards, Debit Cards, Net Banking, Wallets, e-Gift cards, and reward
							points.
							<br />- Online payments are instant payment options and recommended to ensure
							faster processing of your order.
							<br />- Cash On Delivery option is available for limited areas only.
						</p>
						<p>
							All online payments are handled by authorized Payment Gateways considering
							transaction security measures mandated by RBI and other regulatory authorities.
							{common.textdomain} is not responsible for any breach of information, or
							inappropriate transactions.
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Shipping/Delivery policy </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							Confirmed orders will be shipped within 24 to 48 working hours. Once shipped,
							they'll be delivered to you within 2-5 working days. Estimated delivery time may
							change due to the customer’s geographical location, shipping destination, product
							availability and courier partner’s delivery time &amp; location. A delivery fee of
							Rs. 49 is applicable on orders below Rs. 500.
						</p>
						<p>
							In case of one or more defective products in your order, please register a single
							complaint as the return/replacement will be arranged only once.
						</p>
						<p>Customers are advised not to accept tampered or damaged shipments.</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Cancellation of unusual orders </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							There may be certain orders that {common.textdomain} cannot accept, and therefore,
							we reserve the right, at our sole discretion, to cancel any order. Some reasons
							may include errors in pricing, certain issues identified by our fraud avoidance
							department or any order placed using a technological glitch/loophole, etc. We will
							notify you in case your order has been canceled fully or partially or if any
							additional information is required to ship your order.
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}>
						{' '}
						Refunds for cancelation of unusual orders{' '}
					</h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							Refunds are processed in a maximum of 3 to 5 working days from the date on which
							example.com cancels the order. In case of prepaid orders through Credit Card,
							Debit Card or Net Banking, the amount will be transferred back to the account from
							which it was paid. In the case of Cash-on-Delivery order, a refund cheque will be
							deposited in your bank account in favor of the “Billing Name” used while placing
							the order or an NEFT transfer will be attempted. Please note that Cash-on-Delivery
							charges and Shipping Charges (if applicable) are not refundable.
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Privacy Policy </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							The User hereby consents, expresses and agrees that he has read and fully
							understands the Privacy Policy of {common.textdomain}’ Website and App. The user
							further consents that the terms and contents of such Privacy Policy are acceptable
							to him. The Privacy Policy details can be viewed at our Privacy Policy Document.
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Grievance Officer </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							In accordance with Information Technology Act 2000 and rules made there under, the
							name and contact details of the Grievance Officer are provided below:
						</p>
						<p>Ms. Annie Kotwal</p>
						<p>{common.textdomain}</p>
						<p> Customer Delight Team | Senior Manager </p>
						<p>
							<a href={`mailto:${common.email}`}> ${common.email}</a>
						</p>
						<p>Phone: ${common.phone}</p>
						<p>Time: Mon - Fri (9:00 am to 6:00 pm)</p>
						<p>
							Address : B - 1004, Palatial Heights, Chandivali Farm Road, Andheri - East, Mumbai
							- 400072
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}>
						{' '}
						Copyright and Intellectual Property{' '}
					</h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							All information displayed, transmitted or carried on example.com is protected by
							copyright and other intellectual property laws. This site and app is designed,
							updated and maintained independently by {common.textdomain}. You should not
							modify, publish, transmit, transfer, sell, reproduce, create derivative work from,
							distribute, perform, display or in any way commercially exploit any of the content
							at {common.domain}.
						</p>
						<p>
							If you have any questions regarding these Terms and Conditions, please email us at
							{common.email}
						</p>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Terms and Conditions for FAQs- </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						<p>
							- Offer valid on select products.- Cannot be clubbed with another offer.
							<br /> - Complimentary gifts (GWP) will not be applicable with this offer.
							<br /> - Offer is applicable only on specific collection page.
							<br />- IMP: While products listed under our clearance section are perfectly safe
							for usage they maybe within 12 months of the expiry of the recommended shelf life.
							You are requested to factor in the same while planning your purchase. Thank you
							for shopping with us!
						</p>
					</div>
				</section>
			</section>
			{width >= 768 ? <Footer /> : <MBFooter />}
		</>
	)
}
