import * as Localization from "expo-localization";
import I18n from "i18n-js";

import en from "../languages/en";
import zh from "../languages/zh";

export function localize() {
  I18n.fallbacks = true;
  I18n.translations = {
    en,
    zh
  };
  I18n.defaultLocale = "en";
  I18n.locale = Localization.locale;
}

export const locale = I18n.locale;

export function translate(scope, options = null) {
  return I18n.t(scope, options);
}
