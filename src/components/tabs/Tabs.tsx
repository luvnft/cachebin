import React from 'react';
import { StatefulTabs, Tab } from 'baseui/tabs-motion';
import { Card } from 'baseui/card';
import { ArrowDown, Plus } from 'baseui/icon';
import CreateBin from '../create-bin/CreateBin';
import FetchBin from '../fetch-bin/FetchBin';

const Tabs = (): JSX.Element => {
  return (
    <Card>
      <StatefulTabs>
        <Tab title="Create" artwork={Plus}>
          <div>
            <CreateBin />
          </div>
        </Tab>
        <Tab title="Fetch" artwork={ArrowDown}>
          <div>
            <FetchBin />
          </div>
        </Tab>
      </StatefulTabs>
    </Card>
  );
};

export default Tabs;
