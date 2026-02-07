import React from 'react';
import Link from 'next/link';
import { withBasePath } from '@/lib/base-path';

const Hero: React.FC = () => {
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
      <section className="relative overflow-hidden pt-8 pb-24 lg:pt-12 lg:pb-40 px-6 lg:px-20 zen-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10 text-left">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12" aria-hidden="true"></div>
                    <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">トゥールーズの日本語レッスン</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-12 bg-primary"></div>
                    <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">
                      Japanese Lessons in Toulouse
                    </span>
                  </div>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900 uppercase">
                  Learn Japanese <br />in Toulouse <br />or Online.
                </h1>
                <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                  Lessons for beginners to advanced learners, JLPT N5-N3 preparation, and fun classes for kids and teens.
                  Taught in English with practical, personalized guidance.
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <Link
                  href="/booking"
                  className="bg-primary text-white px-10 py-5 text-sm font-black uppercase tracking-widest rounded-none hover:bg-black transition-all shadow-xl shadow-primary/20"
                >
                  Book a Trial Lesson
                </Link>
                <Link
                  href="/lessons"
                  className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 text-sm font-black uppercase tracking-widest rounded-none hover:border-primary hover:text-primary transition-all"
                >
                  View Lessons & Fees
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="relative z-20">
                <div className="relative w-full aspect-[4/5] flex items-center justify-center">
                  <div className="relative w-full h-full border-[16px] border-white shadow-2xl overflow-hidden bg-slate-100 rounded-lg">
                    <img
                      src={manakaHeroImage}
                      alt="Manaka - Japanese tutor in Toulouse"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary opacity-5 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">Lesson Formats</h2>
            <p className="text-slate-500 max-w-2xl text-lg">Choose the format that matches your goals, level, and schedule.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {formats.map((format, i) => (
              <article
                key={i}
                className="group flex flex-col bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 rounded-lg border border-slate-100"
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

      <section className="py-24 px-6 lg:px-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 text-slate-900 uppercase tracking-tight leading-none">
                How Lessons <br /><span className="text-primary">Work</span>
              </h2>
              <p className="text-slate-500 text-lg mb-12">A clear structure designed around your level, your goals, and consistent progress.</p>
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div key={index} className="flex items-center gap-6 bg-white p-6 shadow-sm border-l-4 border-slate-100 hover:border-primary transition-all duration-300">
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
            <div className="relative h-[600px] overflow-hidden rounded-lg shadow-2xl">
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
