import { en } from './en-us';
import { fr } from './fr-fr';
import { de } from './de-de';

export type TTranslateValues = {
  sideMenuLabel: string;
  tiles: string;
  list: string;
  readMore: string;
  newsLabel1: string;
  newsLabel2: string;
  aroundTheWorld: string;
  footer: string;
  checkMe: string;
  error: string;
  noCountryFound: string;
  noNewsFound: string;
  source: string;
  author: string;
};

export type TLanguage = {
  [key: string]: TTranslateValues;
};

export default {
  ...en,
  ...de,
  ...fr,
};
