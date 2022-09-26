import { useContext } from "react";
import {
  FormContext,
  LoadingContext,
  SnackbarContext,
} from "../../../../context";
import { bussinesSignup } from "../../../../services";

export function useSubmit(onChange) {
  const { closeForm } = useContext(FormContext);
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const { showErrorSnackbar } = useContext(SnackbarContext);

  return async (spec, formikActions) => {
    try {
      if (!spec.terms_conditions) {
        throw new Error("Por favor, acepta los términos y condiciones");
      }
      startLoading();
      const {
        data: { data },
      } = await axiosPromise(spec);
      if (data) onChange(data._id.toString());
      closeForm();
    } catch (err) {
      showErrorSnackbar(err.message);
    } finally {
      formikActions.resetForm();
      formikActions.setSubmitting(false);
      stopLoading();
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
