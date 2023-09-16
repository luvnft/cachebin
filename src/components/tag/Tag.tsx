import React from 'react';
import { Tag as BaseUITag, KIND } from 'baseui/tag';

const Tag = ({ timestamp }: { timestamp: string }): JSX.Element => {
  const generateDateString = (timeStamp: string): string => {
    return new Date(timestamp).toLocaleDateString();
  };

  if (timestamp !== '') {
    return <></>;
  } else {
    return (
      <BaseUITag kind={KIND.accent} closeable={false}>
        {generateDateString(timestamp)}
      </BaseUITag>
    );
  }
};

export default Tag;
