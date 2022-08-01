import { useField } from "formik";
import { useMemo, useRef } from "react";
import { useUniqueId } from "./index";
import { identity } from "../utils";

export function useFieldProps(name, transform = identity) {
  const id = useUniqueId();
  const [fiprops, meta, helpers] = useField(name);

  const { current: setFieldTouched } = useRef(helpers.setTouched);
  const { current: setFieldValue } = useRef(helpers.setValue);

  // Define field prop from FieldInputProps.
  // Transform field value if required and convert null to undefined.
  const field = useMemo(
    () => ({
      ...fiprops,
      value: isValue(fiprops.value) ? transform(fiprops.value) : undefined,
    }),
    [fiprops, transform]
  );

  return { id, field, meta, setFieldTouched, setFieldValue };
}

function isValue(value) {
  return value !== null && value !== undefined;
}
