import { useContext } from "react";
import { FormContext } from "../../../context";
import { bussinesSignup } from "../../../services";

export function useSubmit(onChange) {
  const { closeForm } = useContext(FormContext);

  return async (spec, formikActions) => {
    try {
      await axiosPromise(spec);
      closeForm();
      onChange();
    } catch (err) {
      console.error(err.message);
    } finally {
      formikActions.resetForm();
      formikActions.setSubmitting(false);
    }
  };
}

function axiosPromise(spec) {
  const apiSpec = transformSpec(spec);

  return bussinesSignup(apiSpec);
}

function transformSpec(spec) {
  const apiSpec = {
    name: spec.name,
    phone: spec.phone,
    email: spec.email,
    city: spec.city,
    terms_conditions: spec.terms_conditions,
  };

  return apiSpec;
}
