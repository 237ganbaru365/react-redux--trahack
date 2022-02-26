import React from "react";
import { Switch, Route } from "react-router";
import { Login, Home } from "./templates";
import { LoginContainer } from "./containers";

const Router = () => {
  return (
    //Switchで囲んだ上でRouteを使うことで、Route内でexactキーワードを使うことができる
    //ただし、最新のreact-routerでは、Switchの名前をRoutesに変更したためエラーがおきる（そのため、ver5に現在戻している）
    <Switch>
      {/* <Route exact path={"/login"} component={Login} /> */}
      <Route exact path={"/login"} component={LoginContainer} />
      {/* ()で囲って?を使うと、/を入っていてもなくてもということを実現可能 */}
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};

export default Router;
