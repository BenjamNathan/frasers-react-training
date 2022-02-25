import React from 'react';

export const Link = ({ text, url }) => {
  return (
    <div>
      <p onClick={() => console.log(url)}>{text}</p>
    </div>
  );
};
