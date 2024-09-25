import { AxiosClient } from "../gateways/axios-client";

class AuthService extends AxiosClient {
  testFunct() {
    console.log("test working");
  }

  async signUp(user: Record<string, any>) {
    const url = "/auth/customer-sign-up";
    const response = this.post(url, user);
    return response;
  }

  async login(email: string, password: string) {
    const url = "/auth/login";
    const response = this.post(url, { email, password });
    return response;
  }
}

export default new AuthService();
