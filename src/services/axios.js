// eslint-disable-next-line no-unused-vars
import axios from 'axios';

class Api {
  constructor() {
    const instance = axios.create({
      baseURL: 'http://localhost:3004/',
      headers: {
        'User-Token': '',
      },
    });

    this.instance = instance;
  }

  setUserToken(token) {
    this.instance.defaults.headers['User-Token'] = token;
  }

  removeUserToken() {
    this.instance.defaults.headers['User-Token'] = '';
  }

  getTokenFromLocalStorage() {
    return window.sessionStorage.getItem('user-token');
  }

  /**
   @param {string} url
   @param {AxiosRequestConfig} [config]
   @returns {Promise<AxiosResponse<any, any>>}
   */
  async get(url, config) {
    this.setUserToken(this.getTokenFromLocalStorage());
    const res = await this.instance.get(url, config);
    return res;
  }

  /**
   @param {string} url
   @param {any} [data]
   @param {AxiosRequestConfig<any>} [config]
   @returns {Promise<AxiosResponse<any, any>>}
   */
  async post(url, data, config) {
    this.setUserToken(this.getTokenFromLocalStorage());
    const res = await this.instance.post(url, data, config);
    return res;
  }

  /**
   @param {string} url
   @param {any} [data]
   @param {AxiosRequestConfig<any>} [config]
   @returns {Promise<AxiosResponse<any, any>>}
   */
  async put(url, data, config) {
    this.setUserToken(this.getTokenFromLocalStorage());
    const res = await this.instance.put(url, data, config);
    return res;
  }

  /**
   @param {string} url
   @param {AxiosRequestConfig<any>} [config]
   @returns {Promise<AxiosResponse<any, any>>}
   */
  async delete(url, config) {
    this.setUserToken(this.getTokenFromLocalStorage());
    const res = await this.instance.delete(url, config);
    return res;
  }
}

export default new Api();
