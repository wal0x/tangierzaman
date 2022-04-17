import { createI18n } from "vue-i18n";

import en from "./en.json";
import fr from "./fr.json";
import ar from "./ar.json";

export enum LANGUAGE_DIRECTION {
  "LTR" = "ltr",
  "RTL" = "rtl",
}
export enum LANGUAGES {
  "EN" = "en",
  "FR" = "fr",
  "AR" = "ar",
}
export const LANGUAGES_DIRECTIONS: { [key in LANGUAGES]: LANGUAGE_DIRECTION } =
  {
    [LANGUAGES.EN]: LANGUAGE_DIRECTION.LTR,
    [LANGUAGES.FR]: LANGUAGE_DIRECTION.LTR,
    [LANGUAGES.AR]: LANGUAGE_DIRECTION.RTL,
  };

export const DEFAULT_LANGUAGE = LANGUAGES.AR;

const messages = {
  [LANGUAGES.EN]: en,
  [LANGUAGES.FR]: fr,
  [LANGUAGES.AR]: ar,
};

export const getLocal = () =>
  navigator.languages.length ? navigator.languages[0] : navigator.language;

export const vueI18n = createI18n({ locale: DEFAULT_LANGUAGE, messages });

const htmlTag = document.documentElement;
export function HTMLTagAdjustToLanguage(language: LANGUAGES) {
  htmlTag.setAttribute("lang", language);
  htmlTag.setAttribute("dir", LANGUAGES_DIRECTIONS[language]);
}
