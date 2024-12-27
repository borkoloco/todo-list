import { useAuth0 } from "@auth0/auth0-react";

export const useAuthHeader = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAuthHeader = async (): Promise<Record<string, string>> => {
    const token = await getAccessTokenSilently();
    console.log(token);
    return {
      Authorization: `Bearer ${token}`,
    };
  };

  return getAuthHeader;
};
