import * as Actions from './actions';

const initialState = {
  poetrys: [],
  poetry_title: '',
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.GET_POETRYS_START:
      return [];
    case Actions.GET_POETRYS_SUCCESS:
      return {
        poetrys:
          action.payload.data.reault ? [...action.payload.data.reault.list] : [],
        poetry_title:
          action.payload.data.reault ? action.payload.data.result.list[0].title : '',
      };
    case Actions.GET_POETRYS_FAILED:
      return { ...state };
    default:
      return state;
  }
};
