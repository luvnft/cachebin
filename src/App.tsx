import React from 'react';
import { Block } from 'baseui/block';

const App = (): JSX.Element => {
  return (
    <Block style={{ padding: '20px' }}>
      <h1>Cachebin</h1>
      <h4>
        Cachebin is a safe and decentralized service to share code snippets, notes and many more.
        Paste anything and share with your friends
      </h4>
    </Block>
  );
};

export default App;
