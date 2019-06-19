import Http from "@/utils/http";
import { API_MCE, API_ACCOUNT, API_ACCOUNT_V2 } from "../config";
//dashboard
export default {
  //新建集群
  addCluster: () => {
    return Http.post(`${API_MCE}/registries`, {}, null);
  },
  getTenants: (user_id: string) => {
    return Http.get(`${API_ACCOUNT_V2}/tenants?user_id=${user_id}`, {});
  },
  // 根据租户UUID查询集群列表
  getClusters: (param: any) => {
    return Http.get(`${API_ACCOUNT}/tenants/${param.tenant_uuid}/clusters`, {});
  },

  //查询租户成员
  getTenantUsers: (tenant_id: string) => {
    return Http.get(`${API_ACCOUNT_V2}/tenants/${tenant_id}/users`, {});
  },
};
