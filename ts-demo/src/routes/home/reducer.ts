import * as Actions from './actions';

const initialState = {
  provinces: [],
  province_code: '',
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
