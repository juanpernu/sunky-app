import { useFormikContext } from 'formik';
import { identity } from '../utils';

export function useOnChange(name, transform = identity) {
  const { setFieldValue, setFieldTouched } = useFormikContext();

  return (value) => {
    setFieldValue(name, value && transform(value));
    setFieldTouched(name, true);
  };
}
