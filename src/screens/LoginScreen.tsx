import React from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import constants from "expo-constants";
import * as Yup from "yup";

import AppScreen from "@components/AppScreen";
import { Formik } from "formik";
import AppFormTextInput from "@components/forms/AppFormTextInput";
import { IUserLogin } from "src/models/user/user.interface";
import AppFormButton from "@components/forms/AppFormButton";
import useAuth from "src/auth/useAuth";




const LoginScreen = () => {

  const { loading, onLogin } = useAuth();


  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (loginInfo: IUserLogin) => {
    Keyboard.dismiss();
    onLogin(loginInfo);
  };

  return (
    <AppScreen>
      <View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <>
            <AppFormTextInput label="Username" name="username" />
            <AppFormTextInput label="Username" name="password" />

            <AppFormButton title="Login" loading={loading} />
          </>
        </Formik>
      </View>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
  },
});
