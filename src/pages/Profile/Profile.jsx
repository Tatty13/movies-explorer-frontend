import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';
import { Form } from '../../components';

function Profile({ user }) {
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
      <h1 className='section__title profile__title'>
        {`Привет, ${user.name}!`}
      </h1>
      <Form
        name='profile'
        onSubmit={handleSubmit}
        isEditMode={isEditMode}>
        <label className='form__block form__block__mode_row'>
          Имя
          <input
            className={`form__input form__input_mode_row`}
            type='text'
            name='name'
            placeholder='Введите имя'
            defaultValue={user.name}
            minLength='2'
            maxLength='30'
            required
            disabled={!isEditMode}
          />
          <span className='form__input-error form__input-error_mode_row'></span>
        </label>
        <label className='form__block form__block__mode_row'>
          E-mail
          <input
            className={`form__input form__input_mode_row`}
            type='email'
            name='email'
            placeholder='Введите Email'
            defaultValue={user.email}
            required
            disabled={!isEditMode}
          />
          <span className='form__input-error form__input-error_mode_row'></span>
        </label>
      </Form>
      {!isEditMode && (
        <div className='controls'>
          <button
            onClick={handleInfoEdit}
            type='button'
            className='controls__btn controls__btn_theme_normal hover-effect hover-effect_type_opacity-60
            '>
            Редактировать
          </button>
          <button
            onClick={handleSignout}
            type='button'
            className='controls__btn controls__btn_theme_important hover-effect hover-effect_type_opacity-60
            '>
            Выйти из аккаунта
          </button>
        </div>
      )}
    </section>
  );

  //   <SectionWithForm
  //     title={`Привет, ${user.name}!`}
  //     sectionName='profile'
  //     onSignout={handleSignout}
  //     onEditClick={handleInfoEdit}
  //     isEditMode={isEditMode}
  //     onSubmit={handleSubmit}>
  //     <label className='form__block form__block__mode_row'>
  //       Имя
  //       <input
  //         className={`form__input form__input_mode_row`}
  //         type='text'
  //         name='name'
  //         placeholder='Введите имя'
  //         defaultValue={user.name}
  //         minLength='2'
  //         maxLength='30'
  //         required
  //         disabled={!isEditMode}
  //       />
  //       <span className='form__input-error form__input-error_mode_row'></span>
  //     </label>
  //     <label className='form__block form__block__mode_row'>
  //       E-mail
  //       <input
  //         className={`form__input form__input_mode_row`}
  //         type='email'
  //         name='email'
  //         placeholder='Введите Email'
  //         defaultValue={user.email}
  //         required
  //         disabled={!isEditMode}
  //       />
  //       <span className='form__input-error form__input-error_mode_row'></span>
  //     </label>
  //   </SectionWithForm>
  // );
}

export { Profile };
