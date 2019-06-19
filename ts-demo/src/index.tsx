import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();





import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import storeConfig from "./store/store";
import {
  HashRouter,
  BrowserRouter,
  Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";

import MceLayout from "@/routes/layout/view";


const store = storeConfig({});
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={props => <MceLayout {...props} />} />
          <Route path="/mce" render={props => <MceLayout {...props} />} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);

