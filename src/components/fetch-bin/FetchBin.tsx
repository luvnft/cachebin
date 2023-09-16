import { Block } from 'baseui/block';
import { HeadingLevel } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import React, { useState } from 'react';
import PasteHashInput from '../paste-hash-input/PasteHashInput';

const FetchBin = (): JSX.Element => {
  const [pasteHash, setPasteHash] = useState('');
  return (
    <Block width="100%" className="component">
      <HeadingLevel>
        <ParagraphMedium>Fetch a Paste</ParagraphMedium>
        <PasteHashInput pasteHash={pasteHash} setPasteHash={setPasteHash} />
      </HeadingLevel>
    </Block>
  );
};

export default FetchBin;
