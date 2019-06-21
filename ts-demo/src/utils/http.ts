import axios from 'axios';
import { Base64 } from 'js-base64';
import Store from '@/utils/store';
import { message } from 'antd';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const userInfo = Store.getCurrentUserByCookie('user')
      ? JSON.parse(Base64.decode(Store.getCurrentUserByCookie('user')))
      : {};
// request 拦截器
axios.interceptors.request.use(
  (config) => {
    const Authorization = 'APPCODE 20ada1f203e34ece908b53fef95595c0';
    return Object.assign({}, config, {
      headers: Object.assign({}, {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': Authorization,
      }, config.headers),
      // 超时时间
      timeout: 150000,
      // responseType: config.responseType ? config.responseType : "json"
    });
  },
  (err) => {
    if (err.response) {
      return Promise.reject(err);
    }
  },
);

// response 拦截器
axios.interceptors.response.use(
  (response) => {
    // todo response之后发起
    return response;
  },
  (error) => {
    if (error.response &&
      error.response.data && error.response.data.exception && error.response.data.message &&
      (error.response.data.status === 400 || error.response.data.status === 403 ||
        error.response.data.status === 404 || error.response.data.status === 500)) {
        message.error(error.response.data.message || '未知错误');
      } else if (
        error.response &&
        error.response.data &&
        (error.response.status === 400 || error.response.status === 404)
      ) {
        message.error(error.response.data.err_desc);
      } else if (error.response &&
        (!error.response.data && error.response.status === 401)) {
          message.error('用户未登录，请先登录');
          const timeoutId = setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else if (
      error.response &&
      error.response.data &&
      (error.response.status === 500 || error.response.status === 502 || error.response.status === 503)
     ) {
      message.error('网络异常或请求超时');
    }
    // Do something with response error
    return Promise.reject(error);
  },
);
export default class Http {
  /**
   * geto
   * @param url
   * @param params
   */
  public static get(url: string, params: object) {
    return axios({
      method: 'get',
      url,
      params,
    });
  }
  /**
   * post
   * @param url
   * @param body
   */
  public static post(url: string, body: object, rest: any) {
    return axios({
      method: 'post',
      url,
      data: body,
      // responseType: rest.responseType,
      headers: rest && rest.headers ? rest.headers : '',
    });
  }
  /**
   * put
   * @param url
   * @param body
   */
  public static put(url: string, body: object, ...rest: any) {
    return axios({
      method: 'put',
      url,
      data: body,
      responseType: rest.responseType,
    });
  }
  /**
   * patch
   * @param url
   * @param body
   */
  public static patch(url: string, body: object, ...rest: any) {
    return axios({
      method: 'patch',
      url,
      data: body,
      responseType: rest.responseType,
    });
  }
  /**
   * delete
   * @param url
   * @param body
   * 如果服务端将参数当做java对象来封装接收，则参数格式为：{data: param}
   * 如果服务端将参数当做url参数接收，则参数格式为：{params: param}，这样发送的url将变为http:www.XXX.com?a=..&b=..
   */
  public static delete(url: string, params: object) {
    return axios({
      method: 'delete',
      url,
      data: params,
      // params: params
    });
  }

  /**
   * 带进度条的上传文件
   * @param {string} url
   * @param {object} body
   * @param {object} config
   */
  public static upload(url: string, body: object, config: any) {
    return axios({
      method: 'post',
      url,
      data: body,
      onUploadProgress: config.onUploadProgress,
    });
  }
}
