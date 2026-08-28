import {
  ClinicDetails,
  DoctorInfo,
  Service,
  BeforeAfterCase,
  Testimonial,
  BlogPost,
} from '../types';

export const CLINIC_INFO: ClinicDetails = {
  name: 'Advance Maxillofacial Implant & Dental Clinic',
  tagline: 'Advanced Dental Care & Maxillofacial Excellence in Rawalpindi',
  leadDoctor: 'Dr. Ali Akhtar Khan',
  phone: '+923186966831',
  whatsapp: '+923186966831',
  email: 'info@advancemaxillofacial.com',
  address: {
    line1: '1st Floor, Avalon Plaza, near Cantonment Board Office',
    line2: 'Saddar, Rawalpindi, 46000',
    city: 'Rawalpindi',
    postalCode: '46000',
    country: 'Pakistan',
    fullFormatted:
      '1st Floor, Avalon Plaza, near Cantonment Board Office, Saddar, Rawalpindi, 46000, Pakistan',
  },
  googleMapsUrl: 'https://share.google/DlbcPK9rfZucrXzcn',
  operatingHours: [
    { days: 'Monday – Saturday', hours: '11:00 AM – 09:00 PM' },
    { days: 'Sunday', hours: 'Emergency & By Appointment Only' },
  ],
};

