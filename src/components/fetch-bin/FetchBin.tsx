import { Block } from 'baseui/block';
import { HeadingLevel } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import React from 'react';

const FetchBin = (): JSX.Element => {
  return (
    <Block width="100%" className="component">
      <HeadingLevel>
        <ParagraphMedium>Fetch a Paste</ParagraphMedium>
      </HeadingLevel>
    </Block>
  );
};

export default FetchBin;
