export const clinic = {
  name: 'Karthikeya Dental Care',
  location: 'Narayanguda, Hyderabad',
  address:
    'Shop No. 3-4-428/A, YMCA Circle, beside Metro Station Pillar No. B1164, opposite Sai Ram Hospital, Narayanguda, Hyderabad 500029',
  landmark: 'beside Metro Station Pillar No. B1164, opposite Sai Ram Hospital',
  phone: '096666 30468', // TODO(client): confirm, found on one listing only
  tel: 'tel:+919666630468', // TODO(client): confirm
  whatsapp:
    'https://wa.me/919666630468?text=Hello%20Karthikeya%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment.', // TODO(client): confirm number
  telephone: '+919666630468', // TODO(client): confirm
  addressLocality: 'Narayanguda, Hyderabad',
  addressRegion: 'Telangana',
  postalCode: '500029',
  addressCountry: 'IN',
  schemaStreetAddress:
    'Shop No. 3-4-428/A, YMCA Circle, beside Metro Station Pillar No. B1164, opposite Sai Ram Hospital',
  openingHours: ['Mo-Sa 10:00-21:00', 'Su 10:00-13:00'], // TODO(client): confirm Sunday hours
  rating: '5.0',
  reviewCount: 265,
  years: 10,
  dentists: 1, // TODO(client): confirm team size
  fee: 'Ask the clinic', // TODO(client): confirm consultation fee
  hours: 'Mon-Sat 10:00 AM-9:00 PM, Sun 10:00 AM-1:00 PM', // TODO(client): confirm
  doctor: 'Dr. Kanchi Neehar', // TODO(client): confirm spelling and title
  degree: 'Endodontist', // TODO(client): confirm degree
  college: 'Root canal specialist', // TODO(client): replace with college and year
};

// TODO(client): confirm: Qualifications, college and year for the doctor are not supplied.
// TODO(client): confirm: Real review text and reviewer names are not supplied; current review cards are labelled placeholders.
// TODO(client): confirm: The clinic's social links, real photos, and verified Google Maps embed URL are not supplied.
export const treatments = [
  {
    name: 'Root Canal Treatment',
    description: 'Care for a painful or infected tooth, handled by a root canal specialist.',
    icon: 'tooth',
    featured: true,
  },
  {
    name: 'Wisdom Tooth Extraction',
    description: 'Removal of wisdom teeth that cause pain or crowding.',
    icon: 'implant',
  },
  {
    name: 'Braces',
    description: 'Fitting of braces to help straighten your teeth.',
    icon: 'sparkles',
  },
  {
    name: 'Check-ups and Cleaning',
    description: 'Routine visits to check your teeth and clean them.',
    icon: 'check',
  },
  {
    name: 'Oral Health Care',
    description: 'Treatment for common problems of the teeth, gums and mouth.',
    icon: 'tooth',
  },
  {
    name: 'Dental Consultation',
    description: 'Talk to the dentist about your teeth and the right treatment.',
    icon: 'check',
  },
];

export const reassurance = [
  [
    'Friendly, welcoming service',
    'Patients mention excellent service and a friendly greeting when they arrive.',
  ],
  [
    'A skilled root canal specialist',
    "Many patients appreciate Dr. Neehar's expertise and skill in dental treatment.",
  ],
  [
    'Painless treatment, good conversation',
    'Patients describe painless treatment and good interaction with the dentist.',
  ],
  [
    'Fair, honest pricing',
    'Some patients mention reasonable pricing and no unnecessary cosmetic procedures.',
  ],
  [
    'Quick root canals',
    'A few patients mention root canals finished in a single sitting; time varies by case.',
  ],
];

