/**
 * Created by liuqiang on 18/4/28.
 */

export default class CommonMethod {
    //采用正则表达式获取地址栏参数
    static GetQueryString(name: string) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
    //根据name获取json数据中key为name的字段数据
    static getValueByField(name: string, json: any) {
      let result = "";
      if (json instanceof Object && !(json instanceof Array)) {
        if (json[name]) {
          result = json[name];
        } else {
          const keys = Object.keys(json);
          if (!!keys.length) {
            for (let i = 0; i < keys.length; i++) {
              result = this.getValueByField(name, json[keys[i]]);
              if(result) break;
            }
          }
        }
      }
      return result || '';
    };
    //根据传入的param，生成query参数
    static createQuery = (param: any) => {
      let paramResult = '';
      if(!!Object.keys(param).length){
        for(let i in param){
          paramResult += `${i}=${param[i]}&`
        }
      }
      return paramResult;
    }
  }
  