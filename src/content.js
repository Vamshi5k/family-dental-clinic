export const clinic = {
  name: 'Family Dental',
  location: 'Kachiguda, Hyderabad',
  address:
    'Shop No. 5 & 6, Hi-Line Pratap Apartments, 3-4-416, Basant Talkies Rd, Kachiguda, Hyderabad 500027',
  landmark: 'beside Raja Rajeshwari Medical Hall',
  phone: '093914 64696',
  tel: 'tel:+919391464696',
  whatsapp:
    'https://wa.me/919391464696?text=Hello%20Family%20Dental%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  telephone: '+919391464696',
  addressLocality: 'Kachiguda, Hyderabad',
  addressRegion: 'Telangana',
  postalCode: '500027',
  addressCountry: 'IN',
  schemaStreetAddress:
    'Shop No. 5 & 6, Hi-Line Pratap Apartments, 3-4-416, Basant Talkies Rd, beside Raja Rajeshwari Medical Hall',
  openingHours: ['Mo-Su 10:00-13:00', 'Mo-Su 17:30-20:30'],
  rating: '5.0',
  reviewCount: 135,
  years: 16,
  dentists: 2,
  fee: 'Rs. 300', // TODO(client): confirm
  hours: 'Mon-Sun 10:00 AM-1:00 PM and 5:30 PM-8:30 PM',
  doctor: 'Dr. Akshata Ekbote Sachdeva', // TODO(client): confirm
  degree: 'BDS', // TODO(client): confirm
  college: 'Bangalore Institute of Dental Sciences Hospital, 2003', // TODO(client): confirm
};

// TODO(client): confirm: Unknown second dentist name; do not infer or replace with a fictional name.
// TODO(client): confirm: Real review text and reviewer names are not supplied; current review cards are labelled placeholders.
// TODO(client): confirm: The clinic's social links, real photos, and verified Google Maps embed URL are not supplied.
export const treatments = [
  {
    name: 'Root Canal Treatment',
    description: 'Care for a tooth with an infected or inflamed inner pulp.',
    icon: 'tooth',
    featured: true,
  },
  {
    name: 'Cavity Fillings',
    description: 'Restore a tooth affected by decay with a filling.',
    icon: 'sparkles',
  },
  {
    name: 'Dental Implants',
    description: 'A treatment option to replace a missing tooth.',
    icon: 'implant',
  },
  {
    name: 'Laser Dentistry',
    description: 'Laser technology can be used for selected dental procedures.',
    icon: 'laser',
  },
  {
    name: "Kids' Dentistry",
    description: 'Dental care for children in a family-friendly setting.',
    icon: 'kids',
  },
  {
    name: 'Check-ups and Cleaning',
    description: 'Routine visits to check your teeth and clean them.',
    icon: 'check',
  },
];

export const reassurance = [
  [
    'Gentle, patient care',
    'Patients describe the dentists as gentle and patient throughout their visit.',
  ],
  [
    'Procedures explained first',
    'Patients describe procedures being explained before treatment begins.',
  ],
  ['Great with kids', 'Patients describe a welcoming experience for children.'],
  ['A hygienic clinic', 'Patients describe the clinic as hygienic and well cared for.'],
  [
    'Comfort-focused technology',
    'Patients mention technology used with comfort in mind; results vary by treatment.',
  ],
];

// Clearly labelled placeholders: use no invented reviewer identity or attributed quotations.
// TODO(client): confirm real review quotes and patient names
export const reviews = [
  {
    label: 'Placeholder review 1',
    quote:
      'Patients describe gentle, patient dentists who take time to explain procedures before treatment.',
    source: 'Patient feedback theme',
  },
  {
    label: 'Placeholder review 2',
    quote: 'Patients describe a welcoming experience for children and a hygienic clinic.',
    source: 'Patient feedback theme',
  },
  {
    label: 'Placeholder review 3',
    quote: 'Patients describe technology used with comfort in mind during dental care.',
    source: 'Patient feedback theme',
  },
];

export const navLinks = [
  ['Treatments', '#treatments'],
  ['Why Us', '#why-us'],
  ['Doctor', '#doctor'],
  ['Reviews', '#reviews'],
  ['Visit', '#visit'],
];

// Replace these search/map URLs with verified clinic profile links when provided.
// TODO(client): confirm verified Google reviews page and Google Maps place/embed URL.
export const externalLinks = {
  googleReviews: 'https://www.google.com/search?q=Family+Dental+Kachiguda+Hyderabad', // TODO(client): confirm
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`, // TODO(client): confirm
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`, // TODO(client): confirm
};

export const seo = {
  title: 'Family Dental | Dentist in Kachiguda, Hyderabad',
  description:
    "Family Dental in Kachiguda, Hyderabad offers Root Canal Treatment, Cavity Fillings, Dental Implants, Laser Dentistry, Kids' Dentistry and check-ups. Call or book via WhatsApp.",
  socialDescription:
    'Carefully explained dental care for your whole family in Kachiguda, Hyderabad. Book your appointment on WhatsApp.',
};

