import { useState, useEffect } from "react";

export function useForm() {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());

  useEffect(() => {
    setInitialValues(getInitialValues());
  }, []);

  return { initialValues };
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
