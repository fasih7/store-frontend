import axios from "axios";

export class AxiosClient {
  // /auth/customer-sign-up
  async post(url: string, body: any) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}${url}`,
        body
      );

      return response.data;
    } catch (error: any) {
      console.log(error.code);

      return { error: { code: error.code, message: error.message } };
    }
  }
}
