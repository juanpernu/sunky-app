import React from "react";
import { Formik } from "formik";
import { useForm } from "./useForm";
import { useSubmit } from "./useSubmit";
import { Input, Button, Form, SquareCheckbox } from "../../../index";

export const SingupForm = ({ onChange }) => {
  const { initialValues, validate } = useForm();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={useSubmit(onChange)}
      validate={validate}
      enableReinitialize
    >
      {({ submitForm, isSubmitting }) => (
        <Form showActions={false}>
          <p className="mb-8 text-center text-lg text-neutral-600 md:text-2xl">
            <span className="font-bold">Regístrate. </span>
            <span className="font-regular">Empieza a ahorrar.</span>
          </p>
          <Input name="name" label="Nombre" type="text" />
          <Input name="lastname" label="Apellido" type="text" />
          <Input name="email" label="Email" type="text" />
          <Input name="phone" label="Teléfono" type="number" />
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
