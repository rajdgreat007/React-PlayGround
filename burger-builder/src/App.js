import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>This is the content area</h1>
        </Layout>
      </div>
    );
  }
}

export default App;
