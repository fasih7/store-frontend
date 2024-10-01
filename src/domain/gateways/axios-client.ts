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
      if (error.response) return { error: error.response.data };
      return error;
    }
  }

  async get(url: string) {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}${url}`
      );
      return result.data;
    } catch (error: any) {
      if (error.response) return { error: error.response.data };
      return error;
    }
  }
}
