import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={530}
      viewBox="0 0 280 530"
      backgroundColor="#f3f3f3"
      foregroundColor="#e6e6e6">
      <circle cx="140" cy="125" r="125" />
      <rect x="0" y="265" rx="6" ry="6" width="280" height="23" />
      <rect x="0" y="312" rx="8" ry="8" width="280" height="80" />
      <rect x="0" y="425" rx="6" ry="6" width="94" height="23" />
      <rect x="125" y="412" rx="20" ry="20" width="155" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
