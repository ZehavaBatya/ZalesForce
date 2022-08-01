import { memo, SVGProps } from 'react';

const StarIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 41 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.3334 31.3437L32.6934 39L29.4134 24.57L40.3334 14.8611L25.9534 13.6089L20.3334 0L14.7134 13.6089L0.333374 14.8611L11.2534 24.57L7.97337 39L20.3334 31.3437Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(StarIconIcon);
export { Memo as StarIconIcon };
