import axios from "axios";

//! TODO: add try catch
//TODO: Figure out class
//TODO: revisit the implementation according to gateways

// export class ProductsGateway {
// }

export const getProducts = async (options?: any) => {
  //TODO: need to give query type
  const { limit = 12 } = options;
  const result = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/products?pageNumber=1&limit=${limit}`
  );
  return result.data;
};

export const getFeaturedProducts = async () => {
  const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/featured-products`;
  const result = await axios.get(url);
  return result.data;
};

export const getRecentlyAddedProducts = async () => {
  const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/products/recently-added`;
  const result = await axios.get(url);
  return result.data;
};
