export interface Service {
  title: string;
  icon: string;
  description: string;
  documents: string[];
  highlights: string[];
  turnaround: string;
  image: string;
}

const serviceImage = `${process.env.PUBLIC_URL}/images/sample-image.jpeg`;

export const services: Service[] = [
  {
    title: 'Government Forms',
    icon: '🪪',
    description: 'Application assistance for identity, civic registration, and citizen service requests with document checks before submission.',
    documents: [
      'PAN Card Application',
      'Aadhaar Card Update',
      'Voter ID Registration',
      'Passport Application',
      'Birth Certificate'
    ],
    highlights: ['Form verification', 'Digital upload support', 'Status follow-up'],
    turnaround: 'Same-day guidance',
    image: serviceImage
  },
  {
    title: 'Utility Bill Payment',
    icon: '💡',
    description: 'Fast payment support for household and business utility bills with instant processing assistance and receipt confirmation.',
    documents: [
      'Electricity Bill Payment',
      'Water Bill Payment',
      'Gas Bill Payment',
      'Mobile Recharge',
      'Internet Bill Payment'
    ],
    highlights: ['Instant receipts', 'Multiple providers', 'Monthly payment support'],
    turnaround: 'Within minutes',
    image: serviceImage
  },
  {
    title: 'Online Services',
    icon: '🌐',
    description: 'Submission support for certificates, applications, and online portals that typically require digital documents and careful data entry.',
    documents: [
      'Income Certificate',
      'Caste Certificate',
      'Domicile Certificate',
      'Birth/Death Certificate',
      'Scholarship Application'
    ],
    highlights: ['Portal registration', 'Document scanning', 'Application tracking'],
    turnaround: 'Guided end-to-end',
    image: serviceImage
  },
  {
    title: 'Exam Form Filling',
    icon: '📝',
    description: 'Exam registration support for state and national examinations with careful form validation to reduce rejection risk.',
    documents: [
      '10th/12th Board Forms',
      'MHT-CET Application',
      'NEET Registration',
      'JEE Main Form',
      'Entrance Exam Forms'
    ],
    highlights: ['Photo resizing', 'Fee payment support', 'Deadline reminders'],
    turnaround: 'Same-session completion',
    image: serviceImage
  },
  {
    title: 'Courier Logistics',
    icon: '📦',
    description: 'Courier booking and logistics support for important documents and parcels with packaging and tracking help.',
    documents: [
      'Domestic Courier',
      'International Shipping',
      'Express Delivery',
      'Document Courier',
      'Package Tracking'
    ],
    highlights: ['Booking assistance', 'Tracking guidance', 'Document-safe dispatch'],
    turnaround: 'Same-day dispatch support',
    image: serviceImage
  },
  {
    title: 'Printing & Scanning',
    icon: '🖨️',
    description: 'High-quality printing, photocopying, lamination, and scanning services for official documents and personal records.',
    documents: [
      'Document Printing',
      'Photocopy Services',
      'A3 Size Printing',
      'Color Printing',
      'Document Scanning'
    ],
    highlights: ['Color and black & white', 'Multiple paper sizes', 'Soft copy delivery'],
    turnaround: 'Walk-in service',
    image: serviceImage
  },
  {
    title: 'Dakhale',
    icon: '📚',
    description: 'Document entry and record support for official dakhale-related workflows, verification steps, and registry assistance.',
    documents: [
      'Property Registration',
      'Document Entry',
      'Official Records',
      'Legal Documentation',
      'Record Verification'
    ],
    highlights: ['Record preparation', 'Verification support', 'Submission guidance'],
    turnaround: 'Handled with review support',
    image: serviceImage
  }
];
