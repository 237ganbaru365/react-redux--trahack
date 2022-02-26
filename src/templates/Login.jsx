import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";

const Login = () => {
  //storeにアクションを渡す役割
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログイン</h2>
      {/* pushはurlを遷移する役割*/}
      <button onClick={() => dispatch(signIn())}>ログインする</button>
    </div>
  );
};

export default Login;
