import Http from '@/utils/http';
export default {
  getProvinces: () => {
    return Http.get(`/province/area/all?level=0`, {});
  },
  getPoetrys: (param: any) => {
    return Http.get(`/poetrys/tangshi/search?keyword=${param.keyword}`, {});
  },
};
