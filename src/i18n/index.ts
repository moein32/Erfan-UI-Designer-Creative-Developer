import { faTranslations } from './fa';
import { enTranslations } from './en';
import { Language, TranslationSchema } from './types';

export * from './types';
export { faTranslations } from './fa';
export { enTranslations } from './en';

export const translations: Record<Language, TranslationSchema> = {
  fa: faTranslations,
  en: enTranslations,
};

export const getTranslation = (lang: Language): TranslationSchema => {
  return translations[lang] || translations.fa;
};
