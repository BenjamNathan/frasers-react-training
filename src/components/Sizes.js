import { useState } from 'react';
import SizeItem from './SizeItem';

const Sizes = ({ productSizes = [] }) => {
  const [activeSize, setActiveSize] = useState(null);

  return (
    <div className="App">
      {productSizes.map(({ id, sizeUK, sizeEU, available }) => (
        <SizeItem
          onClick={() => setActiveSize(id)}
          active={id === activeSize}
          key={id}
          sizeUK={sizeUK}
          sizeEU={sizeEU}
          available={available}
        />
      ))}
    </div>
  );
};

export default Sizes;
