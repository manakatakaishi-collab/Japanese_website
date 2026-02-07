import type { Metadata } from 'next';
import Journey from '@/components/Journey';

export const metadata: Metadata = {
  title: 'About Manaka',
  description:
    'Meet Manaka, a native Japanese tutor in Toulouse with international study experience from Tokyo to Exeter to France.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <Journey />;
}
