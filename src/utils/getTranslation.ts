import i18n from 'i18n';

const getTranslation = (line: string, NS: string) => i18n.t(line, { ns: NS });

export default getTranslation;
