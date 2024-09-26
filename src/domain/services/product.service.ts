export class ProductService {
  async getProdcuts(options: any) {
    const url = `/products?pageNumber=1&limit=${options.limit}`;
  }
}