// Static interface copy lives here so clinic wording and calls to action stay easy to edit.
export const siteCopy = {
  skipLink: 'Skip to content',
  navbar: {
    homeHref: '#home',
    homeAria: 'Family Dental home',
    navigationAria: 'Main navigation',
    book: 'Book on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'DENTAL CARE IN KACHIGUDA, HYDERABAD',
    titleBefore: 'Gentle dental care for your ',
    titleEmphasis: 'whole',
    titleAfter: ' family.',
    description: 'About 16 years of careful, clearly explained care for families in Kachiguda.',
    book: 'Book on WhatsApp',
    call: 'Call',
    ratingSuffix: 'on Google',
    reviewsSuffix: 'reviews',
    starLabel: '5 out of 5 stars',
    artLabel: 'Decorative tooth illustration and clinic highlights',
    toothAria: 'Illustration of a tooth',
    ratingCard: 'Google rating',
    kidsCard: 'Gentle with kids',
    hoursCard: 'Open 7 days',
  },
  stats: {
    ariaLabel: 'Clinic at a glance',
    items: [
      { value: 16, suffix: '+', label: 'Years in healthcare' },
      { value: 135, suffix: '+', label: 'Google reviews' },
      { value: 5, suffix: '.0', label: 'Google rating' },
      { value: 2, suffix: '', label: 'Dentists' },
    ],
  },
  treatments: {
    eyebrow: 'Care for every smile',
    title: 'The right care, thoughtfully given.',
    description:
      'Explore the dental care available at Family Dental. Message us to ask what may suit your needs.',
    ask: 'Ask about this',
    marqueeAria: 'Available treatments',
  },
  whyUs: {
    eyebrow: 'A little more at ease',
    title: 'Care that listens and explains.',
    description:
      'Patients describe gentle, patient care and procedures explained before treatment.',
    ratingSuffix: 'Google rating from',
  },
  doctor: {
    eyebrow: 'Meet your dentist',
    initials: 'AES', // TODO(client): confirm
    portraitAria: 'Initials AES placeholder; no photograph supplied',
    portraitCaption: 'A familiar face for your family',
    biography:
      'Dr. Akshata Ekbote Sachdeva earned her BDS from Bangalore Institute of Dental Sciences Hospital in 2003.',
    healthcareNote: 'Family Dental has about 16 years in healthcare.',
    secondDentist: 'Second dentist', // TODO(client): confirm
    nameNotProvided: 'Name not provided', // TODO(client): confirm
    teamAria: 'Ask about the dental team',
  },
  reviews: {
    eyebrow: 'Kind words, shared',
    title: 'A little reassurance from patients.',
    descriptionPrefix: 'A Google rating of',
    descriptionSuffix: 'from',
    placeholderNotice:
      'Review cards below are clearly labelled placeholders, not verbatim reviews.',
    ratingSuffix: 'Google rating',
    starsAria: '5 out of 5 stars',
    chooseAria: 'Choose review',
    showReview: 'Show',
    previous: 'Previous review',
    next: 'Next review',
    googleLink: 'Read all reviews on Google',
  },
  booking: {
    eyebrow: 'Simple to get started',
    title: 'How to book',
    start: 'Start a WhatsApp chat',
    steps: [
      { title: 'Message on WhatsApp', copy: 'Tell us you would like to book an appointment.' },
      { title: 'Pick a time', copy: 'Choose a suitable time during our opening hours.' },
      { title: 'Visit and relax', copy: 'Come by Family Dental in Kachiguda for your visit.' },
    ],
    consultation: 'Consultation fee',
    hoursLabel: 'Clinic hours',
    hoursShort: 'Mon-Sun · 10 AM-1 PM & 5:30-8:30 PM',
    payment: 'Payment',
    paymentAccepted: 'UPI accepted',
  },
  visit: {
    eyebrow: 'Find us in Kachiguda',
    title: 'A friendly visit starts here.',
    openNow: 'Open now',
    closed: 'Closed',
    indiaTime: 'India time',
    cardTitle: 'Come by Family Dental',
    copyAddress: 'Copy address',
    copiedAddress: 'Address copied',
    hoursTitle: 'Opening hours',
    days: 'Monday – Sunday',
    morningHours: '10:00 AM – 1:00 PM',
    eveningLabel: 'Evening',
    eveningHours: '5:30 PM – 8:30 PM',
    mapTitle: 'Map search for Family Dental in Kachiguda, Hyderabad',
    fallbackTitle: 'If the map does not load',
    fallbackCopy: 'Open the address in Google Maps directions instead.',
    directions: 'Get Directions',
    copyFallbackSubject: 'Family Dental address',
  },
  finalCta: {
    eyebrow: 'We’re here when you need us',
    title: 'Your healthiest smile starts with one message.',
    whatsapp: 'WhatsApp us',
    call: 'Call the clinic',
  },
  footer: {
    summary: 'Family dental care in Kachiguda, Hyderabad. About 16 years in healthcare.',
    explore: 'Explore',
    visit: 'Visit us',
    book: 'Book via WhatsApp',
    bookingLink: 'How to book',
    bookingHref: '#booking',
    navigationAria: 'Footer navigation',
  },
  floating: {
    bookAria: 'Book an appointment on WhatsApp',
    quickActions: 'Quick contact actions',
    call: 'Call',
    whatsapp: 'WhatsApp to book',
  },
};
