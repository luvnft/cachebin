import React from 'react';
import { StatefulTabs, Tab } from 'baseui/tabs-motion';
import { Card } from 'baseui/card';
import { ArrowDown, Plus } from 'baseui/icon';

const Tabs = (): JSX.Element => {
  return (
    <Card>
      <StatefulTabs>
        <Tab data-testid="create-bin-tab" title="Create" artwork={Plus}>
          Create Bin
        </Tab>
        <Tab data-testid="fetch-bin-tab" title="Fetch" artwork={ArrowDown}>
          Fetch Bin
        </Tab>
      </StatefulTabs>
    </Card>
  );
};

export default Tabs;
