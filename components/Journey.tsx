import React from 'react';
import Link from 'next/link';
import { withBasePath } from '@/lib/base-path';
import PageHero from '@/components/PageHero';

const Journey: React.FC = () => {
  const teachingApproach = [
    {
      icon: 'person',
      title: 'Private Lessons = Personalized',
      desc: 'In private classes, lessons are fully adapted to each learner: pace, materials, and goals.',
    },
    {
      icon: 'groups_3',
      title: 'Groups = Structured Conversation',
      desc: 'Small group lessons focus on conversation practice with clear structure and guided activities.',
    },
    {
      icon: 'menu_book',
      title: 'Textbooks + Original Materials',
      desc: 'I combine textbooks with my own Japanese learning materials to make lessons practical and engaging.',
    },
    {
      icon: 'trending_up',
      title: 'Progress Every 3 Months',
      desc: 'Most students notice meaningful improvement over around 3 months, depending on starting level and consistency.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        eyebrowJa="私について"
        eyebrowEn="About Me"
        title={
          <>
            About Me<span className="text-primary">.</span>
          </>
        }
        description="Hi, I'm Manaka. From Tokyo to Exeter and now Toulouse, I teach Japanese in English through practical, personalized lessons for kids, teens, and adults."
        imageSrc={withBasePath('/images/about-manaka.jpg')}
        imageAlt="Manaka portrait"
        imageSide="left"
        ctas={[
          { href: '/booking', label: 'Book a Trial Lesson', variant: 'primary' },
          { href: '/lessons', label: 'View Lessons & Fees', variant: 'secondary' },
        ]}
      />

      <div className="site-x section-y flex justify-center" data-reveal>
        <div className="layout-content-container site-content flex flex-col">
          <div className="flex flex-col gap-4 px-4 pb-12 text-center">
            <h2 className="text-slate-900 text-4xl font-black leading-tight tracking-tighter uppercase font-display">My Global Journey</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="relative py-10 text-left">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-24 relative" data-reveal>
              <div className="flex flex-col items-end text-right md:pr-4">
                <div className="inline-block px-4 py-1 bg-primary text-white text-xs font-black tracking-widest uppercase mb-4 rounded-full shadow-lg shadow-primary/20">2005 - 2023</div>
                <h3 className="text-slate-900 text-2xl font-black mb-3">Roots in Japan</h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm ml-auto font-medium">
                  Raised in Tokyo, I developed a deep understanding of Japanese language, communication style, and culture.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-[-52px] top-2 bg-primary size-10 rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white hidden md:flex">
                  <span className="material-symbols-outlined text-sm">home</span>
                </div>
                <div
                  className="w-full h-64 bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02]"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop')" }}
                ></div>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-24 relative"
              data-reveal
              style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
            >
              <div className="order-2 md:order-1 relative">
                <div className="absolute right-[-52px] top-2 bg-primary size-10 rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white hidden md:flex">
                  <span className="material-symbols-outlined text-sm">school</span>
                </div>
                <div className="w-full h-64 bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02]" style={{ backgroundImage: `url('${withBasePath('/images/journey-exeter.png')}')` }}></div>
              </div>
              <div className="order-1 md:order-2 flex flex-col items-start md:pl-4">
                <div className="inline-block px-4 py-1 bg-primary text-white text-xs font-black tracking-widest uppercase mb-4 rounded-full shadow-lg shadow-primary/20">2023 - 2025</div>
                <h3 className="text-slate-900 text-2xl font-black mb-3">University of Exeter, UK</h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm font-medium">
                  I studied International Business and Modern Languages, which strengthened my communication skills across cultures.
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative"
              data-reveal
              style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
            >
              <div className="flex flex-col items-end text-right md:pr-4">
                <div className="inline-block px-4 py-1 bg-primary text-white text-xs font-black tracking-widest uppercase mb-4 rounded-full shadow-lg shadow-primary/20">2025 September - Present</div>
                <h3 className="text-slate-900 text-2xl font-black mb-3">Toulouse, France</h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm ml-auto font-medium">
                  I am currently on exchange at TBS Toulouse Business School and offering Japanese lessons in Toulouse and online.
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-[-52px] top-2 bg-primary size-10 rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white hidden md:flex">
                  <span className="material-symbols-outlined text-sm">explore</span>
                </div>
                <div className="w-full h-64 bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02]" style={{ backgroundImage: `url('${withBasePath('/images/journey-toulouse.png')}')` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-x section-y flex justify-center bg-slate-50" data-reveal>
        <div className="layout-content-container site-content flex flex-col">
          <div className="flex flex-col gap-4 px-4 pb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[1px] w-20 bg-primary/20"></div>
              <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase">My Teaching Style</span>
              <div className="h-[1px] w-20 bg-primary/20"></div>
            </div>
            <h2 className="text-slate-900 text-4xl font-black leading-tight tracking-tighter uppercase font-display">How I Teach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {teachingApproach.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col text-left gap-6 p-10 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group border border-slate-100 rounded-3xl"
                data-reveal
                style={{ '--reveal-delay': `${idx * 70}ms` } as React.CSSProperties}
              >
                <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-x section-y flex justify-center" data-reveal>
        <div className="layout-content-container site-content flex flex-col">
          <div className="bg-primary rounded-[3rem] p-8 md:p-12 lg:p-14 flex flex-col items-center justify-center gap-7 text-white relative overflow-hidden shadow-2xl text-center">
            <div className="absolute -top-10 left-4 md:left-8 opacity-10 select-none pointer-events-none">
              <span className="japanese-title text-[7rem] md:text-[10rem] leading-none text-white">日</span>
            </div>
            <div className="absolute -bottom-12 right-4 md:right-8 opacity-10 select-none pointer-events-none">
              <span className="japanese-title text-[7rem] md:text-[10rem] leading-none text-white">本</span>
            </div>
            <div className="flex flex-col gap-4 text-center relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter leading-none uppercase">Ready to start learning Japanese?</h2>
              <p className="text-xl font-medium text-white/90 mx-auto">Book a trial lesson and we will build your study plan together.</p>
            </div>
            <Link
              href="/booking"
              className="btn-lift bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all shadow-2xl active:scale-95 relative z-10 uppercase tracking-widest"
            >
              BOOK A TRIAL LESSON
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
