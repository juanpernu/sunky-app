import { useContext } from "react";
import { FormContext } from "../../../context";

export function useSubmit(onChange) {
  const { closeForm } = useContext(FormContext);

  return async (spec, formikActions) => {
    try {
      await axiosPromise(spec);
      closeForm();
      onChange();
    } catch (err) {
      console.log(err.message);
    } finally {
      formikActions.resetForm();
      formikActions.setSubmitting(false);
    }
  };
}

function axiosPromise(spec) {
  const apiSpec = transformSpec(spec);
}

function transformSpec(spec) {
  const apiSpec = {
    user: spec.user,
    password: spec.password,
  };

  return apiSpec;
}
