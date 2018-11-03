import React from 'react';

export default ({src, className}) => (
  <div className={className} dangerouslySetInnerHTML={{__html: src}} />
);