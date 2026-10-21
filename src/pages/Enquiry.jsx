import { Phone, Mail } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import EnquiryForm from '../components/EnquiryForm'
import { PHONE, PHONE_LABEL, EMAIL } from '../data'

export default function Enquiry() {
  return (
    <>
      <PageHero eyebrow="Enquiry" title="Tell us what you need" crumbs={['Home', '/', 'Enquiry']}>Our team will get back with the best options and pricing.</PageHero>
      <section className="enquiry">
        <div className="container enq-grid">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h2 className="title">Let's find the right machine for you.</h2>
            <div style={{ marginTop: 28, display: 'grid', gap: 14 }}>
              <a href={`tel:${PHONE}`} style={{ display: 'flex', gap: 12, alignItems: 'center', fontWeight: 600 }}><Phone size={20} color="#d8232a" /> {PHONE_LABEL}</a>
              <a href={`mailto:${EMAIL}`} style={{ display: 'flex', gap: 12, alignItems: 'center', fontWeight: 600 }}><Mail size={20} color="#d8232a" /> {EMAIL}</a>
            </div>
          </Reveal>
          <Reveal i={2}><EnquiryForm /></Reveal>
        </div>
      </section>
    </>
  )
}
