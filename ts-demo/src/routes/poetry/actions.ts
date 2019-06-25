export const GET_POETRYS_START = 'GET_POETRYS_START';
export const GET_POETRYS_SUCCESS = 'GET_POETRYS_SUCCESS';
export const GET_POETRYS_FAILED = 'GET_POETRYS_FAILED';


export function getList(payload: any, callback: () => void) {
  return {
    type: GET_POETRYS_START,
    payload,
    callback,
  };
}
