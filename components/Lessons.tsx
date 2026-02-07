import React from 'react';

const Lessons: React.FC = () => {
  const lessonFormats = [
    {
      icon: 'person',
      title: 'Private 1:1 Lessons',
      subtitle: 'Customized for your level',
      description:
        'Personalized 60-minute lessons for beginners, intermediate, or advanced learners. We focus on your goals and pace.',
      pricing: ['EUR 35 / hour'],
    },
    {
      icon: 'groups',
      title: 'Small Group Lessons',
      subtitle: 'Conversation and shared progress',
      description:
        'Structured small-group lessons with practical conversation and guided practice in a friendly setting.',
      pricing: ['EUR 20 / hour per student'],
    },
    {
      icon: 'laptop_mac',
      title: 'Online Lessons',
      subtitle: 'Flexible and practical',
      description:
        'Online lessons in English for students who prefer remote learning with clear structure and regular feedback.',
      pricing: ['EUR 30 / hour'],
    },
    {
      icon: 'child_care',
      title: 'Kids Classes',
      subtitle: 'Fun and engaging',
      description:
        'Age-appropriate lessons designed to keep children and teens motivated through interactive activities.',
      pricing: ['EUR 15 / hour'],
    },
  ];

  const includedItems = [
    'Trial lesson and level check',
    'Lesson plan based on your level and goals',
    'Textbooks and original Japanese learning materials',
    'Private lesson customization or group conversation structure',
    'Progress review over each 3-month period',
  ];

  const faqIllustration = '/images/faq-illustration.png';
  const heroImage = '/images/lessons-hero.png';

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 lg:px-20 zen-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-10 text-left order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12" aria-hidden="true"></div>
                    <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">レッスンと料金</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-[2px] w-12 bg-primary"></div>
                    <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">Lessons & Fees</span>
                  </div>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900 uppercase">
                  Japanese Lessons <br />in <span className="text-primary">Toulouse.</span>
                </h1>
                <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                  Beginner to advanced lessons, JLPT N5-N3 preparation, and engaging classes for kids and teens.
                  All lessons are taught in English.
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <a
                  href="/booking"
                  className="bg-primary text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-primary/20"
                >
                  Book a Trial Lesson
                </a>
                <a
                  href="/booking"
                  className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 text-sm font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                >
                  Ask a Question
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative z-20">
                <div className="p-4 border-[3px] border-dashed border-[#1E90FF] rounded-[2rem] relative">
                  <div className="absolute -top-10 -right-6 w-32 h-44 bg-[#D64F73] rounded-full opacity-90 z-0"></div>
                  <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#F9A86E] rounded-full opacity-90 z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-16 bg-[#706FD3] rounded-full opacity-90 z-30"></div>

                  <div className="relative z-10 w-full aspect-[4/3] overflow-hidden bg-slate-100 rounded-[1.5rem] shadow-2xl">
                    <img
                      src={heroImage}
                      alt="Japanese lesson materials"
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-12 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <div className="space-y-8 text-left">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">What You Get</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[0.95] tracking-tight uppercase font-display">
              Real Lessons, <br />Clear Structure
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-xl leading-relaxed">
              60-minute classes with a practical approach. Most learners notice clear progress in around 3 months,
              depending on their starting level and consistency.
            </p>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-primary mb-4">Included</p>
              <ul className="space-y-3">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium leading-relaxed">
                    <span className="material-symbols-outlined text-primary text-base mt-[2px]">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-left lg:pt-2">
            {lessonFormats.map((format, idx) => (
              <div
                key={idx}
                className="group border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full border-2 border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-110 bg-slate-50">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary/5">
                      <span className="material-symbols-outlined text-3xl">{format.icon}</span>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-[10px] font-black tracking-[0.25em] uppercase text-primary mb-2">{format.subtitle}</p>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight transition-colors group-hover:text-primary">
                        {format.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xl">
                      {format.description}
                    </p>
                    <ul className="space-y-2">
                      {format.pricing.map((line, lineIdx) => (
                        <li key={lineIdx} className="text-sm text-slate-700 font-semibold flex items-start gap-2">
                          <span className="text-primary leading-5">-</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/booking"
                      className="inline-flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest pt-2 hover:gap-4 transition-all"
                    >
                      Check Availability <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 md:px-24 lg:px-40 py-32 bg-[#fffcf9] border-t border-orange-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 p-10 opacity-[0.02] select-none pointer-events-none">
          <span className="japanese-title text-[35rem] leading-none text-slate-900">答</span>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                  <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs">Help & Support</h2>
                </div>
                <h3 className="text-slate-900 text-6xl font-black uppercase tracking-tighter font-display leading-[0.9]">FAQ</h3>
                <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
                  Key details before you start your trial lesson.
                </p>
              </div>
              <div className="relative group max-w-md">
                <div className="absolute -inset-6 bg-primary/5 rounded-[4rem] blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                <div className="relative z-10 aspect-[4/5] overflow-hidden flex items-center justify-center">
                  <img
                    src={faqIllustration}
                    alt="Watercolor illustration of a thinking student"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 pt-12 lg:pt-0">
              {[
                {
                  q: 'Where do in-person lessons take place?',
                  a: 'In-person lessons can be held at my home studio, cafes, or public libraries in central Toulouse.',
                },
                {
                  q: 'Which students do you teach?',
                  a: 'I teach kids, teens, adults, and senior learners from beginner to advanced levels.',
                },
                {
                  q: 'Which JLPT levels do you offer?',
                  a: 'I currently offer JLPT preparation for N5, N4, and N3.',
                },
                {
                  q: 'What language are lessons taught in?',
                  a: 'Lessons are taught in English.',
                },
                {
                  q: 'How does the trial lesson work?',
                  a: 'The trial lesson helps assess your level, discuss your goals, and choose the best lesson format for you.',
                },
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-[2.5rem] border border-orange-100/40 shadow-sm hover:shadow-md transition-all duration-500 open:shadow-xl open:border-primary/10 overflow-hidden" open={idx === 0}>
                  <summary className="flex items-center justify-between p-10 cursor-pointer list-none">
                    <span className="text-xl font-black text-slate-900 pr-12 leading-tight">
                      <span className="text-primary mr-4 italic text-2xl">Q.</span>{faq.q}
                    </span>
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-500">expand_more</span>
                  </summary>
                  <div className="px-10 pb-10 pt-2">
                    <div className="w-12 h-1 bg-slate-50 mb-8 rounded-full"></div>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
              <div className="mt-16 p-10 bg-white rounded-[3rem] border border-dashed border-slate-200 text-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Need specific information?</p>
                <a
                  href="/booking"
                  className="text-primary font-black uppercase tracking-[0.2em] text-sm hover:text-slate-900 transition-colors"
                >
                  Contact Me Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-24 lg:px-40 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[4rem] p-16 md:p-32 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <div className="grid grid-cols-6 h-full">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border-r border-white h-full"></div>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center gap-10">
              <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tight font-display max-w-3xl leading-[0.95]">
                Ready to start <br />your Japanese lessons?
              </h2>
              <p className="text-white/80 text-xl font-medium max-w-xl">Book a trial lesson and get a plan based on your real goals.</p>
              <a
                href="/booking"
                className="bg-white text-primary px-16 py-7 rounded-2xl font-black text-sm uppercase tracking-[0.25em] hover:bg-slate-900 hover:text-white transition-all shadow-2xl active:scale-95"
              >
                Book Your Trial Lesson
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
