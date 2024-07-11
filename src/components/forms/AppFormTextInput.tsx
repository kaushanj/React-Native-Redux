import AppTextInput from "@components/AppTextInput";
import { useFormikContext } from "formik";

const AppFormTextInput = ({
  name,
  label,
}: {
  name: string;
  label?: string;
}) => {
  const { touched, handleChange, handleBlur, errors, values } =
    useFormikContext<any>();

  return (
    <AppTextInput
      onChangeText={handleChange(name)}
      label={label}
      value={values[name]}
    />
  );
};

export default AppFormTextInput;
