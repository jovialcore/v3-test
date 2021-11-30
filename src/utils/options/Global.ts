import { i18n } from '@/i18n';

const { t } = i18n.global;

type OptionType = {
  [key: string]: string | number;
}

const QUANTITY_LANGUAGES = 4;

export const LanguagesOptions = ():OptionType[] => {
  const options = [];
  for (let i = 0; i < QUANTITY_LANGUAGES; i += 1) {
    options.push({
      _id: t(`Global.options.languages[${i}].value`),
      text: t(`Global.options.languages[${i}].text`),
    });
  }
  return options;
};