export const DOCTOR_INFO: DoctorInfo = {
  name: 'Dr. Ali Akhtar Khan',
  title: 'Consultant Oral & Maxillofacial Surgeon | Specialist Dental Implantologist',
  credentials: [
    'BDS (Gold Medalist), FCPS (Oral & Maxillofacial Surgery)',
    'Fellow International Congress of Oral Implantologists (ICOI, USA)',
    'Certified in Advanced Bone Grafting & Computer-Guided Surgery',
    'Member Pakistan Medical & Dental Council (PMDC)',
  ],
  specialties: [
    'Precision Dental Implants (Single, Multiple & All-on-4 / All-on-6)',
    'Orthognathic & Corrective Jaw Surgery',
    'Complex Facial Trauma & TMJ Disorder Rehabilitation',
    'Advanced Sinus Floor Elevation & Ridge Augmentation',
    'Cosmetic Smile Makeovers & Porcelain Veneers',
  ],
  experience: '15+ Years of Clinical & Surgical Excellence',
  bio: 'Dr. Ali Akhtar Khan is a leading Oral & Maxillofacial Surgeon and Dental Implantologist renowned for bringing world-class surgical precision and aesthetic dentistry to Rawalpindi & Islamabad. Having performed thousands of successful implant placements and reconstructive jaw procedures, Dr. Ali combines cutting-edge 3D computer-guided technology with a compassionate, painless treatment approach to help patients regain optimal oral health and enduring smile confidence.',
  philosophy:
    'Every smile has a unique anatomy and story. Our practice is founded on strict biological principles, micro-surgical precision, and uncompromising sterilization to provide enduring, natural results without discomfort.',
  memberships: [
    'International Association of Oral & Maxillofacial Surgeons (IAOMS)',
    'Pakistan Association of Oral & Maxillofacial Surgeons (PAOMS)',
    'International Team for Implantology (ITI, Switzerland)',
  ],
  // Highly optimized, professional doctor portrait
  image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=75',
};

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    // Modern dental clinic interior
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1280&q=75',
    badge: 'State-of-the-Art Clinical Suite',
    title: 'Advanced Dental Care & Maxillofacial Excellence',
    subtitle:
      'Led by Dr. Ali Akhtar Khan — Restoring Confidence & Health through Precision Implants and Specialized Care.',
    highlight: 'Cantonment Board Office, Saddar, Rawalpindi',
  },
  {
    id: 'slide-2',
    // Precision implant surgery / surgical theatre
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1280&q=75',
    badge: 'Precision Implantology',
    title: 'Lifetime Dental Implants & 3D Guided Surgery',
    subtitle:
      'Permanent tooth replacement engineered with Swiss titanium fixtures, advanced bone grafting, and immediate loading protocols.',
    highlight: 'Pain-Free Micro-Surgical Techniques',
  },
  {
    id: 'slide-3',
    // Radiant healthy happy smile
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1280&q=75',
    badge: 'Smile Makeovers & Aesthetics',
    title: 'Radiant Aesthetics & Comprehensive Care',
    subtitle:
      'From laser teeth whitening and digital porcelain veneers to corrective jaw alignment tailored to your unique facial profile.',
    highlight: 'Over 5,000+ Happy Restored Smiles',
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'dental-implants',
    title: 'Dental Implants & Prosthetics',
    category: 'implant',
    popular: true,
    shortDescription:
      'Permanent, natural-looking titanium and zirconia tooth replacements with 3D digital precision and high biocompatibility.',
    fullDescription:
      'Our dental implant department utilizes computer-guided 3D surgical planning to replace missing teeth seamlessly. Whether you require a single-tooth implant, multiple restorations, or full-arch rehabilitation (All-on-4 / All-on-6), Dr. Ali Akhtar Khan delivers permanent stability that preserves facial bone structure and restores chewing power effortlessly.',
    benefits: [
      'Lifetime durability with 98.7% clinical success rate',
      'Preserves adjacent natural teeth without filing',
      'Prevents jawbone shrinkage and facial sagging',
      'Looks, feels, and functions exactly like natural teeth',
    ],
    procedureSteps: [
      'Comprehensive 3D CBCT scan and digital treatment simulation',
      'Painless computer-guided implant placement',
      'Osseointegration healing period with temporary aesthetic crown',
      'Custom ceramic/zirconia permanent crown delivery',
    ],
    duration: '30–60 mins per implant',
    recoveryTime: '1–3 days back to normal routine',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 'maxillofacial-surgery',
    title: 'Maxillofacial & Jaw Surgery',
    category: 'surgery',
    popular: true,
    shortDescription:
      'Corrective orthognathic jaw surgery, TMJ disorder treatment, facial trauma management, and impacted surgical extractions.',
    fullDescription:
      'As a certified Maxillofacial Surgeon, Dr. Ali Akhtar Khan specializes in the surgical correction of skeletal jaw discrepancies, severe malocclusions, TMJ pain, cyst & tumor removal, and complex wisdom tooth surgical extractions using minimally invasive micro-surgical techniques.',
    benefits: [
      'Corrects severe underbites, overbites, and facial asymmetry',
      'Relieves chronic TMJ joint pain, clicking, and tension headaches',
      'Significantly improves breathing, airway patency, and chewing efficiency',
      'Performed under strict sterile hospital-grade protocols',
    ],
    procedureSteps: [
      'Orthodontic-surgical joint assessment & 3D facial imaging',
      'Virtual surgical planning (VSP) for sub-millimeter precision',
      'Controlled surgical repositioning under sedation/general anesthesia',
      'Comprehensive post-operative follow-up and rehabilitation',
    ],
    duration: 'Varies based on complexity (45 mins – 2.5 hours)',
    recoveryTime: '5–14 days depending on procedure',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 'root-canal-cosmetic',
    title: 'Root Canal & Restorative Dentistry',
    category: 'cosmetic',
    shortDescription:
      'Single-visit painless rotary endodontics, tooth-colored composite restorations, and high-strength ceramic inlays.',
    fullDescription:
      'Save infected or damaged natural teeth with our microscopic rotary root canal therapy. We remove deep nerve infection thoroughly while maintaining maximum healthy tooth structure, topped with biocompatible composite or porcelain crowns.',
    benefits: [
      'Immediate relief from severe toothache and throbbing pain',
      'Painless single-visit treatment with digital apex locators',
      'Eliminates bacterial infection while preserving the root',
      'Hermetically sealed to prevent reinfection',
    ],
    procedureSteps: [
      'Digital diagnostic X-ray to map canal anatomy',
      'Gentle local anesthesia for total numbness',
      'Rotary cleaning and disinfection of root canals',
      'Thermoplastic gutta-percha obturation & crown placement',
    ],
    duration: '45–60 minutes (usually single session)',
    recoveryTime: 'Instant relief, slight sensitivity 24-48h',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 'teeth-whitening-smile',
    title: 'Teeth Whitening & Smile Makeovers',
    category: 'cosmetic',
    popular: true,
    shortDescription:
      'In-office laser power teeth whitening and ultra-thin porcelain laminate veneers designed for sparkling confidence.',
    fullDescription:
      'Transform discolored, chipped, or uneven teeth with customized aesthetic treatments. Our in-office dental whitening brightens enamel up to 6–8 shades in a single hour, while ultra-thin custom ceramic veneers create a Hollywood-standard aesthetic contour tailored to your smile line.',
    benefits: [
      'Removes deep stains caused by tea, coffee, smoking, and aging',
      'Safe on enamel with desensitizing protective agents',
      'Customized shading matching your natural skin tone',
      'Long-lasting brilliance with simple home maintenance',
    ],
    procedureSteps: [
      'Gingival barrier application to protect gums',
      'Application of medical-grade hydrogen peroxide bleaching gel',
      'Cold LED laser activation in 15-minute cycles',
      'Fluoride polish and shade assessment',
    ],
    duration: '45–60 minutes',
    recoveryTime: 'Immediate results, no downtime',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 'routine-checkups-ortho',
    title: 'Routine Dental Checkups & Orthodontics',
    category: 'ortho',
    shortDescription:
      'Ultrasonic scaling and polishing, clear aligners, Damon braces, digital preventative screenings, and pediatric dental care.',
    fullDescription:
      'Maintain peak oral hygiene and achieve straight teeth with preventative care and modern orthodontic solutions. From painless ultrasonic tartar removal to discreet clear aligners, we care for the whole family with gentle precision.',
    benefits: [
      'Detects cavities and gum issues before they cause pain',
      'Removes stubborn plaque, calculus, and surface discoloration',
      'Straightens crooked teeth discreetly with invisible aligners',
      'Promotes fresh breath and long-term gum stability',
    ],
    procedureSteps: [
      'Oral cavity inspection with intraoral HD camera',
      'Ultrasonic scaler removal of supragingival & subgingival tartar',
      'Air-flow stain removal and diamond polishing paste',
      'Personalized preventative regimen & aligner assessment',
    ],
    duration: '30–45 minutes',
    recoveryTime: 'Zero downtime',
    iconName: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=75',
  },
  {
    id: 'wisdom-tooth-surgery',
    title: 'Impacted Wisdom Tooth Extraction',
    category: 'surgery',
    shortDescription:
      'Minimally invasive surgical removal of horizontally impacted third molars with zero trauma to adjacent nerves.',
    fullDescription:
      'Impacted wisdom teeth can cause severe pain, cysts, crowding, and damage to adjacent second molars. Dr. Ali Akhtar Khan performs atraumatic surgical extractions with high precision, ensuring fast healing and minimal post-op swelling.',
    benefits: [
      'Prevents damage and resorption of adjacent molar roots',
      'Eliminates pericoronitis infection, swelling, and lockjaw',
      'Advanced piezosurgery and bone preservation',
      'Fast recovery with specialized wound care',
    ],
    procedureSteps: [
      '3D CBCT mapping of inferior alveolar nerve proximity',
      'Gentle local anesthesia and micro-incision',
      'Sectioning of tooth crown with precision surgical handpiece',
      'Hemostatic closure with dissolvable sutures',
    ],
    duration: '20–40 minutes',
    recoveryTime: '2–4 days',
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=75',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Full Arch Fixed Dental Implant Restoration',
    treatmentType: 'Dental Implants & Zirconia Bridge',
    description:
      'Patient presented with terminal dentition and failing restorations. Full extraction followed by computer-guided 6-implant placement with immediate fixed screw-retained zirconia prosthesis.',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=75',
    duration: 'Completed in 2 Phases (Immediate load + final glaze in 12 weeks)',
    patientAge: '52 Years Old',
    doctorNotes:
      'Remarkable bone integration achieved. Patient regained 100% masticatory capacity and radiant facial youthfulness.',
  },
  {
    id: 'case-2',
    title: 'Aesthetic Smile Makeover & Veneers',
    treatmentType: 'Porcelain Laminate Veneers & Gingival Contouring',
    description:
      'Correction of severe tetracycline discoloration, incisal edge wear, and midline spacing across upper anterior teeth.',
    beforeImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=75',
    duration: '2 Weeks of Restorative Care (2 clinical visits)',
    patientAge: '31 Years Old',
    doctorNotes:
      'Minimal-prep 0.3mm E-max veneers designed to mirror natural tooth translucency and light reflection.',
  },
  {
    id: 'case-3',
    title: 'Single Anterior Implant & Custom Zirconia Abutment',
    treatmentType: 'Immediate Front Tooth Implant Placement',
    description:
      'Traumatic fracture of upper central incisor. Atraumatic extraction, immediate implant placement with simultaneous bone graft, and emergence profile conditioning.',
    beforeImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=75',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=75',
    duration: 'Same-day provisional, final ceramic crown at 8 weeks',
    patientAge: '28 Years Old',
    doctorNotes:
      'Pink aesthetics and interdental papilla fully preserved without any visible gum recession.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Brigadier (R) Tariq Mahmood',
    location: 'Saddar, Rawalpindi',
    rating: 5,
    treatment: 'Full Arch Dental Implants',
    date: '2 weeks ago',
    comment:
      'Dr. Ali Akhtar Khan is without doubt the best oral surgeon in Rawalpindi. I had been struggling with dentures for 5 years. Dr. Ali placed 6 implants with virtually no pain during or after the surgery. The clinic at Avalon Plaza is immaculate and high-tech.',
    verified: true,
  },
  {
    id: 't-2',
    name: 'Dr. Sarah Farooq',
    location: 'Bahria Town, Islamabad / Rawalpindi',
    rating: 5,
    treatment: 'Cosmetic Porcelain Veneers',
    date: '1 month ago',
    comment:
      'As a healthcare professional myself, sterilization and technique matter most to me. Dr. Ali’s attention to detail during my smile makeover was phenomenal. My smile looks completely natural and radiant. Highly recommended!',
    verified: true,
  },
  {
    id: 't-3',
    name: 'Mohammad Hamza',
    location: 'Chaklala Scheme 3, Rawalpindi',
    rating: 5,
    treatment: 'Impacted Wisdom Tooth Surgery',
    date: '3 weeks ago',
    comment:
      'I was terrified of having my horizontally impacted wisdom tooth extracted because the nerve was close. Dr. Ali finished the entire procedure in 20 minutes smoothly! Zero swelling the next day. Truly an expert maxillofacial surgeon.',
    verified: true,
  },
  {
    id: 't-4',
    name: 'Ayesha Malik',
    location: 'Westridge, Rawalpindi',
    rating: 5,
    treatment: 'Teeth Whitening & Root Canal',
    date: '2 months ago',
    comment:
      'The clinic staff is very polite and professional. I did in-office laser teeth whitening and a root canal. Everything was completed on time with zero pain. The location right next to Cantt Board Office is very convenient.',
    verified: true,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Why Dental Implants Are the Gold Standard for Missing Teeth',
    slug: 'dental-implants-gold-standard-missing-teeth',
    excerpt:
      'Discover why titanium implants surpass traditional dentures and bridges in preserving bone density, facial harmony, and long-term oral health.',
    content: [
      'Missing teeth do more than create gaps in your smile; they trigger progressive jawbone resorption that alters your facial structure over time.',
      'Unlike removable dentures that sit atop the gums or bridges that require cutting down adjacent healthy teeth, dental implants replace the anatomical root directly in the jawbone.',
      'Through a natural biological process known as osseointegration, bone cells fuse directly to medical-grade titanium, providing unmatched biting stability and longevity that can last a lifetime with proper oral hygiene.',
      'At Advance Maxillofacial Implant & Dental Clinic, Dr. Ali Akhtar Khan uses 3D CBCT computer planning to guarantee optimal placement angles and painless recovery.',
    ],
    category: 'Implantology',
    readTime: '4 min read',
    date: 'August 2026',
    author: 'Dr. Ali Akhtar Khan',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=75',
    tags: ['Dental Implants', 'Bone Health', 'Oral Surgery'],
  },
  {
    id: 'blog-2',
    title: 'Signs You Should Consult a Maxillofacial Specialist',
    slug: 'signs-you-need-maxillofacial-specialist',
    excerpt:
      'Learn how oral and maxillofacial surgeons address complex jaw misalignment, severe TMJ dysfunction, facial trauma, and impacted teeth.',
    content: [
      'While general dentists handle routine hygiene and basic fillings, Oral and Maxillofacial Surgeons undergo rigorous hospital surgical residencies to treat complex bone, nerve, and muscular conditions of the face and jaws.',
      'Key symptoms indicating the need for a specialist evaluation include chronic jaw clicking or pain when opening the mouth (TMJ), difficulty biting food evenly due to skeletal jaw misalignment, persistent face swelling, or impacted wisdom teeth.',
      'Consulting an experienced specialist ensures that underlying skeletal issues are corrected at the source rather than just masking symptoms.',
    ],
    category: 'Maxillofacial Surgery',
    readTime: '5 min read',
    date: 'July 2026',
    author: 'Dr. Ali Akhtar Khan',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=75',
    tags: ['TMJ', 'Jaw Surgery', 'Oral Health'],
  },
  {
    id: 'blog-3',
    title: 'How to Care for Your Teeth After In-Office Laser Whitening',
    slug: 'care-for-teeth-after-laser-whitening',
    excerpt:
      'Essential tips and the "White Diet" guidelines to maintain your brilliant new shade and prevent rebound staining for years to come.',
    content: [
      'Laser teeth whitening is one of the quickest ways to elevate your appearance, brightening enamel up to 8 shades in just 45 minutes.',
      'However, the first 48 hours post-treatment are critical because the enamel pores remain temporarily receptive to external pigments.',
      'Adhere to a strict "White Diet" for 48 hours: avoid black tea, dark coffee, turmeric curries, red sauces, and tobacco. Drink water frequently and use a soft-bristled brush with non-abrasive sensitivity toothpaste.',
    ],
    category: 'Cosmetic Dentistry',
    readTime: '3 min read',
    date: 'June 2026',
    author: 'Advance Dental Team',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=75',
    tags: ['Teeth Whitening', 'Smile Tips', 'Enamel Care'],
  },
];

export const CLINIC_FAQS = [
  {
    question: 'Is dental implant surgery painful?',
    answer:
      'Not at all. The procedure is performed under profound local anesthesia (or conscious sedation if preferred), meaning you will feel zero sharp pain during surgery. Post-operative discomfort is generally mild and easily managed with prescribed analgesics for 2-3 days.',
  },
  {
    question: 'How long do dental implants last?',
    answer:
      'With proper oral hygiene, routine cleanings, and maintenance, dental implants have a clinical success rate exceeding 98% and can last a lifetime.',
  },
  {
    question: 'Where is Advance Maxillofacial Implant & Dental Clinic located?',
    answer:
      'We are centrally located in Saddar, Rawalpindi on the 1st Floor of Avalon Plaza, right near the Cantonment Board Office (Postal Code 46000). Ample parking is available.',
  },
  {
    question: 'How can I book an appointment with Dr. Ali Akhtar Khan?',
    answer:
      'You can book instantly by calling or messaging us on WhatsApp at +923186966831, or by submitting our online booking request form on this website.',
  },
  {
    question: 'What are your clinic operating hours?',
    answer:
      'We are open Monday through Saturday from 11:00 AM to 9:00 PM. Sundays are reserved for surgical emergencies and prior appointments.',
  },
];
