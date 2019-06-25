export const GET_PROVINCES_START = 'GET_PROVINCES_START';
export const GET_PROVINCES_SUCCESS = 'GET_PROVINCES_SUCCESS';
export const GET_PROVINCES_FAILED = 'GET_PROVINCES_FAILED';

export const GET_SELECTED_PROVINCES = 'GET_SELECTED_PROVINCES';

export function getList(callback: () => void) {
  return {
    type: GET_PROVINCES_START,
    // payload: username,
    callback,
  };
}
