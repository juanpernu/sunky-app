import { useContext } from "react";
import {
  FormContext,
  LoadingContext,
  SnackbarContext,
} from "../../../../context";
import { customersSignup } from "../../../../services";

export function useSubmit(onChange) {
  const { closeForm } = useContext(FormContext);
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const { showErrorSnackbar } = useContext(SnackbarContext);

  return async (spec, formikActions) => {
    try {
      startLoading();
      const {
        data: { data },
      } = await axiosPromise(spec);
      if (data) onChange();
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
  console.log(apiSpec);

  return customersSignup(apiSpec);
}

function transformSpec(spec) {
  const apiSpec = {
    name: spec.name,
    lastname: spec.lastname,
    phone: spec.phone,
    email: spec.email,
  };

  return apiSpec;
}
