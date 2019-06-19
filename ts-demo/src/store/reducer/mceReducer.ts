import { combineReducers } from "redux";
// import clusters from "@/components/CommonTop/reducer";
import tenant from "@/routes/layout/reducer";

// import { reducer as dashboard } from "./routes/Devops/Dashboard";

const mceReducer = combineReducers({
  // dashboard
  // clusters,
  tenant
});

export default mceReducer;
