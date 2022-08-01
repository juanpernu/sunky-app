import React, { useContext, useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';
import { Button } from '../../index';
import { FormContext } from '../../../context';
import { useKeypress } from '../../../hooks';

export const Form = ({
  children,
  submitTitle = 'Guardar',
  cancelTitle = 'Cancelar',
  ignoreDirty = false,
  showActions = true,
  submitOnEnter = true,
}) => {
  const formRef = useRef(null);
  const { isOpenForm, closeForm } = useContext(FormContext);
  const { isSubmitting, isValid, dirty, resetForm, submitForm } =
    useFormikContext();

  useEffect(() => {
    if (!isOpenForm) {
      resetForm();
    }
  }, [isOpenForm, resetForm]);

  useKeypress('Enter', (e) => {
    // This is for cross-browsing compatibility
    const path = e.path || (e.composedPath && e.composedPath());
    const isForm = path.includes(formRef.current);
    if (isValid && isForm && submitOnEnter) return submitForm();
  });

  return (
    <div ref={formRef}>
      {children}
      {showActions && (
        <div className="mt-8">
          <Button
            onClick={submitForm}
            className="mt-0 mr-1 w-[80px] px-20"
            disabled={isSubmitting || (!ignoreDirty && !dirty) || !isValid}
            loading={isSubmitting}
          >
            <p>{submitTitle}</p>
          </Button>
          <Button
            onClick={closeForm}
            className="mt-0 w-[80px] bg-red-500 px-20"
            disabled={isSubmitting}
          >
            <p>{cancelTitle}</p>
          </Button>
        </div>
      )}
    </div>
  );
};
