import { createI18n } from 'vue-i18n';

type MessagesType = {
  [key: string]: MessagesType,
}

const messages: MessagesType = {
  'pt-BR': {},
  'es-ES': {},
  'fr-FR': {},
  'en-US': {},
};

const languages = ['pt-BR', 'es-ES', 'fr-FR', 'en-US'];

const files = import.meta.glob('./languages/**/*.json');

Object.keys(files).forEach(async (file) => {
  const structures = file.split('/');

  const language = structures[2];

  if (languages.includes(language)) {
    const fileName = structures[structures.length - 1].replace('.json', '');

    messages[`${language}`][fileName] = await files[file]();
  }
});

export const i18n = createI18n({
  locale: window.localStorage.getItem('lang') || 'pt-BR',
  messages,
});
