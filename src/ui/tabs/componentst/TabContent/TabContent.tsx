export const TabContent = ({ isActive, children }) => {
  console.log(isActive);
  return isActive ? <div>{children}</div> : null;
};
