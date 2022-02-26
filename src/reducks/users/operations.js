import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    //getStateはメソッドとしてしか使えないので()を忘れずに！現在のstoreの情報を取得できる
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/237ganbaru365";

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "0001",
          username: username,
        })
      );
      dispatch(push("/"));
    }
  };
};
