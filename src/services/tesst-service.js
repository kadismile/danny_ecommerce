import axios from "axios/index";

let defaultHeaders = {
  params: {},
  withCredentials: true,
  auth: {
    username: "ikadismile@gmail.com",
    password: "111222333"
  }
};

/**
 * Retrieves category tree
 * @returns {AxiosPromise<any>}
 */
const getCategories = () => {
  defaultHeaders.params = {
    per_page: 20
  };

  return axios.get(`http://localhost/danny/index.php/wp-json/wc/v3/products/categories`, defaultHeaders);
};

/**
 * Retrieves products with category_id given as parameter
 * @param category_id
 * @returns {AxiosPromise<any>}
 */
const getProductsByCategory = (category, page, per_page) => {

  defaultHeaders.params = {
    orderby: 'title',
    order: 'asc',
    status: 'publish',
    category,
    per_page,
    page,
  };

  return axios.get(`${process.env.REACT_APP_WOOCOMMERCE_API_ENDPOINT}/wp-json/wc/v3/products`, defaultHeaders)
};

const getCategoryById = (category_id) => {

  return axios.get(`http://localhost/danny/index.php/wp-json/wc/v3/products/categories/${category_id}`, defaultHeaders)
};

/**
 * Get payment method info for checkout
 * @returns {AxiosPromise<any>}
 */
const getPaymentInfo = () => {
  return axios.get(`http://localhost/danny/index.php/wp-json/wc/v3/payment_gateways`, defaultHeaders);
};

const createOrder = async (data) => {
  return await axios.post(`http://localhost/danny/index.php/wp-json/wc/v3/orders`, data, defaultHeaders);
};

const createNote = async (data) => {
  let defaultHeaders = {
    params: {},
    withCredentials: true,
    auth: {
      username: `${process.env.REACT_APP_USERNAME}`,
      password: `${process.env.REACT_APP_PASSWORD}`
    }
  };
  let noteData = { notes: data.notes }
  return await axios.post(`http://localhost/danny/index.php/wp-json/wc/v3/orders/${data.id}/notes`, noteData, defaultHeaders);
}


export {getPaymentInfo, getProductsByCategory, getCategories, getCategoryById, createOrder};