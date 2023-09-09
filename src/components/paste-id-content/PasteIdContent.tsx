import { Card } from 'baseui/card';
import React, { memo } from 'react';
import { PasteIdContentProps } from '../../core/models/paste-id-content-props.model';

const PasteIdContent = ({ cid }: PasteIdContentProps): JSX.Element => {
  return (
    <React.Fragment>
      <div style={{ marginTop: 16, marginBottom: 16 }} />
      <Card>
        Created successfully! Please remember the Paste ID for sharing: <strong>{cid}</strong>
      </Card>
    </React.Fragment>
  );
};

export default memo(PasteIdContent);
