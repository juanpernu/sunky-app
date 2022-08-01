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
    user: "",
    password: "",
  };
}
