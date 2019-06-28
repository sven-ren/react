
export default class CommonMethod {
    // 采用正则表达式获取地址栏参数
    public static GetQueryString(name: string) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      const r = window.location.search.substr(1).match(reg);
      if (r != null) { return unescape(r[2]); }
      return null;
    }
    // 根据name获取json数据中key为name的字段数据
    public static getValueByField(name: string, json: any) {
      let result = '';
      if (json instanceof Object && !(json instanceof Array)) {
        if (json[name]) {
          result = json[name];
        } else {
          const keys = Object.keys(json);
          if (!!keys.length) {
            for (const key of json) {
              result = this.getValueByField(name, json[key]);
              if (result) { break; }
            }
          }
        }
      }
      return result || '';
    }
    // 根据传入的param，生成query参数
    public static createQuery = (param: any) => {
      let paramResult = '';
      if (!!Object.keys(param).length) {
        for (const i in param) {
          paramResult += `${i}=${param[i]}&`;
        }
      }
      return paramResult;
    }
  }

