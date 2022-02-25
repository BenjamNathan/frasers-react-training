import React from 'react';

const SizeItem = ({ active, sizeUK, sizeEU, available }) => {
  return (
    available && (
      <div>
        <p>
          {sizeUK} ({sizeEU})
        </p>
      </div>
    )
  );
};

export default SizeItem;
