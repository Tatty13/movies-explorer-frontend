import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';
import { CurrentUserContext } from '../../contexts';
import { Form, FormBlockWithInput } from '../../components';

function Profile({}) {
  const { name, email } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [isEditMode, setEditModeState] = useState(false);

  const handleSignout = () => {
    navigate('/', { replace: true });
  };

  const handleInfoEdit = () => {
    setEditModeState(true);
  };

  const handleSubmit = () => {
    setEditModeState(false);
  };

  return (
    <section className={`container section profile`}>
      <h1 className='section__title profile__title'>{`Привет, ${name}!`}</h1>
      <Form
        name='profile'
        onSubmit={handleSubmit}
        isEditMode={isEditMode}>
        <FormBlockWithInput
          mode='row'
          blockName='Имя'
          type='text'
          name='name'
          placeholder='Введите имя'
          defaultValue={name}
          minLength='2'
          maxLength='30'
          required
          disabled={!isEditMode}
        />
        <FormBlockWithInput
          mode='row'
          blockName='E-mail'
          type='email'
          name='email'
          placeholder='Введите Email'
          defaultValue={email}
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
