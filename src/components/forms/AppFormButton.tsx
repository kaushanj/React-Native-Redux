import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const AppFormButton = ({
  title,
  loading,
}: {
  title: string;
  loading?: boolean;
}) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} loading={loading} />;
};

export default AppFormButton;
