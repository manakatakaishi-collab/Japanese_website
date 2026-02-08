'use client';

import React, { useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import PageHero from '@/components/PageHero';

const Hero: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const manakaHeroImage = withBasePath('/images/profile-manaka.jpg');

  const formats = [
    {
      title: 'Private Lessons',
      desc: '1:1 lessons personalized to your level and goals. Best for focused, fast progress.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1400&auto=format&fit=crop',
      price: 'From EUR 35 / hour',
    },
    {
      title: 'Small Group Lessons',
      desc: 'Conversation-focused lessons in small groups with clear structure and shared goals.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop',
      price: 'From EUR 20 / hour per student',
    },
    {
      title: 'Online Lessons',
      desc: 'Flexible online classes in English with materials adapted to your level and needs.',
      image: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=1400&auto=format&fit=crop',
      price: 'From EUR 30 / hour',
    },
  ];

  const howItWorks = [
    {
      title: 'Level Check',
      desc: 'We start with a trial lesson to understand your current level and goals.',
    },
    {
      title: 'Personal Plan',
      desc: 'Private lessons are tailored to each learner. Group lessons focus on guided conversation.',
    },
    {
      title: 'Consistent Practice',
      desc: 'Lessons use textbooks and original materials with practical speaking and review.',
    },
    {
      title: 'Progress Review',
      desc: 'Most students feel clear improvement in around 3 months, depending on level and study habits.',
    },
  ];

  return (
    <div className="flex-1">
      <PageHero
        eyebrowJa="トゥールーズの日本語レッスン"
        eyebrowEn="Japanese Lessons in Toulouse"
        title={
          <>
            Learn Japanese in Toulouse{' '}
            <span className="inline-block text-primary [text-shadow:0_10px_28px_rgba(212,0,58,0.2)]">or Online.</span>
          </>
        }
        description="Lessons for beginners to advanced learners, JLPT N5-N3 preparation, and fun classes for kids and teens. Taught in English with practical, personalized guidance."
        imageSrc={manakaHeroImage}
        imageAlt="Manaka - Japanese tutor in Toulouse"
        imageSide="right"
        ctas={[
          { href: '/booking', label: 'Book a Trial Lesson', variant: 'primary' },
          { href: '/lessons', label: 'View Lessons & Fees', variant: 'secondary' },
        ]}
      />

      <section className="section-y site-x bg-slate-50" data-reveal>
        <div className="site-content">
          <div className="flex flex-col items-center text-center mb-20 space-y-4" data-reveal>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">Lesson Formats</h2>
            <p className="text-slate-500 max-w-2xl text-lg">Choose the format that matches your goals, level, and schedule.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {formats.map((format, i) => (
              <article
                key={i}
                className="group flex flex-col bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 rounded-lg border border-slate-100"
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="h-52 overflow-hidden border-b border-slate-100">
                  <img
                    src={format.image}
                    alt={format.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 text-center">
                <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">{format.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm">{format.desc}</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-center">
                  <p className="text-sm font-black text-white uppercase tracking-widest bg-primary px-4 py-2 rounded-md">
                    {format.price}
                  </p>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y site-x bg-white border-y border-slate-100" data-reveal>
        <div className="site-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left" data-reveal>
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase tracking-tight leading-none">
                How Lessons <br /><span className="text-primary">Work</span>
              </h2>
              <p className="text-slate-500 text-lg mb-12">A clear structure designed around your level, your goals, and consistent progress.</p>
              <div className="space-y-6" onMouseLeave={() => setActiveStepIndex(0)}>
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveStepIndex(index)}
                    className={`flex items-center gap-6 bg-white p-6 shadow-sm border-l-4 transition-all duration-300 ${
                      activeStepIndex === index ? 'border-primary' : 'border-slate-100'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center min-w-[50px]">
                      <span className="text-2xl font-black text-slate-300">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative h-[600px] overflow-hidden rounded-lg shadow-2xl"
              data-reveal
              style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
            >
              <img
                alt="Japanese learning materials"
                className="w-full h-full object-cover"
                src={withBasePath('/images/lessons-hero.png')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12 text-left">
                <p className="text-white text-3xl font-black leading-tight italic">
                  Practical lessons, clear goals, and real progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
