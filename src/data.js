export const PHONE = '+919810178666'
export const PHONE_LABEL = '+91-981 0178 666'
export const EMAIL = 'pankaj@maxvending.in'

export const NAV = [
  ['Home', '/'],
  ['About', '/about'],
  ['Products', '/products'],
  ['Gallery', '/gallery'],
  ['Enquiry', '/enquiry'],
  ['Contact', '/contact'],
]

export const PRODUCTS = [
  { slug: '4-lane', name: '4 Lane', tag: '2 Hot & 2 Cold', lanes: '4 lanes', type: 'Hot & cold', best: 'Busy offices, malls, high-footfall spots', img: '/img/gallery/1.jpg', desc: 'Our flagship premix machine with four lanes — two hot and two cold options — built for busy offices and high-footfall spots.' },
  { slug: 'robo-4-6-lane', name: 'Robo', tag: '4 / 6 Lane', lanes: '4 or 6 lanes', type: 'Premix', best: 'Large workplaces, factories, institutions', img: '/img/gallery/2.jpg', desc: 'High-capacity Robo with 4 or 6 lanes for larger workplaces, factories and institutions that need more variety.' },
  { slug: 'robo-2-3-lane', name: 'Robo', tag: '2 / 3 Lane', lanes: '2 or 3 lanes', type: 'Premix', best: 'Small and mid-size offices', img: '/img/gallery/3.jpg', desc: 'Compact Robo with 2 or 3 lanes. A reliable all-rounder for small and mid-size offices.' },
  { slug: 'joy-2-3-lane', name: 'Joy', tag: '2 / 3 Lane', lanes: '2 or 3 lanes', type: 'Premix', best: 'Offices, showrooms, clinics', img: '/img/gallery/4.jpg', desc: 'Joy brings a stylish finish and easy operation with 2 or 3 lanes of premix tea and coffee.' },
  { slug: 'cute-2-lane', name: 'Cute', tag: '2 Lane', lanes: '2 lanes', type: 'Premix', best: 'Cabins, small shops, reception areas', img: '/img/gallery/5.jpg', desc: 'Small footprint, big taste. Cute is the perfect 2-lane starter machine for cabins and small shops.' },
]

export const FEATURES = [
  { icon: '/img/icons/onsite.png', title: 'On-site Delivery', text: 'Machines delivered and installed right at your location, ready to serve.' },
  { icon: '/img/icons/trained-staff.png', title: 'Qualified Engineers', text: 'A dedicated team of trained engineers to keep every machine running.' },
  { icon: '/img/icons/maintenance.png', title: 'Three Decades of Experience', text: 'Decades of know-how in designing and manufacturing vending machines.' },
]

export const STATS = [
  { n: 30, suffix: '+', label: 'Years of experience' },
  { n: 5, suffix: '', label: 'Premix machine models' },
  { n: 40, suffix: '+', label: 'Clients served' },
]

export const CLIENTS = Array.from({ length: 44 }, (_, i) => i + 1).filter((n) => n !== 4)

export const HOURS = 'Mon – Sat, 10:00 am – 8:00 pm'
export const ADDRESS = 'B-40, G Floor, Moti Nagar, New Delhi – 110015, India'
export const LANDLINES = ['011 25178283', '25413170', '45037238']
