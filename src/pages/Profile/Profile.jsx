import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';
import { CurrentUserContext } from '../../contexts';
import { Form, FormBlockWithInput } from '../../components';
import { useInput, useValidation } from '../../hooks';

function Profile({ onUpdateUser, isLoading }) {
  const { name, email } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [isEditMode, setEditModeState] = useState(false);
  const [isSubmitForbidden, setIsSubmitForbidden] = useState(true);

  const { values: userData, handleInputChange } = useInput({
    name,
    email,
  });

  const { errorMessages, isFormValid, isInputsValid, handleValidityChange } =
    useValidation();

  const handleChange = (evt) => {
    handleInputChange(evt);
    handleValidityChange(evt);
  };

  const handleSignout = () => {
    navigate('/', { replace: true });
  };

  const handleInfoEdit = () => {
    setEditModeState(true);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // await onUpdateUser();
    setEditModeState(false);
  };

  useEffect(() => {
    setIsSubmitForbidden(name === userData.name && email === userData.email);
  }, [name, email, userData.name, userData.email]);

  return (
    <section className={`container section profile`}>
      <h1 className='section__title profile__title'>{`Привет, ${name}!`}</h1>
      <Form
        name='profile'
        onSubmit={handleSubmit}
        isLoading={isLoading}
        isFormValid={isFormValid}
        isSubmitForbidden={isSubmitForbidden}
        isEditMode={isEditMode}>
        <FormBlockWithInput
          mode='row'
          blockName='Имя'
          errorMessage={errorMessages.name}
          type='text'
          name='name'
          placeholder='Введите имя'
          minLength='2'
          maxLength='30'
          value={userData.name}
          onChange={handleChange}
          isValid={isInputsValid.name}
          required
          disabled={!isEditMode}
        />
        <FormBlockWithInput
          mode='row'
          blockName='E-mail'
          errorMessage={errorMessages.email}
          type='email'
          name='email'
          placeholder='Введите Email'
          value={userData.email}
          onChange={handleChange}
          isValid={isInputsValid.email}
          required
          disabled={!isEditMode}
        />
      </Form>
      {!isEditMode && (
        <div className='controls'>
          <button
            onClick={handleInfoEdit}
            type='button'
            className='btn controls__btn controls__btn_theme_normal hover-effect hover-effect_type_opacity-60
            '>
            Редактировать
          </button>
          <button
            onClick={handleSignout}
            type='button'
            className='btn controls__btn controls__btn_theme_important hover-effect hover-effect_type_opacity-60
            '>
            Выйти из аккаунта
          </button>
        </div>
      )}
    </section>
  );
}

export { Profile };
