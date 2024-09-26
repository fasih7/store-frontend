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
      return { error: error.response.data };
    }
  }

  async get(url: string) {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}${url}`
    );
    return result.data;
  }
}
