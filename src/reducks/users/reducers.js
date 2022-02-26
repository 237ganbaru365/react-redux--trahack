//actionsファイル内のexportしていた全てのモジュールをimport
import * as Actions from "./actions";
import initialState from "../store/initialState";

//reducerにおいてスプレッド構文は重要事項！
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      //stateの中身とpayloadをマージしている
      //reducerはstoreの値をまるっと上書きするので、もしスプレッド構文使わずにハードコードした場合、初期値とアクションの値が異なる場合、初期値から差分は削除される可能性がある
      //なのでinitialStateの値も記入する必要がある
      return {
        ...state,
        ...action.playload,
      };
    default:
      return state;
  }
};
