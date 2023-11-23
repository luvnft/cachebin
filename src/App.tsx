import React from 'react';
import { Block } from 'baseui/block';
import './App.css';
import Tabs from './components/tabs/Tabs';

const App = (): JSX.Element => {
  return (
    <Block className="page--header">
      <h1>📋 Paste</h1>
      <h4>
        Paste is a secure and decentralized service for sharing code snippets, notes, and much
        more. Paste anything and share it with your friends. Paste it to me.
      </h4>
      <Tabs />
    </Block>
  );
};

export default App;
