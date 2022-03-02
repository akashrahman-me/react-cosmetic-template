import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MBNavbar from '../components/MBNavbar'
import MBFooter from '../components/MBFooter'
import useWidth from '../hooks/useWidth'
import common from '../common.json'

const FAQss = [
	{
		question: 'How do I register for my Account?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'How can I update my profile?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'Is my personal information secure?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'How do I register for my Account1?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'How can I update my profile1?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'Is my personal information secure1?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'How do I register for my Account2?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'How can I update my profile2?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
	{
		question: 'Is my personal information secure3?',
		answer: `Go to ${common.domain},Click on Register link from the top, fill out
      your first name, last name, email address and password and then click on
      create Once you register, you'll need to confirm your email address. We'll
      send you an email with a verification to confirm your account. Once your
      account is verified the account gets activated on the website.`,
	},
]

export default function FAQs() {
	const [faq, setFaq] = useState('')
	const handleFAQ = e => {
		const name = e.currentTarget.name
		faq === name ? setFaq('') : setFaq(name)
	}

	const width = useWidth()

	return (
		<>
			{width >= 768 ? <Navbar /> : <MBNavbar searchButton={false} />}
			<section className="FAQs-container container pb-5 pb-md-0">
				<div className="row py-5">
					<div className="col-12 col-md-6">
						<h4 className="text-center mb-4 text-muted">Freequently Asked question</h4>
						{FAQss.map(FAQ => (
							<div className="FAQs-collapse" key={FAQ.question}>
								<button
									className="btn btn-collapse w-100 text-start d-flex justify-content-between"
									name={FAQ.question}
									onClick={handleFAQ}
								>
									<span>{FAQ.question}</span>
									<span>
										<MdKeyboardArrowDown fontSize={24} />
									</span>
								</button>
								<Collapse in={faq === FAQ.question}>
									<p className="p-2">{FAQ.answer}</p>
								</Collapse>
							</div>
						))}
					</div>
					<div className="col-12 col-md-6">
						<h5 className="color-dark mb-4">Ask a Question</h5>
						<Form>
							<Form.Group className="mb-3" controlId="name">
								<Form.Label>Your Name</Form.Label>
								<Form.Control type="text" className="border-secondary rounded-0 py-2" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="email">
								<Form.Label>Your Email(required)</Form.Label>
								<Form.Control type="email" className="border-secondary rounded-0 py-2" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="email">
								<Form.Label>Your Email(required)</Form.Label>
								<Form.Control
									as="textarea"
									rows={7}
									className="border-secondary rounded-0 py-2"
								/>
							</Form.Group>
							<Button className="FAQs_form-button">ASK A QUESTION</Button>
						</Form>
					</div>
				</div>
			</section>
			{width >= 768 ? <Footer /> : <MBFooter />}
		</>
	)
}
