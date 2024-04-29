import React, { useState, useRef } from "react";

const MegaMenu = ({ tabs }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentTab, setCurrentTab] = useState(null);
  const megaMenuRef = useRef(null);

  const handleMouseEnter = (tabName) => {
    setCurrentTab(tabName);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
    setCurrentTab(null); // Reset currentTab when leaving mega menu
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <div className="flex">
        {Object.keys(tabs).map((tabName) => (
          <div
            key={tabName}
            className={`p-2 cursor-pointer ${
              currentTab === tabName ? "underline" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(tabName)}
          >
            {tabName}
          </div>
        ))}
      </div>
      {showMenu && (
        <div
          ref={megaMenuRef}
          className="absolute top-10 z-20 left-0 w-full bg-white border border-gray-300 p-4 shadow-lg"
          onMouseLeave={handleMouseLeave}
        >
          {tabs[currentTab] && (
            <>
              <h3 className="font-bold mb-2">{currentTab}</h3>
              {Object.keys(tabs[currentTab]).map((submenu) => (
                <React.Fragment key={submenu}>
                  <p className="font-semibold mt-2">{submenu}</p>
                  <ul>
                    {tabs[currentTab][submenu].map((item) => (
                      <li key={item} className="ml-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
