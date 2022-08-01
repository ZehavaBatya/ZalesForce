import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { ConsoleV15 } from './components/ConsoleV15/ConsoleV15.js';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={classes.root}>
      <ConsoleV15 />
    </div>
  );
});
