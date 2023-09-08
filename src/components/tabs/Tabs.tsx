import React from 'react';
import { StatefulTabs, Tab } from 'baseui/tabs-motion';
import { Card } from 'baseui/card';
import { ArrowDown, Plus } from 'baseui/icon';
import CreateBin from '../create-bin/CreateBin';

const Tabs = (): JSX.Element => {
  return (
    <Card>
      <StatefulTabs>
        <Tab data-testid="create-bin-tab" title="Create" artwork={Plus}>
          <div data-testid="create-bin-component">
            <CreateBin />
          </div>
        </Tab>
        <Tab data-testid="fetch-bin-tab" title="Fetch" artwork={ArrowDown}>
          Fetch Bin
        </Tab>
      </StatefulTabs>
    </Card>
  );
};

export default Tabs;
