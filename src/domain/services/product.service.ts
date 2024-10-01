import { AxiosClient } from "../gateways/axios-client";

class ProductService extends AxiosClient {
  async getProducts(options: any) {
    const url = `/products?pageNumber=1&limit=${options.limit}`;
    const result = await this.get(url);
    return result;
  }

  async getFeaturedProducts() {
    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/featured-products`;
    const response = await this.get(url);
    return response;
  }

  async getRecentlyAddedProducts() {
    const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/products/recently-added`;
    const response = await this.get(url);
    return response;
  }
}

export default new ProductService();
