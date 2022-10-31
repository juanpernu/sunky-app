import { useState, useEffect, useCallback } from "react";

export function useForm() {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());

  useEffect(() => {
    setInitialValues(getInitialValues());
  }, []);

  const validate = useCallback((values) => {
    const errors = {};
    const requiredMsg = "Campo requerido";
    const requiredFields = ["name", "lastname", "phone", "email"];

    requiredFields.forEach((requiredField) => {
      if (!values[requiredField]) {
        errors[requiredField] = requiredMsg;
      }
    });

    return errors;
  }, []);

  return { initialValues, validate };
}

function getInitialValues() {
  return {
    name: "",
    lastname: "",
    phone: "",
    email: "",
  };
}
