import { useState } from 'react';
import ColorItem from './ColorItem';

const Colors = ({ productColors = [] }) => {
  const [activeColour, setActiveColour] = useState(productColors[0]?.id);
  return (
    <div className="App">
      {productColors.map(({ name, quantity, img, id }) => (
        <ColorItem
          onClick={() => setActiveColour(id)}
          active={id === activeColour}
          key={id}
          name={name}
          quantity={quantity}
          img={img}
        />
      ))}
    </div>
  );
};

export default Colors;
