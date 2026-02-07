'use client';

import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const contactImage = 'https://images.unsplash.com/photo-1526657283335-33eeac1f2582?q=80&w=2070&auto=format&fit=crop';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      level: String(formData.get('level') || ''),
      format: String(formData.get('format') || ''),
      ageGroup: String(formData.get('ageGroup') || ''),
      goalType: String(formData.get('goalType') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatusMessage('Thanks! Your inquiry was sent successfully.');
      e.currentTarget.reset();
    } catch {
      setStatusMessage('Unable to send right now. Please email contact@manaka-japanese.fr.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 text-left">
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex flex-col gap-6 lg:w-2/3">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">Contact Me</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900 uppercase">
                Book Your <br />Trial <span className="text-primary">Lesson.</span>
              </h2>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-2xl">
                Tell me your level, goals, and preferred format. I will help you choose a practical lesson plan that fits your needs.
              </p>
            </div>

            <div className="w-full lg:w-1/3 relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>

              <div className="relative z-10 aspect-square overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
                <img
                  src={contactImage}
                  alt="Japanese lesson inquiry"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop';
                  }}
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl rounded-2xl border border-gray-100 hidden md:block z-20">
                <p className="text-primary font-black uppercase text-[10px] tracking-widest">Trial Lesson</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/50">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Inquiry Form
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-bold pb-2 uppercase tracking-wider text-gray-500">Full Name</p>
                  <input name="name" required className="w-full rounded-xl border-gray-200 h-14 focus:border-primary focus:ring-primary placeholder:text-gray-300 px-4 outline-none border" placeholder="e.g. Jean Dupont" />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-bold pb-2 uppercase tracking-wider text-gray-500">Email Address</p>
                  <input name="email" type="email" required className="w-full rounded-xl border-gray-200 h-14 focus:border-primary focus:ring-primary placeholder:text-gray-300 px-4 outline-none border" placeholder="jean.dupont@email.com" />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-sm font-bold pb-2 uppercase tracking-wider text-gray-500">Current Japanese Level</p>
                  <select name="level" className="w-full rounded-xl border-gray-200 h-14 focus:border-primary focus:ring-primary px-4 outline-none border bg-white">
                    <option value="">Select your current level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="jlpt-n5">JLPT N5</option>
                    <option value="jlpt-n4">JLPT N4</option>
                    <option value="jlpt-n3">JLPT N3</option>
                  </select>
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-sm font-bold pb-2 uppercase tracking-wider text-gray-500">Preferred Format</p>
                  <select name="format" className="w-full rounded-xl border-gray-200 h-14 focus:border-primary focus:ring-primary px-4 outline-none border bg-white">
                    <option value="">Choose format</option>
                    <option value="private-in-person">Private In-Person</option>
                    <option value="small-group">Small Group</option>
                    <option value="online">Online</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-sm font-bold pb-2 uppercase tracking-wider text-gray-500">Age Group</p>
                  <select name="ageGroup" className="w-full rounded-xl border-gray-200 h-14 focus:border-primary focus:ring-primary px-4 outline-none border bg-white">
                    <option value="">Select age group</option>
                    <option value="kids">Kids</option>
                    <option value="teens">Teens</option>
                    <option value="adults">Adults</option>
                    <option value="seniors">Seniors</option>
                  </select>
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-sm font-bold pb-2 uppercase tracking-wider text-gray-500">Main Goal</p>
                  <select name="goalType" className="w-full rounded-xl border-gray-200 h-14 focus:border-primary focus:ring-primary px-4 outline-none border bg-white">
                    <option value="">Select your goal</option>
                    <option value="general-japanese">General Japanese</option>
                    <option value="jlpt-n5-n3">JLPT N5-N3 Preparation</option>
                    <option value="conversation">Conversation Practice</option>
                    <option value="kids-engaging">Kids/Teens Fun Learning</option>
                  </select>
                </label>

                <label className="flex flex-col w-full">
                  <p className="text-sm font-bold pb-2 uppercase tracking-wider text-gray-500">Your Message</p>
                  <textarea name="message" required className="w-full rounded-xl border-gray-200 h-40 focus:border-primary focus:ring-primary placeholder:text-gray-300 p-4 outline-none border resize-none" placeholder="Tell me what you want to achieve in Japanese and where you prefer to study (home studio, cafe, public library, or online)."></textarea>
                </label>

                <button className="w-full h-16 bg-primary text-white font-black uppercase tracking-widest text-lg rounded-xl hover:bg-[#d62839] hover:shadow-xl transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-70" type="submit" disabled={isSubmitting}>
                  <span className="material-symbols-outlined">send</span> {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
                {statusMessage && <p className="text-sm font-bold text-slate-600">{statusMessage}</p>}
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8">
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

            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-slate-400">place</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Lesson Locations</h3>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                In-person lessons are available at my home studio, cafes, or public libraries in central Toulouse, plus online lessons.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
