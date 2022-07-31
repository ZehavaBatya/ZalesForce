import { memo, SVGProps } from 'react';

const StarIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15 31.3437L24.27 39L21.81 24.57L30 14.8611L19.215 13.6089L15 0L10.785 13.6089L0 14.8611L8.19 24.57L5.73 39L15 31.3437Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(StarIconIcon);
export { Memo as StarIconIcon };
