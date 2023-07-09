import { useState } from "react";
import React from "react";
export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabChange(index: number) {
    setActiveTab(index);
    console.log(activeTab);
  }

  const tabs = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      index,
      isActive: index === activeTab,
      onTabChange: handleTabChange,
    });
  });

  const tabContent = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeTab,
    });
  });

  return (
    <div>
      <div>{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
};
