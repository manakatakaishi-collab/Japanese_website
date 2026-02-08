import React from 'react';
import Link from 'next/link';

type Cta = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
};

type PageHeroProps = {
  eyebrowJa?: string;
  eyebrowEn: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageSide?: 'left' | 'right';
  ctas: [Cta, Cta];
};

const PageHero: React.FC<PageHeroProps> = ({
  eyebrowJa,
  eyebrowEn,
  title,
  description,
  imageSrc,
  imageAlt,
  imageSide = 'right',
  ctas,
}) => {
  const textOrderClass = imageSide === 'left' ? 'lg:order-2' : 'lg:order-1';
  const imageOrderClass = imageSide === 'left' ? 'lg:order-1' : 'lg:order-2';
  const imageAlignClass = imageSide === 'left' ? 'lg:mr-auto' : 'lg:ml-auto';

  return (
    <section className="relative overflow-hidden site-x section-y zen-bg">
      <div className="site-content">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className={`w-full lg:w-1/2 space-y-8 text-left order-1 ${textOrderClass}`}>
            <div className="space-y-5">
              <div className="space-y-1">
                {eyebrowJa ? (
                  <div className="flex items-center gap-3">
                    <div className="w-12" aria-hidden="true"></div>
                    <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">{eyebrowJa}</span>
                  </div>
                ) : null}
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-12 bg-primary"></div>
                  <span className="text-primary font-black tracking-[0.3em] text-xs uppercase">{eyebrowEn}</span>
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-[clamp(3.6rem,5.5vw,6.1rem)] font-black leading-[0.92] tracking-tighter text-slate-900 uppercase">
                {title}
              </h1>
              <p className="text-slate-600 text-lg lg:text-xl font-medium leading-relaxed max-w-xl">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === 'secondary'
                      ? 'bg-white border-2 border-slate-200 text-slate-900 px-8 lg:px-9 py-4 lg:py-5 text-sm font-black uppercase tracking-widest rounded-none hover:border-primary hover:text-primary transition-all text-center'
                      : 'bg-primary text-white px-8 lg:px-9 py-4 lg:py-5 text-sm font-black uppercase tracking-widest rounded-none hover:bg-black transition-all shadow-xl shadow-primary/20 text-center'
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={`w-full lg:w-1/2 order-2 ${imageOrderClass}`}>
            <div className={`relative w-full max-w-[420px] mx-auto lg:mx-0 ${imageAlignClass}`}>
              <div className="relative aspect-[4/5] border-[12px] border-white shadow-2xl overflow-hidden bg-slate-100 rounded-lg">
                <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
