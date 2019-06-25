import Http from '@/utils/http';
export default {
  getProvinces: () => {
    return Http.get(`/provinceProxy/area/all?level=0`, {});
  },
  getPoetrys: (param: any) => {
    return Http.get(`/poetryProxy/tangshi/search?keyword=${param.keyword}`, {});
  },
};
