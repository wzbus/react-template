import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Routes from './router';
import 'assets/css/global.scss';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);
