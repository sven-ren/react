import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './app.module.scss';
import MceLayout from './routes/index';
import { Button } from 'antd';

const App: React.FC = () => {
  return (
    <div className="App">
      <MceLayout/>
    </div>
  );
}

export default App;
