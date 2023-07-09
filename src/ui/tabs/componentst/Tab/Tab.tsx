export const Tab = ({ index, isActive, onTabChange, children }) => {
  function handleClick() {
    onTabChange(index);
  }

  return (
    <button onClick={handleClick} disabled={isActive}>
      {children}
    </button>
  );
};
