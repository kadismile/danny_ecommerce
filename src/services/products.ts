import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";

class ProductService {
  api
  constructor() {
   this.api = new WooCommerceRestApi({
      url: `${ process.env.REACT_APP_WOOCOMMERCE_API_ENDPOINT }`,
      consumerKey: `${ process.env.REACT_APP_WOOCOMMERCE_CONSUMER_KEY }`,
      consumerSecret: `${ process.env.REACT_APP_WOOCOMMERCE_CONSUMER_SECRET }`,
      version: "wc/v3",
    });
  }

  async listProducts() {
    try {
      return await this.api.get("products", { per_page: 20 })
    } catch (e) {
      throw new Error(e)
    }
  }

  async listProductsByCategory(catId: any) {
    try {
      return await this.api.get("products", { per_page: 10, category: catId })
    } catch (e) {
      throw new Error(e)
    }
  }

  async listCategories() {
    try {
      return await this.api.get("products/categories")
    } catch (e) {
      throw new Error(e)
    }
  }

  async listProductById(id: any) {
    try {
      return await this.api.get(`products/${id}`)
    } catch (e) {
      throw new Error(e)
    }
  }

  async createOrder(data: object) {
    try {
      return await this.api.post(`orders`, data)
    } catch (e) {
      throw new Error(e)
    }
  }

  async createOrder2(data: any) {
    let defaultHeaders = {
      params: {},
      withCredentials: true,
      auth: {
        username:`${process.env.REACT_APP_USERNAME}`,
        password:`${process.env.REACT_APP_PASSWORD}`
      }
    };
    try {
      return await axios.post(`${process.env.REACT_APP_WOOCOMMERCE_API_ENDPOINT}/wp-json/wc/v3/orders`, data, defaultHeaders);
    } catch (e) {
      throw new Error(e)
    }
  }
  async createNote(data: any) {
    let defaultHeaders = {
      params: {},
      withCredentials: true,
      auth: {
        username: `${process.env.REACT_APP_USERNAME}`,
        password: `${process.env.REACT_APP_PASSWORD}`
      }
    };
    try {
      let noteData = { notes: data.notes }
      return await axios.post(`${process.env.REACT_APP_WOOCOMMERCE_API_ENDPOINT}/wp-json/wc/v3/orders/${data.id}/notes`, noteData, defaultHeaders);
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new ProductService()