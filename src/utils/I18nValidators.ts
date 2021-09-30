import * as validators from '@vuelidate/validators';
import { ValidationRuleWithParams } from '@vuelidate/core';
import i18n from '@/i18n';

const { createI18nMessage } = validators;

const { t } = i18n.global || i18n;

const messagePath = ({ $validator }: {$validator: string}) => `Global.errors.${$validator}`;

const withI18nMessage = createI18nMessage({ t, messagePath });

type returnType = ValidationRuleWithParams | ((...args: unknown[]) => ValidationRuleWithParams);

export const required = withI18nMessage(validators.required);

export const maxLength = (value: number): returnType => withI18nMessage(
  validators.maxLength(value),
);

export const minLength = (value: number): returnType => withI18nMessage(
  validators.minLength(value),
);

export const email = withI18nMessage(validators.email);

export const upperCase = withI18nMessage(
  validators.helpers.withMessage(
    'This field must contain at least one capital letter',
    (value: string) => (/[A-Z]/g).test(value),
  ),
);
