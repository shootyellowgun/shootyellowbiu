import React from 'react';
import './App.css';
import { Button } from 'antd';
import BasicRoute from './router'


import Head from './components/Head'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BasicRoute></BasicRoute>
      </div>
    )
  }
}

export default App;
