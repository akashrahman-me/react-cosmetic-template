import FooterHeading from '../components/FooterHeading'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MBNavbar from '../components/MBNavbar'
import MBFooter from '../components/MBFooter'
import useWidth from '../hooks/useWidth'
import common from '../common.json'

export default function Returns() {
	const width = useWidth()

	return (
		<>
			{width >= 768 ? <Navbar /> : <MBNavbar searchButton={false} />}
			<FooterHeading title="RETURNS &amp; REFUNDS" />
			<section className="footer-page-body px-0 px-md-5 mt-5 pb-5 pb-md-0">
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Authenticity Guarantee </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						At example.com, we ONLY stock authentic products. All our items are genuine and are
						sourced directly from the manufacturer or from their authorized distributors. Prior to
						shipping, we do several levels of rigorous quality checks, hence eliminating any
						chances of counterfeit products. If you have any concerns about the authenticity of
						any of the items you have purchased from us or are considering purchasing, please
						contact us directly by emailing us at{' '}
						<a href={`mailto:${common.email}`}> {common.email} </a> and we shall be happy to
						address your concerns.
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}>
						{' '}
						Returns policy for Full-Size Products{' '}
					</h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						example.com follows a transparent 'No Questions Asked' returns policy for all
						full-size products bought from our online store. You can return the unused products
						you have ordered within 14 days of the date of receipt. Please note that used products
						cannot be returned. To return the unused goods, please email us at{' '}
						<a href={`mailto:${common.email}`}> {common.email} </a>
						and we will walk you through the process till completion. Special instructions for
						Cosmetics: Products should not have been tried or used and the packaging should not
						have been tampered in any way.Special instructions for reverse pickup: The reverse
						product request will be assigned within 24-48 hours and the product will be picked in
						another 2-5 working days. After the product is picked along with the packaging box,
						the delivery executive will hand over the invoice. We will need a picture of this
						invoice to be shared with us on{' '}
						<a href={`mailto:${common.email}`}> {common.email} </a>
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Refunds Policy </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						Refunds are processed in a maximum of 15 days from the date on which example.com
						receives returned goods. In case of prepaid order through Credit Card, Debit Card, or
						Net Banking, the amount will be refunded back to the account from which it was paid
						within 3-5 working days. In case of Cash-on-Delivery order, a refund cheque will be
						deposited in your bank account in favor of the “Billing Name” used while placing the
						order or bank transfer will be made for which certain details need to be provided over
						email (hello@example.com), the amount will be refunded back to the account from which
						it was paid within 3-5 working days.Please note that Cash-on-Delivery charges and
						Shipping Charges (if applicable) are not refundable.
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Cancellation policy </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						An order can be cancelled only up to it is in 'Pending' state. Once we start
						processing, it can not be cancelled.you will have to send us an email on{' '}
						<a href={`mailto:${common.email}`}> {common.email} </a>
						with reasons for the cancellation.Once you request the cancellation of item(s) in your
						order, it will take us a maximum of 1-2 business days to cancel the order You will be
						notified of the same by email.
					</div>
				</section>
				<section>
					<h4 style={{ fontFamily: 'Poppins, sans-serif' }}> Note: </h4>
					<div style={{ fontFamily: 'Poppins, sans-serif' }}>
						Any single product in the kit/set cannot be replaced or returned.
					</div>
				</section>
			</section>
			{width >= 768 ? <Footer /> : <MBFooter />}
		</>
	)
}
