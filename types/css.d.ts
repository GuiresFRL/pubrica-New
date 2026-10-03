import 'react';

/* The markup sets CSS custom properties inline (--i, --dock-h and friends).
   React allows it; the default typings do not describe it. */
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
