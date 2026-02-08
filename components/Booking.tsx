'use client';

import React, { useCallback, useEffect } from 'react';
import Script from 'next/script';
import { withBasePath } from '@/lib/base-path';
import PageHero from '@/components/PageHero';

const Booking: React.FC = () => {
  const contactImage = withBasePath('/images/booking-top-right.png');
  const contactImageAlt = 'Illustration of an online Japanese lesson on a desk';

  const initTallyEmbeds = useCallback(() => {
    // Mirrors Tally's recommended snippet:
    // - set iframe.src = iframe.dataset.tallySrc for iframes missing src
    // - call Tally.loadEmbeds() when available
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w?.Tally?.loadEmbeds) {
        w.Tally.loadEmbeds();
        return;
      }

      document
        .querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])')
        .forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc ?? '';
        });
    } catch {
      // Non-fatal: if the embed init fails, the rest of the page should still render.
    }
  }, []);

  useEffect(() => {
    initTallyEmbeds();
  }, [initTallyEmbeds]);

  return (
    <div className="bg-white">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={initTallyEmbeds}
        onError={initTallyEmbeds}
      />
      <PageHero
        eyebrowJa="お問い合わせ"
        eyebrowEn="Contact Me"
        title={
          <>
            Book Your Trial <span className="text-primary">Lesson.</span>
          </>
        }
        description="Tell me your level, goals, and preferred format. I will help you choose a practical lesson plan that fits your needs."
        imageSrc={contactImage}
        imageAlt={contactImageAlt}
        imageSide="left"
        ctas={[
          { href: '/booking#inquiry-form', label: 'Send Inquiry', variant: 'primary' },
          { href: '/lessons', label: 'View Lessons & Fees', variant: 'secondary' },
        ]}
      />

      <main className="site-content site-x section-y text-left">

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-16">
          <div className="w-full lg:w-2/3">
            <div id="inquiry-form" className="bg-white p-10 rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Inquiry Form
              </h3>
              <iframe
                data-tally-src="https://tally.so/embed/jaQa76?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="849"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Book Your Trial Lesson"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8 h-full">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">contact_support</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Direct Info</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-slate-400 text-sm">mail</span>
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Email Address</p>
                  </div>
                  <a href="mailto:contact@manaka-japanese.fr" className="text-primary font-bold hover:underline">
                    contact@manaka-japanese.fr
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-slate-400 text-sm">schedule</span>
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Business Hours</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-500 font-medium">
                    <li className="flex justify-between border-b border-slate-200 pb-1">
                      <span>Mon - Fri</span>
                      <span className="text-slate-900 font-bold">10:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-1">
                      <span>Saturday</span>
                      <span className="text-slate-900 font-bold">10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-slate-900 font-bold">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-10 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">bolt</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Fast Response</h3>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                I typically respond within <span className="text-primary font-bold">24 hours</span>. Please double-check your email address so I can contact you.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mt-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-slate-400">place</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Lesson Locations</h3>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                In-person lessons are available at my home studio, cafes, or public libraries in central Toulouse, plus online lessons.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Toulouse,+France&z=13&output=embed"
                  width="100%"
                  height="170"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of lesson locations in Toulouse"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
