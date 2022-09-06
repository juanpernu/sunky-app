import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik } from "formik";
import { useForm } from "./useForm";
import { useSubmit } from "./useSubmit";
import { Input, Button, Form, SquareCheckbox } from "../../index";

export const SingupForm = ({ onChange }) => {
  const { initialValues } = useForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={useSubmit(onChange)}
      enableReinitialize
    >
      {({ submitForm, isSubmitting }) => (
        <Form showActions={false}>
          <p className="mb-8 text-center text-lg text-neutral-600 md:text-2xl">
            <span className="font-bold">Regístrate. </span>
            <span className="font-regular">Es rápido y fácil.</span>
          </p>
          <Input name="name" label="Nombre del negocio" type="text" />
          <Input name="phone" label="Teléfono" type="text" />
          <Input name="email" label="Email" type="text" />
          <Input name="city" label="Ciudad" type="text" />
          <SquareCheckbox
            name="terms_conditions"
            label="Aceptar términos y condiciones"
            description="Al registrarte aceptas todos los términos y condiciones."
          />
          <div className="mt-4 flex justify-center">
            <ReCAPTCHA
              sitekey="6LeOIdIhAAAAADN2HKs394907QBUlLL03GgF7UxF"
              onChange={onChange}
            />
          </div>
          <Button
            className="mt-8 flex items-center justify-center text-base w-full h-10"
            loading={isSubmitting}
            onClick={submitForm}
          >
            <p>Crear cuenta</p>
          </Button>
        </Form>
      )}
    </Formik>
  );
};
