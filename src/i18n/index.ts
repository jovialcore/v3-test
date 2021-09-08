const files: __WebpackModuleApi.RequireContext = require.context('./languages', true, /\.json$/);

type MessagesType = {
  [key: string]: MessagesType,
}

const messages: MessagesType = {
  br: {},
  es: {},
  fr: {},
  us: {},
};

const languages = ['br', 'es', 'fr', 'us'];

files.keys().forEach((filePath) => {
  const filePathReplace = filePath.replace('./', '');
  const nameFoldersAndFiles = filePathReplace.split('/');
  const languageFolder = nameFoldersAndFiles[0];

  if (languages.includes(languageFolder)) {
    const fileName = nameFoldersAndFiles[nameFoldersAndFiles.length - 1];
    const fileNameWithoutExtension = fileName.replace('.json', '');

    messages[`${languageFolder}`][fileNameWithoutExtension] = files(filePath);
  }
});

export const Messages = messages;

export default {
  Messages: messages,
};