// Clearly labelled placeholders: use no invented reviewer identity or attributed quotations.
// TODO(client): confirm real review quotes and patient names
export const reviews = [
  {
    label: 'Placeholder review 1',
    quote:
      'Patients describe excellent service, a friendly greeting and a dentist who talks with them.',
    source: 'Patient feedback theme',
  },
  {
    label: 'Placeholder review 2',
    quote: 'Patients describe painless treatment and root canals completed in a single sitting.',
    source: 'Patient feedback theme',
  },
  {
    label: 'Placeholder review 3',
    quote: 'Patients describe reasonable pricing and no unnecessary procedures suggested.',
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
  googleReviews:
    'https://www.google.com/search?q=Karthikeya+Dental+Care+Narayanguda+Hyderabad', // TODO(client): confirm
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`, // TODO(client): confirm
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`, // TODO(client): confirm
};

export const seo = {
  title: 'Karthikeya Dental Care | Dentist in Narayanguda, Hyderabad',
  description:
    'Karthikeya Dental Care in Narayanguda, Hyderabad offers root canal treatment, wisdom tooth extraction, braces, check-ups and cleaning. Call or book via WhatsApp.',
  socialDescription:
    'Friendly, painless-focused dental care in Narayanguda, Hyderabad. Book your appointment on WhatsApp.',
};

// Static interface copy lives here so clinic wording and calls to action stay easy to edit.
export const siteCopy = {
  skipLink: 'Skip to content',
  navbar: {
    homeHref: '#home',
    homeAria: 'Karthikeya Dental Care home',
    navigationAria: 'Main navigation',
    book: 'Book on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'DENTAL CARE IN NARAYANGUDA, HYDERABAD',
    titleBefore: 'Gentle, honest dental care for ',
    titleEmphasis: 'every',
    titleAfter: ' smile.',
    description:
      'About 10 years of friendly, clearly explained care in Narayanguda, with a root canal specialist.',
    book: 'Book on WhatsApp',
    call: 'Call',
    ratingSuffix: 'on Google',
    reviewsSuffix: 'reviews',
    starLabel: '5 out of 5 stars',
    artLabel: 'Decorative tooth illustration and clinic highlights',
    toothAria: 'Illustration of a tooth',
    ratingCard: 'Google rating',
    kidsCard: 'Painless care, patients say',
    hoursCard: 'Open 7 days',
  },
  stats: {
    ariaLabel: 'Clinic at a glance',
    items: [
      { value: 10, suffix: '+', label: 'Years in healthcare' },
      { value: 265, suffix: '+', label: 'Google reviews' },
      { value: 5, suffix: '.0', label: 'Google rating' },
      { value: 180, suffix: '+', label: 'Justdial ratings' },
    ],
  },
  treatments: {
    eyebrow: 'Care for every smile',
    title: 'The right care, thoughtfully given.',
    description:
      'Explore the dental care available at Karthikeya Dental Care. Message us to ask what may suit your needs.',
    ask: 'Ask about this',
    marqueeAria: 'Available treatments',
  },
  whyUs: {
    eyebrow: 'A little more at ease',
    title: 'Friendly care you can trust.',
    description:
      'Patients describe friendly service, painless treatment and fair pricing.',
    ratingSuffix: 'Google rating from',
  },
  doctor: {
    eyebrow: 'Meet your dentist',
    initials: 'KN', // TODO(client): confirm
    portraitAria: 'Initials KN placeholder; no photograph supplied',
    portraitCaption: 'Root canal specialist',
    biography:
      'Dr. Kanchi Neehar is listed as an endodontist, a dentist who specialises in root canal treatment. Patients on Justdial appreciate his expertise and skill.', // TODO(client): confirm wording and qualifications
    healthcareNote: 'Karthikeya Dental Care has about 10 years in healthcare.',
    secondDentist: 'Our care team', // TODO(client): confirm team members
    nameNotProvided: 'Message us to meet the team', // TODO(client): confirm
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
      {
        title: 'Visit and relax',
        copy: 'Come by Karthikeya Dental Care in Narayanguda for your visit.',
      },
    ],
    consultation: 'Consultation fee',
    hoursLabel: 'Clinic hours',
    hoursShort: 'Mon-Sat · 10 AM-9 PM · Sun · 10 AM-1 PM', // TODO(client): confirm
    payment: 'Payment',
    paymentAccepted: 'Google Pay accepted',
  },
  visit: {
    eyebrow: 'Find us in Narayanguda',
    title: 'A friendly visit starts here.',
    openNow: 'Open now',
    closed: 'Closed',
    indiaTime: 'India time',
    cardTitle: 'Come by Karthikeya Dental Care',
    copyAddress: 'Copy address',
    copiedAddress: 'Address copied',
    hoursTitle: 'Opening hours',
    days: 'Monday – Saturday',
    morningHours: '10:00 AM – 9:00 PM',
    eveningLabel: 'Sunday',
    eveningHours: '10:00 AM – 1:00 PM',
    mapTitle: 'Map search for Karthikeya Dental Care in Narayanguda, Hyderabad',
    fallbackTitle: 'If the map does not load',
    fallbackCopy: 'Open the address in Google Maps directions instead.',
    directions: 'Get Directions',
    copyFallbackSubject: 'Karthikeya Dental Care address',
  },
  finalCta: {
    eyebrow: 'We’re here when you need us',
    title: 'Your healthiest smile starts with one message.',
    whatsapp: 'WhatsApp us',
    call: 'Call the clinic',
  },
  footer: {
    summary: 'Dental care in Narayanguda, Hyderabad. About 10 years in healthcare.',
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