import type { ReviewRecord } from './types';

// Please check legal advertising rules (including the Law Society of Zimbabwe) before approving any testimonial.
export const reviews: ReviewRecord[] = [
  {
    id: 'review-1',
    quote: 'Their advice was clear, practical and commercially sound. We moved quickly and with confidence.',
    clientName: 'A. Ndlovu',
    clientRole: 'Operations Director',
    date: '2025-01-20',
    serviceRef: 'corporate-and-commercial-law',
    approved: true,
    featured: true,
    order: 1,
  },
  {
    id: 'review-2',
    quote: 'Tanaka Law Chambers balanced legal rigour with empathy and speed. We felt guided throughout.',
    clientName: 'M. Chigumba',
    clientRole: 'Founder',
    date: '2024-10-11',
    serviceRef: 'family-law',
    approved: true,
    featured: true,
    order: 2,
  },
  {
    id: 'review-3',
    quote: 'Their team handled a difficult dispute with discipline and clarity from start to finish.',
    clientName: 'R. Moyo',
    clientRole: 'Managing Director',
    date: '2024-06-18',
    serviceRef: 'civil-litigation-and-alternative-resolution',
    approved: true,
    featured: true,
    order: 3,
  },
  {
    id: 'review-4',
    quote: 'We appreciated the practical approach and the attention to detail in our transaction documentation.',
    clientName: 'J. Mabhena',
    clientRole: 'Director',
    date: '2024-03-09',
    serviceRef: 'notarial-practice-and-conveyancing',
    approved: false,
    featured: false,
    order: 4,
  },
];

export const approvedReviews = reviews.filter((review) => review.approved).sort((a, b) => a.order - b.order);
