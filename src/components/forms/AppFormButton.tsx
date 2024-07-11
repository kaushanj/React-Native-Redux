import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const AppFormButton = ({title}:{title: string}) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default AppFormButton;
