const API_ROOT = process.env.NODE_ENV == "production" ? "/" : "/proxy";
export const API_MCE = `${API_ROOT}/mce/v1`;
export const API_LOG = `${API_ROOT}/log/api/v1`;
export const API_MCR = `${API_ROOT}/mcr/v2`;
export const API_ACCOUNT = `${API_ROOT}/account/api`;
export const API_ACCOUNT_V2 = `${API_ROOT}/account/v2`;
