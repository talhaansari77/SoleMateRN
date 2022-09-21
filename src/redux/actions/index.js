import ActionType from "../actionType/ActionType";

// export const signup = (payload) => {
//   return { type: ActionType.SIGNUP, payload };
// };
export const login = (payload) => {
  return { type: ActionType.LOGIN, payload };
};
export const logout = (payload) => {
  return { type: ActionType.LOGOUT, payload };
};

export const settingAction = (payload) => {
  return { type: ActionType.SETTING, payload };
};
