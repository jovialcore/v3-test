import { i18n } from '@/i18n';

const { t } = i18n.global;

type OptionType = {
  [key: string]: string | number;
}

const QUANTITY_SIZES = 9;

export const CompanySizeOptions = ():OptionType[] => {
  const options = [];
  for (let i = 0; i < QUANTITY_SIZES; i += 1) {
    options.push({
      _id: i,
      text: t(`Step3.form.options.companySize[${i}]`),
    });
  }
  return options;
};

const QUANTITY_CRMS = 37;

export const IndustryOptions = ():OptionType[] => {
  const options = [];
  for (let i = 0; i < QUANTITY_CRMS; i += 1) {
    options.push({
      _id: t(`Step3.form.options.industry[${i}]`),
      text: t(`Step3.form.options.industry[${i}]`),
    });
  }
  return options;
};

const QUANTITY_INDUSTRIES = 7;

export const CRMOptions = ():OptionType[] => {
  const options = [];
  for (let i = 0; i < QUANTITY_INDUSTRIES; i += 1) {
    options.push({
      _id: t(`Step3.form.options.crm[${i}]`),
      text: t(`Step3.form.options.crm[${i}]`),
    });
  }
  return options;
};

const QUANTITY_WHAT_BROUGHT = 12;

export const WhatBroughtOptions = ():OptionType[] => {
  const options = [];
  for (let i = 0; i < QUANTITY_WHAT_BROUGHT; i += 1) {
    options.push({
      _id: t(`Step2.form.options.whatBrought[${i}]`),
      text: t(`Step2.form.options.whatBrought[${i}]`),
    });
  }
  return options;
};
