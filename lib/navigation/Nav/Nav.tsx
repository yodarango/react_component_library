import { useContext, useState } from "react";
import { AppContext } from "@context";
import { Button } from "@ds";

import "./Nav.scss";
// styles

export type TNav = {
  defaultTab: number;
  className?: string;
  tabs: {
    icon: string;
    onClick: () => void;
    value: number;
    label: string;
  }[];
};
export const Nav = (props: TNav) => {
  const { settings, updateContext } = useContext(AppContext);
  const { tabs, defaultTab, className } = props;
  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState(defaultTab || 0);

  // Function to handle item selection
  const handleSelect = (index: number, item: TNav["tabs"][0]) => {
    setSelectedItem(index);
    item.onClick();
  };

  const handleCloseNav = () => {
    updateContext({ ...settings, isNavOpen: !settings.isNavOpen });
  };

  return (
    <div
      className={`${className} ${
        !settings.isNavOpen ? "closed" : ""
      } shrood-nav-01kq bg-delta`}
    >
      <div className='shrood-nav-01kq__container'>
        <div className='shrood-nav-container-01kq__top d-flex align-items-center justify-content-end'>
          <div className='pe-4'>
            <Button onClick={handleCloseNav}>
              <span
                className={`icon icon-chevron-${
                  settings.isNavOpen ? "left" : "right"
                } color-alpha`}
              />
            </Button>
          </div>
        </div>
        <div className='shrood-nav-container-01kq__items'>
          {tabs.map((item: TNav["tabs"][0], index: number) => (
            <button
              className={`shrood-nav-container-items-01kq__item d-flex align-items-center justify-content-start gap-3 ${
                selectedItem === index ? "active" : ""
              }`}
              onClick={() => handleSelect(index, item)}
              key={index}
            >
              <div
                className={`shrood-nav-container-items-item-01kq__selector bg-delta ${
                  selectedItem === index ? "active" : ""
                }`}
              >
                <div className='d-flex align-items-center justify-content-start ps-4 gap-3'>
                  <span className={`icon icon-${item.icon} color-alpha`} />
                  <p>
                    <b>{item.label}</b>
                  </p>
                </div>
              </div>
              <span className={`icon icon-${item.icon} color-alpha`} />
              <p>{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
