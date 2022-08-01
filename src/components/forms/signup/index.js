import { Formik } from 'formik';
import { useForm } from './useForm';
import { useSubmit } from './useSubmit';
import { Input, Button, Form, SquareCheckbox } from '../../index';

export const SingupForm = ({ onChange }) => {
  const { initialValues } = useForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={useSubmit(onChange)}
      enableReinitialize
    >
      {({ submitForm, isSubmitting, isValid }) => (
        <Form showActions={false}>
          <>
            <p className="mt-4 mb-8 text-center text-2xl text-neutral-600">
              <span className="font-bold">Regístrate. </span>
              <span className="font-regular">Es rápido y fácil.</span>
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Input name="user" label="Nombres" type="text" />
              <Input name="password" label="Apellido" type="text" />
            </div>
            <Input name="user" label="Email" type="text" />
            <Input name="user" label="Contraseña" type="password" />
            <SquareCheckbox
              name="terms"
              label="Aceptar términos y condiciones"
              description="Al registrarte aceptas todos los términos y condiciones."
            />
            <Button
              className="group relative items-center"
              disabled={isSubmitting || !isValid}
              loading={isSubmitting}
              onClick={submitForm}
            >
              <p>Crear cuenta</p>
            </Button>
          </>
        </Form>
      )}
    </Formik>
  );
};
