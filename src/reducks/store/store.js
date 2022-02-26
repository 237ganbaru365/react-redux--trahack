//createStoreが本来のreduxの組み込みモジュール名だが、ecサイト内で自作の関数名がかぶっているので、
//今回は別名インポートしている
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

// import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";

//historyは現在どこにいるのかの情報を格納している
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      //reduxのstoreにパス情報を抱えたhistoryというstateをつくる
      router: connectRouter(history),
      users: UsersReducer,
    }),
    //routerをミドルウェアとして使う宣言
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
