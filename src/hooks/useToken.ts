import * as SecureStore from "expo-secure-store";

export type TOKEN_TYPE = {
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

  async function setToken(token: Partial<TOKEN_TYPE>) {
    if (token.accessToke)
      await SecureStore.setItemAsync(accessTokenKey, token.accessToke);

    if (token.refreshToken)
      await SecureStore.setItemAsync(refreshKey, token.refreshToken);
  }

  async function remove() {
    await SecureStore.deleteItemAsync(accessTokenKey);
    await SecureStore.deleteItemAsync(refreshKey);
  }

  return { getToken, setToken, remove };
};
