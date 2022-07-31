import { memo, SVGProps } from 'react';

const SearchBarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 406 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1 6C1 3.23858 3.23858 1 6 1H400C402.761 1 405 3.23858 405 6V39C405 41.7614 402.761 44 400 44H6C3.23858 44 1 41.7614 1 39V6Z'
      fill='white'
    />
    <path
      d='M1 6C1 3.23858 3.23858 1 6 1H400C402.761 1 405 3.23858 405 6V39C405 41.7614 402.761 44 400 44H6C3.23858 44 1 41.7614 1 39V6Z'
      stroke='#F5F5F5'
    />
    <path
      d='M1 6C1 3.23858 3.23858 1 6 1H400C402.761 1 405 3.23858 405 6V39C405 41.7614 402.761 44 400 44H6C3.23858 44 1 41.7614 1 39V6Z'
      stroke='black'
      strokeOpacity={0.2}
    />
  </svg>
);

const Memo = memo(SearchBarIcon);
export { Memo as SearchBarIcon };
