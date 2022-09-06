import React from "react";
import { useFieldProps } from "../../../hooks";

export const Error = ({ name }) => {
  const { meta } = useFieldProps(name);

  return (
    <p className="mt-2 text-xs text-red-500">
      &nbsp;{meta.error && meta.touched ? meta.error : ""}
    </p>
  );
};
