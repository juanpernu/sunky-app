import { useState, useEffect, useCallback } from "react";

export function useForm() {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());

  useEffect(() => {
    setInitialValues(getInitialValues());
  }, []);

  const validate = useCallback((values) => {
    const errors = {};
    const requiredMsg = "Campo requerido";
    const requiredFields = [
      "name",
      "phone",
      "email",
      "city",
      "terms_conditions",
    ];

    requiredFields.forEach((requiredField) => {
      if (!values[requiredField]) {
        errors[requiredField] = requiredMsg;
      }
    });

    if (!values.terms_conditions) {
      errors.terms_conditions =
        "Debes aceptar los términos y condiciones para continuar.";
    }

    return errors;
  }, []);

  return { initialValues, validate };
}

function getInitialValues() {
  return {
    name: "",
    phone: "",
    email: "",
    city: "",
    terms_conditions: false,
  };
}
