// ============================================================
// ROYAL EDUCATION SYSTEM — PARTNER DATA
// ============================================================
// CHANGE PARTNER LOGO HERE: Update paths when official logos arrive
// ============================================================

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
  website?: string;
}

// EDIT HERE: Partner information
export const partners: Partner[] = [
  {
    id: 'nova-jain-academy',
    name: 'Nova Jain Academy',
    logo: '/images/partners/nova-jain-academy-placeholder.svg',
    description: 'Education partner',
  },
  {
    id: 'science-x',
    name: 'Science X',
    logo: '/images/partners/science-x-placeholder.svg',
    description: 'Science education partner',
  },
  {
    id: 'horizon',
    name: 'Horizon',
    logo: '/images/partners/horizon-placeholder.svg',
    description: 'Learning partner',
  },
];

export default partners;
