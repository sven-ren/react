import axios from "axios";
import { Base64 } from "js-base64";
import Store from "@/utils/store";
import { message } from "antd";
axios.defaults.headers.post["Content-Type"] = "application/json";

  var user_info = Store.getCurrentUserByCookie("user")
      ? JSON.parse(Base64.decode(Store.getCurrentUserByCookie("user")))
      : {};
//request 拦截器
axios.interceptors.request.use(
  config => {
    return Object.assign({}, config, {
      headers: Object.assign({}, {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Matrix-UserID": user_info.user_id || '',
        // "X-Matrix-Token": Store.getToken() ? Store.getToken() : "",
        "X-Matrix-Username": user_info.userName ||  "",
        "X-Matrix-TenantUUID": Store.getStr('tenant_uuid') || '',
        "X-Matrix-TenantID": Store.getStr('tenant_id') || ''
      }, config.headers),
      //超时时间
      timeout: 150000
      // responseType: config.responseType ? config.responseType : "json"
    });
  },
  err => {
    if (err.response) {
      return Promise.reject(err);
    }
  }
);

//response 拦截器
axios.interceptors.response.use(
  function(response) {
    // todo response之后发起
    return response;
  },
  function(error) {
    if(error.response &&
      error.response.data && error.response.data.exception && error.response.data.message &&
      (error.response.data.status === 400 || error.response.data.status === 403 || 
        error.response.data.status === 404 || error.response.data.status === 500)){
        message.error(error.response.data.message);
      } else if (
        error.response &&
        error.response.data &&
        (error.response.status === 400 || error.response.status === 404)
      ) {
        message.error(error.response.data.err_desc);
      } else if(error.response &&
        (!error.response.data && error.response.status === 401)) {
          message.error("用户未登录，请先登录")
        let timeoutId = setTimeout(() => {
          window.location.href = "http://portal.changhong.io/login"
        }, 2000)
      }
     else if (
      error.response &&
      error.response.data &&
      (error.response.status === 500 || error.response.status === 502 || error.response.status === 503)
     ) {
      message.error("网络异常或请求超时");
    }
    // Do something with response error
    return Promise.reject(error);
  }
);
export default class Http {
  /**
   * geto
   * @param url
   * @param params
   */
  static get(url: string, params: object) {
    return axios({
      method: "get",
      url: url,
      params: params
    });
  }
  /**
   * post
   * @param url
   * @param body
   */
  static post(url: string, body: object, rest: any) {
    return axios({
      method: "post",
      url: url,
      data: body,
      // responseType: rest.responseType,
      headers: rest && rest.headers ? rest.headers : ""
    });
  }
  /**
   * put
   * @param url
   * @param body
   */
  static put(url: string, body: object, ...rest:any) {
    return axios({
      method: "put",
      url: url,
      data: body,
      responseType: rest.responseType
    });
  }
  /**
   * patch
   * @param url
   * @param body
   */
  static patch(url: string, body: object, ...rest: any) {
    return axios({
      method: "patch",
      url: url,
      data: body,
      responseType: rest.responseType
    });
  }
  /**
   * delete
   * @param url
   * @param body
   * 如果服务端将参数当做java对象来封装接收，则参数格式为：{data: param}
   * 如果服务端将参数当做url参数接收，则参数格式为：{params: param}，这样发送的url将变为http:www.XXX.com?a=..&b=..
   */
  static delete(url: string, params: object) {
    return axios({
      method: "delete",
      url: url,
      data: params
      // params: params
    });
  }

  /**
   * 带进度条的上传文件
   * @param {string} url
   * @param {object} body
   * @param {object} config
   */
  static upload(url: string, body: object, config: any) {
    return axios({
      method: "post",
      url: url,
      data: body,
      onUploadProgress: config.onUploadProgress
    });
  }
}
