
import axios from 'axios';
import * as crypto from "crypto-js";

let EMAIL = 'ikadismile@gmail.com'
let PASSWORD = '111222333'
let URL = 'http://localhost/danny/index.php/wp-json/wp/v2'

class UserService {
  accessToken: string
  constructor() {
    this.accessToken = crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(`${EMAIL}:${PASSWORD}`));
  }

  async createUser (data: object) {
    try {
      const response = await axios({
        url: `${URL}/users`,
        method: 'post',
        headers: { Authorization: `Basic ${this.accessToken}` },
        data
      });
      return response
    } catch (error) {
      return error
    }

  }
}

export default new UserService()
