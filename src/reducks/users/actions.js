//なんのタイプのアクションなのか
export const SIGN_IN = "SIGN_IN";
//イベント発生時にどういうデータをreducerに受け渡すのか
export const signInAction = (userState) => {
  //Actionはかならずプレーンなオブジェクトを返す！！！
  return {
    type: "SIGN_IN",
    playload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
//signout時は初期化をすればいいだけなので、引数は受け取らなくていい
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    playload: {
      isSignedIn: false,
      uid: "",
      username: "",
    },
  };
};
