import * as SecureStore from "expo-secure-store";

type TOKEN_TYPE = {
  accessToke: string;
  refreshToken: string;
};
export default () => {
  const accessTokenKey = "JWTAccessKey";
  const refreshKey = "JWTRefreshKey";

  async function getToken(): Promise<TOKEN_TYPE | undefined> {
    const accessToke = await SecureStore.getItemAsync(accessTokenKey);
    const refreshToken = await SecureStore.getItemAsync(refreshKey);

    if (!accessToke || !refreshToken) {
      return;
    }
    return { accessToke, refreshToken };
  }

  async function setToken(token: TOKEN_TYPE) {
    await SecureStore.setItemAsync(accessTokenKey, token.accessToke);
    await SecureStore.setItemAsync(refreshKey, token.refreshToken);
  }

  return { getToken, setToken };
};
