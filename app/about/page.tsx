import type { Metadata } from 'next';
import Journey from '@/components/Journey';

export const metadata: Metadata = {
  title: 'About Manaka',
  description:
    'Meet Manaka, a native Japanese tutor in Toulouse with international study experience from Tokyo to Exeter to France.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: '/en/about',
    languages: {
      en: '/en/about',
      ja: '/ja/about',
      'x-default': '/en/about',
    },
  },
};

export default function AboutPage() {
  return <Journey lang="en" />;
}
