import { strict } from "assert";

/**
 * 本地web存储
 */
// const STORE_TYPE = `sessionStorage`;
// window.sessionStorage

export default class Store {
    constructor() {}
    static setStr(key: string, str: string) {
      if (this.getStr(key)) {
        this.remove(key);
        return window.sessionStorage.setItem(key, str);
      }
      return window.sessionStorage.setItem(key, str);
    }
    static getStr(key: string) {
      return window.sessionStorage.getItem(key);
    }
    static setObj(key: string, obj: object) {
      let objStr = JSON.stringify(obj);
      if (this.getStr(key)) {
        this.remove(key);
        return window.sessionStorage.setItem(key, objStr);
      }
      return window.sessionStorage.setItem(key, objStr);
    }
    static getObj(key: string) {
      let strObj:any = window.sessionStorage.getItem(key);
      return JSON.parse(strObj);
    }
    static remove(key: string) {
      return window.sessionStorage.removeItem(key);
    }
  
    //获取当前cookie中的user信息
    static getCurrentUserByCookie = (name:string) => {
      var arrcookie = document.cookie.split("; "); //多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
      var arr = [],result = "";
      for (let i = 0; i < arrcookie.length; i++) {
        var first_equal_sign_index = arrcookie[i].indexOf("=");
        arr.push({
          key: arrcookie[i].substring(0, first_equal_sign_index),
          value: arrcookie[i].substring(first_equal_sign_index + 1)
        });
      }
      arr.forEach(item => {
        if (item.key === name) {
          result = item.value;
        }
      });
      return result;
    };
  }
  