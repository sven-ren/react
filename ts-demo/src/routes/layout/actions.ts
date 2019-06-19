// 租户
export const GET_TENANT_START = "GET_TENANT_START";
export const GET_TENANT_SUCCESS = "GET_TENANT_SUCCESS";
export const GET_TENANT_FAILED = "GET_TENANT_FAILED";

//租户下拉选择
export const GET_SELECTED_TENANT = "GET_SELECTED_TENANT";

// 查询租户列表
export function getTenants(username: string,callback: Function) {
  return {
    type: GET_TENANT_START,
    payload: username,
    callback
  };
}
// 获取租户下拉菜单项的值
export function getSelectedTenant(payload: string) {
  return {
    type: GET_SELECTED_TENANT,
    payload
  };
}
