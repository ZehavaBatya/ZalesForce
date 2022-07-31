import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { Console } from './components/Console/Console';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={classes.root}>
      <Console />
    </div>
  );
});
