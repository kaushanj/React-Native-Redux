import { useAppDispatch } from "src/store/configureStore";
import {
  login,
  useAuthLoading,
  logout,
  useLoggedIn,
  refresh,
} from "src/store/reducers/auth";

export default function () {
  const dispatch = useAppDispatch();
  const loading = useAuthLoading();
  const loggedIn = useLoggedIn();

  const onLogin = (loginInfo: { username: string; password: string }) => {
    dispatch(login(loginInfo));
  };

  const onLogout = async () => {
    dispatch(logout());
  };

  const onRefresh = async () => {
    dispatch(refresh());
  };

  return { loggedIn, onLogin, onLogout, onRefresh, loading };
}
