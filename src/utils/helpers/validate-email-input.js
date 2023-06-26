import { CYRILLIC_PATTERN, EMAIL_PATTERN } from '../constants';

const isEmail = (value) => EMAIL_PATTERN.test(value);
const isContainCyrillic = (value) => CYRILLIC_PATTERN.test(value);

export const validateEmailInput = (e) => {
  if (e.target.type === 'email') {
    e.target.setCustomValidity(
      !e.target.value.length
        ? 'Заполните это поле.'
        : isContainCyrillic(e.target.value)
        ? 'Перед символом @ допустимы буквы только латинского алфавита.'
        : !isEmail(e.target.value)
        ? 'Введите валидный адрес электронной почты в формате name@domain.zone'
        : ''
    );
  }
};
