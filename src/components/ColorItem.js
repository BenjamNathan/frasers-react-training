// import logo from './logo.svg';
// import ColorItem from './components/ColorItem';

const ColorItem = ({ name, quantity, img, id, active }) => {
  const activeItem = active ? 'active' : '';
  const unAvailable = quantity <= 0 ? 'unavailable' : '';
  const classes = `color-item ${activeItem} ${unAvailable}`;

  return (
    <div className={classes}>
      <img src={img} alt={name} />
    </div>
  );
};

export default ColorItem;
