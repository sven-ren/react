

export default class Store {
    public static setStr(key: string, str: string) {
      if (this.getStr(key)) {
        this.remove(key);
        return window.sessionStorage.setItem(key, str);
      }
      return window.sessionStorage.setItem(key, str);
    }
    public static getStr(key: string) {
      return window.sessionStorage.getItem(key);
    }
    public static setObj(key: string, obj: object) {
      const objStr = JSON.stringify(obj);
      if (this.getStr(key)) {
        this.remove(key);
        return window.sessionStorage.setItem(key, objStr);
      }
      return window.sessionStorage.setItem(key, objStr);
    }
    public static getObj(key: string) {
      const strObj: any = window.sessionStorage.getItem(key);
      return JSON.parse(strObj);
    }
    public static remove(key: string) {
      return window.sessionStorage.removeItem(key);
    }

    // 获取当前cookie中的user信息
    public static getCurrentUserByCookie = (name: string) => {
      const arrcookie = document.cookie.split('; '); // 多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
      const arr = []; let result = '';
      for (const item of arrcookie) {
        const firstEqualSignIndex = item.indexOf('=');
        arr.push({
          key: item.substring(0, firstEqualSignIndex),
          value: item.substring(firstEqualSignIndex + 1),
        });
      }
      arr.forEach((item) => {
        if (item.key === name) {
          result = item.value;
        }
      });
      return result;
    }
  }
