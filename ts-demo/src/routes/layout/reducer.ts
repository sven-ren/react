import * as Actions from "./actions";

const initialState = {
  tenants: [],
  tenant_id: '',
  tenant_uuid: ''
};

export default (state:any = initialState, action: any) => {
  switch (action.type) {
    case Actions.GET_TENANT_START:
      return [];
    case Actions.GET_TENANT_SUCCESS:
      return {
        tenants: action.payload && action.payload.data && action.payload.data.data && [...action.payload.data.data] || [],
        tenant_id: action.payload && action.payload.data && action.payload.data.data && action.payload.data.data[0] &&action.payload.data.data[0].tenant_id || '',
        tenant_uuid: action.payload && action.payload.data && action.payload.data.data && action.payload.data.data[0] && action.payload.data.data[0].tenant_id || '',
        manager_id: action.payload && action.payload.data && action.payload.data.data && action.payload.data.data[0] &&action.payload.data.data[0].manager_id || '',
      };
    case Actions.GET_TENANT_FAILED:
      return { ...state };
    case Actions.GET_SELECTED_TENANT:
      return {
        ...state,
        tenants: [...state.tenants],
        tenant_id: action.payload,
        tenant_uuid: state.tenants.find((item: any)=>{ return item.tenant_id === action.payload }).tenant_id || '',
        manager_id: state.tenants.find((item: any)=>{ return item.tenant_id === action.payload }).manager_id || '',
      };
    default:
      return state;
  }
};
