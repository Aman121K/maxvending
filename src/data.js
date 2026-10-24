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

// Spec labels shown on every machine page, in this order.
export const SPEC_ROWS = [
  ['dimension', 'Machine dimension (W×D×H)'],
  ['options', 'No. of beverage options'],
  ['premix', 'Premix capacity (each lane)'],
  ['water', 'Water tank capacity'],
  ['rate', 'Dispensing rate'],
  ['weight', 'Weight of machine'],
  ['load', 'Max. load'],
  ['power', 'Power supply'],
  ['clean', 'Auto cleaning'],
  ['filling', 'Water filling'],
  ['body', 'Machine body'],
  ['top', 'Top cover'],
  ['boiler', 'Boiler capacity'],
  ['chiller', 'Chiller tank capacity'],
  ['interlock', 'Temperature interlocking'],
  ['counters', 'Digital counters (each lane)'],
  ['hotwater', 'Hot water option'],
  ['password', 'Password locking'],
  ['halfcup', 'Half cup facility'],
]

// Premix machines. Specifications are from the Max Vending catalogue and product pages.
export const PRODUCTS = [
  {
    slug: '4-lane', name: '4 Lane', tag: '2 Hot & 2 Cold', img: '/img/products/4-lane.png',
    summary: 'Four-lane machine with two hot and two cold (flexi) options and a 7 litre chiller tank.',
    drinks: ['Coffee', 'Tea', 'Lemon Tea', 'Soup'],
    specs: {
      dimension: '400 × 685 × 640 mm', options: '2 Hot & 2 Cold (Flexi)', premix: '1.2 kg', water: '20 litres',
      rate: 'Hot 5 / Cold 3 cups per min', weight: '42 kg', load: '2.8 kW', power: '230V AC, 15A', clean: 'Yes',
      filling: 'Bubble top', body: 'GI sheet', top: 'Stainless steel', boiler: '2.0 litres (insulated)', chiller: '7 litres',
      interlock: 'Yes', counters: 'Yes', password: 'Yes', halfcup: 'Yes',
    },
  },
  {
    slug: 'robo-4-6-lane', name: 'Robo', tag: '4 / 6 Lane', img: '/img/products/robo-4-6-lane.png',
    summary: 'Robo with 4 or 6 beverage options and a 2.60 litre insulated boiler, dispensing 6–8 cups per minute.',
    drinks: ['Coffee', 'Tea', 'Lemon Tea', 'Soup'],
    specs: {
      dimension: '400 × 450 × 620 mm', options: '4 / 6', premix: '1.2 kg', water: '20 litres (bubble top)',
      rate: '6–8 cups per min', weight: '25 kg', load: '2.2 kW', power: '230V AC, 15A', clean: 'Yes',
      filling: 'Bubble top / pump', body: 'GI sheet', top: 'Stainless steel / GI sheet', boiler: '2.60 litres (insulated)',
      interlock: 'Yes', counters: 'Yes', hotwater: 'Yes', password: 'Yes', halfcup: 'Yes',
    },
  },
  {
    slug: 'robo-2-3-lane', name: 'Robo', tag: '2 / 3 Lane', img: '/img/products/robo-2-3-lane.png',
    summary: 'Compact Robo with 2 or 3 beverage options, dispensing 6–8 cups per minute.',
    drinks: ['Coffee', 'Tea', 'Lemon Tea'],
    specs: {
      dimension: '330 × 470 × 620 mm', options: '2 / 3', premix: '1.2 kg', water: '20 litres (bubble top)',
      rate: '6–8 cups per min', weight: '22 kg', load: '2.2 kW', power: '230V AC, 15A', clean: 'Yes',
      filling: 'Bubble top', body: 'GI sheet', top: 'Stainless steel', boiler: '2.60 litres (insulated)',
      interlock: 'Yes', counters: 'Yes', hotwater: 'Yes', password: 'Yes', halfcup: 'Yes',
    },
  },
  {
    slug: 'joy-2-3-lane', name: 'Joy', tag: '2 / 3 Lane', img: '/img/products/joy-2-3-lane.png',
    summary: 'Slim Joy with 2 or 3 beverage options in a 230 mm wide body, weighing 16 kg.',
    drinks: ['Coffee', 'Tea', 'Lemon Tea'],
    specs: {
      dimension: '230 × 430 × 630 mm', options: '2 / 3', premix: '1.2 kg', water: '20 litres (bubble top)',
      rate: '4–5 cups per min', weight: '16 kg', load: '1.7 kW', power: '230V AC, 15A', clean: 'Yes',
      filling: 'Bubble top / pump', body: 'GI sheet', top: 'GI sheet', boiler: '2.10 litres (insulated)',
      interlock: 'Yes', counters: 'Yes', hotwater: 'Yes', password: 'Yes',
    },
  },
  {
    slug: 'cute-2-lane', name: 'Cute', tag: '2 Lane', img: '/img/products/cute-2-lane.png',
    summary: 'The smallest Max machine: 200 mm wide and 15 kg, for cabins and small spaces.',
    drinks: ['Coffee', 'Tea'],
    specs: {
      dimension: '200 × 450 × 630 mm', options: '2 / 3', premix: '1.2 kg', water: '20 litres (bubble top)',
      rate: '3–5 cups per min', weight: '15 kg', load: '1.7 kW', power: '230V AC, 15A', clean: 'Yes',
      filling: 'Bubble top / pump', body: 'GI sheet', top: 'GI sheet', boiler: '1.60 litres (insulated)',
      interlock: 'Yes', counters: 'Yes', hotwater: 'No', password: 'Yes', halfcup: 'Yes',
    },
  },
]

// Bean to Cup machines. Add each model here and its card and detail page appear automatically
// at /bean-to-cup and /bean-to-cup/<slug>. Use the same shape as PRODUCTS above:
// { slug, name, tag, img, summary, drinks: [], specs: { ...keys from SPEC_ROWS } }
export const BEAN_MACHINES = []

export const DRINK_ICONS = {
  Coffee: '/img/drinks/coffee.png',
  Tea: '/img/drinks/tea.png',
  'Lemon Tea': '/img/drinks/lemon.png',
  Soup: '/img/drinks/soup.png',
}

export const FEATURES = [
  { icon: '/img/icons/onsite.png', title: 'On-site Delivery', text: 'Machines delivered and installed right at your location, ready to serve.' },
  { icon: '/img/icons/trained-staff.png', title: 'Qualified Engineers', text: 'A dedicated team of trained engineers to keep every machine running.' },
  { icon: '/img/icons/maintenance.png', title: 'Three Decades of Experience', text: 'Decades of know-how in designing and manufacturing vending machines.' },
]

export const STATS = [
  { n: 30, suffix: '+', label: 'Years of experience' },
  { n: 5, suffix: '', label: 'Premix machine models' },
  { n: 40, suffix: '+', label: 'Distribution partners' },
]

export const CLIENTS = Array.from({ length: 44 }, (_, i) => i + 1).filter((n) => n !== 4)

export const HOURS = 'Mon – Sat, 10:00 am – 8:00 pm'
export const ADDRESS = 'B-40, G Floor, Moti Nagar, New Delhi – 110015, India'
export const LANDLINES = ['011 25178283', '25413170', '45037238']
