import { createContext, useContext } from 'react';
import { Lang } from '../content/siteContent';

export const LangContext = createContext<Lang>('en');

export function useLang(): Lang {
  return useContext(LangContext);
}
