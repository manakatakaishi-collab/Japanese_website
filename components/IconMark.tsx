import React from 'react';

type IconName =
  | 'arrow_forward'
  | 'bolt'
  | 'check_circle'
  | 'child_care'
  | 'close'
  | 'contact_support'
  | 'expand_more'
  | 'explore'
  | 'groups'
  | 'groups_3'
  | 'home'
  | 'laptop_mac'
  | 'mail'
  | 'menu'
  | 'menu_book'
  | 'person'
  | 'place'
  | 'schedule'
  | 'school'
  | 'trending_up';

type IconMarkProps = {
  name: IconName | string;
  className?: string;
  title?: string;
};

const IconMark: React.FC<IconMarkProps> = ({ name, className = '', title }) => {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 2,
  };

  const paths = (() => {
    switch (name) {
      case 'arrow_forward':
        return (
          <>
            <path {...common} d="M5 12h14" />
            <path {...common} d="M13 5l7 7-7 7" />
          </>
        );
      case 'bolt':
        return <path {...common} d="M13 2L4 14h6l-1 8 9-12h-6z" />;
      case 'check_circle':
        return (
          <>
            <circle {...common} cx="12" cy="12" r="9" />
            <path {...common} d="M9 12l2 2 4-4" />
          </>
        );
      case 'child_care':
        return (
          <>
            <circle {...common} cx="12" cy="12" r="6.5" />
            <path {...common} d="M10 10h.01M14 10h.01" />
            <path {...common} d="M9.5 14c.7 1 1.6 1.5 2.5 1.5s1.8-.5 2.5-1.5" />
            <path {...common} d="M12 5.5c0-1 1-2 2.2-2 1.2 0 2.3 1 2.3 2.3" />
          </>
        );
      case 'close':
        return (
          <>
            <path {...common} d="M6 6l12 12" />
            <path {...common} d="M18 6l-12 12" />
          </>
        );
      case 'contact_support':
        return (
          <>
            <circle {...common} cx="12" cy="12" r="9" />
            <path {...common} d="M9.5 9.5a2.5 2.5 0 115 0c0 1.8-2.5 2.2-2.5 4" />
            <path {...common} d="M12 17h.01" />
          </>
        );
      case 'expand_more':
        return <path {...common} d="M6 9l6 6 6-6" />;
      case 'explore':
        return (
          <>
            <circle {...common} cx="12" cy="12" r="9" />
            <path {...common} d="M14.5 9.5l-2 5-5 2 2-5 5-2z" />
          </>
        );
      case 'groups':
      case 'groups_3':
        return (
          <>
            <circle {...common} cx="9" cy="9" r="2.5" />
            <circle {...common} cx="16" cy="9" r="2.5" />
            <path {...common} d="M4.5 19c.5-2.8 2.3-4.5 4.5-4.5s4 1.7 4.5 4.5" />
            <path {...common} d="M10.5 19c.5-2.8 2.3-4.5 4.5-4.5s4 1.7 4.5 4.5" />
          </>
        );
      case 'home':
        return (
          <>
            <path {...common} d="M3 11l9-8 9 8" />
            <path {...common} d="M5 10v10h14V10" />
            <path {...common} d="M9 20v-6h6v6" />
          </>
        );
      case 'laptop_mac':
        return (
          <>
            <rect {...common} x="4" y="5" width="16" height="10" rx="1.5" />
            <path {...common} d="M2 19h20" />
          </>
        );
      case 'mail':
        return (
          <>
            <rect {...common} x="3" y="5" width="18" height="14" rx="2" />
            <path {...common} d="M3 7l9 6 9-6" />
          </>
        );
      case 'menu':
        return (
          <>
            <path {...common} d="M4 6h16" />
            <path {...common} d="M4 12h16" />
            <path {...common} d="M4 18h16" />
          </>
        );
      case 'menu_book':
        return (
          <>
            <path {...common} d="M12 6c-2-2-6-2-8-1v13c2-1 6-1 8 1 2-2 6-2 8-1V5c-2-1-6-1-8 1z" />
            <path {...common} d="M12 6v13" />
          </>
        );
      case 'person':
        return (
          <>
            <circle {...common} cx="12" cy="8.5" r="3.5" />
            <path {...common} d="M6 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
          </>
        );
      case 'place':
        return (
          <>
            <path {...common} d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
            <circle {...common} cx="12" cy="11" r="2.2" />
          </>
        );
      case 'schedule':
        return (
          <>
            <circle {...common} cx="12" cy="12" r="9" />
            <path {...common} d="M12 7v5l3.5 2" />
          </>
        );
      case 'school':
        return (
          <>
            <path {...common} d="M2 9l10-5 10 5-10 5-10-5z" />
            <path {...common} d="M6 11v4c0 2 3 3 6 3s6-1 6-3v-4" />
            <path {...common} d="M22 9v6" />
          </>
        );
      case 'trending_up':
        return (
          <>
            <path {...common} d="M3 17l6-6 4 4 7-7" />
            <path {...common} d="M14 8h6v6" />
          </>
        );
      default:
        return <circle {...common} cx="12" cy="12" r="8" />;
    }
  })();

  return (
    <svg
      viewBox="0 0 24 24"
      className={`inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] ${className}`.trim()}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths}
    </svg>
  );
};

export default IconMark;
