import * as Actions from './actions';

const initialState = {
  provinces: [],
  province_code: '',
  province_stamp: 0,
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.GET_PROVINCES_START:
      return state;
    case Actions.GET_PROVINCES_SUCCESS:
      return {
        provinces:
          action.payload.data ? [...action.payload.data.data] : [],
        province_code:
          action.payload.data ? action.payload.data.data[0].area_code : '',
        province_stamp: state.province_stamp + 1,
      };
    case Actions.GET_PROVINCES_FAILED:
      return { ...state };
    case Actions.GET_SELECTED_PROVINCES:
      return {
        ...state,
        provinces: [...state.provinces],
        province_code: action.payload,
      };
    default:
      return state;
  }
};
