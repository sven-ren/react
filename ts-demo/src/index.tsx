import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import storeConfig from './store/store';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import Layout from '@/routes/layout/layout';

const store = storeConfig({});
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}>
      <Router history={history}>
        <Switch>
          <Route path='/' render={(props) => <Layout {...props} />} />
        </Switch>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
