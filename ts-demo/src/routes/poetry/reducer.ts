import * as Actions from './actions';

const initialState = {
  poetrys: [],
  poetry_title: '',
  poetry_stamp: 0,
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.GET_POETRYS_START:
      return state;
    case Actions.GET_POETRYS_SUCCESS:
      return {
        poetrys:
          action.payload.data.reault ? [...action.payload.data.reault.list] : [],
        poetry_title:
          action.payload.data.reault ? action.payload.data.result.list[0].title : '',
        poetry_stamp: state.poetry_stamp + 1,
      };
    case Actions.GET_POETRYS_FAILED:
      return { ...state };
    default:
      return state;
  }
};
