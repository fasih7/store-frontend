import axios from "axios";

export const loginUser = async ({ email, password }: any) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`,
    { email, password }
  );
  return response.data;
};
