import LoginClass from "../templates/LoginClass.jsx";
import { compose } from "redux";
import { connect } from "react-redux";
import * as Actions from "../reducks/users/operations";
import Login from "../templates/Login.jsx";

//storeのstateを第一引数に受け取る
const mapStateToProps = (state) => {
  //接続先コンポーネントで使うstateをフィルタリング
  return {
    users: state.users,
  };
};

//storeからDispatchする関数（=Actions）を第一引数に受けとる
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      signIn() {
        dispatch(Actions.signIn());
      },
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)(LoginClass)
);
