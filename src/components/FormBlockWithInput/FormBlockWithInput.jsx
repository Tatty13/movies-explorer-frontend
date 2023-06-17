import { Input } from '..';

import './FormBlockWithInput.css';

function FormBlockWithInput({ mode, blockName, errorMessage, ...inputProps }) {
  const error = (
    <span className={`form__input-error form__input-error_mode_${mode}`}>
      {errorMessage}
    </span>
  );

  return (
    <>
      <label className={`form__block form__block_mode_${mode}`}>
        <span className={`form__block-name form__block-name_mode_${mode}`}>
          {blockName}
        </span>
        <Input
          mode={mode}
          {...inputProps}
        />
        {mode === 'row' && error}
      </label>
      {mode === 'column' && error}
    </>
  );
}

export { FormBlockWithInput };
