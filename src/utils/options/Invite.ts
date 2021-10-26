import { i18n } from '@/i18n';

const { t } = i18n.global;

type OptionType = {
  [key: string]: string | number;
}

const QUANTITY_TEAM_ROLES = 3;

export const TeamRolesOptions = ():OptionType[] => {
  const options = [];
  for (let i = 0; i < QUANTITY_TEAM_ROLES; i += 1) {
    options.push({
      value: t(`InviteModal.teamRoles.options[${i}].value`),
      title: t(`InviteModal.teamRoles.options[${i}].title`),
      subtitle: t(`InviteModal.teamRoles.options[${i}].subtitle`),
    });
  }
  return options;
};
