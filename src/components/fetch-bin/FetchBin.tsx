import { Block } from 'baseui/block';
import { HeadingLevel } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import React, { useState } from 'react';
import PasteHashInput from '../paste-hash-input/PasteHashInput';
import Password from '../password/Password';

const FetchBin = (): JSX.Element => {
  const [pasteHash, setPasteHash] = useState('');
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <Block width="100%" className="component">
      <HeadingLevel>
        <ParagraphMedium>Fetch a Paste</ParagraphMedium>
        <PasteHashInput pasteHash={pasteHash} setPasteHash={setPasteHash} />
        <div style={{ marginTop: 16, marginBottom: 16 }} />
        <Password
          enablePassword={enablePassword}
          setEnablePassword={setEnablePassword}
          password={password}
          setPassword={setPassword}
          isFetching={true}
        />
      </HeadingLevel>
    </Block>
  );
};

export default FetchBin;
