import React from 'react';
import { Block } from 'baseui/block';
import './App.css';
import Tabs from './components/tabs/Tabs';

const App = (): JSX.Element => {
  return (
    <Block className="page--header">
      <h1>Cachebin</h1>
      <h4>
        Cachebin is a safe and decentralized service to share code snippets, notes and many more.
        Paste anything and share with your friends
      </h4>
      <div data-testid="tabs-component">
        <Tabs />
      </div>
    </Block>
  );
};

export default App;
