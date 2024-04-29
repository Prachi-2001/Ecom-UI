import React, { useState, useRef, useEffect } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const Filters = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [adjustmentsOpen, setAdjustmentsOpen] = useState(false);
  const sortDropdownRef = useRef(null);
  const adjustmentsDropdownRef = useRef(null);

  const [selectedSort, setSelectedSort] = useState("");
  const [selectedAdjustment, setSelectedAdjustment] = useState("");

  const sortOptions = ["Sort Option 1", "Sort Option 2", "Sort Option 3"];
  const adjustmentOptions = ["Adjustment 1", "Adjustment 2", "Adjustment 3"];

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setSortOpen(false);
  };

  const handleAdjustmentSelect = (option) => {
    setSelectedAdjustment(option);
    setAdjustmentsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setSortOpen(false);
      }
      if (
        adjustmentsDropdownRef.current &&
        !adjustmentsDropdownRef.current.contains(event.target)
      ) {
        setAdjustmentsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex px-[6%] py-[2%]">
        <div className="p-3 bg-[#F7F7F7] hover:bg-slate-200 rounded-full">
          <BiSortAlt2 />
        </div>
        <div className="p-3 ml-2 bg-[#F7F7F7] hover:bg-slate-200 rounded-full">
          <TbAdjustmentsHorizontal />
        </div>
        <div>
          <div className="relative" ref={sortDropdownRef}>
            <div
              className="p-2 bg-[#F7F7F7] hover:bg-slate-200 ml-2 rounded-full cursor-pointer"
              onClick={() => {
                setSortOpen(!sortOpen);
                setAdjustmentsOpen(false);
              }}
            >
              {"Values"}
            </div>
            {sortOpen && (
              <div className="absolute top-18  left-0 w-[250%] bg-white border border-gray-200 rounded-b-lg shadow-lg z-10">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSortSelect(option)}
                  >
                    <div className="flex justify-between">
                      <input type="checkbox" className="px-2" />
                      {option}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="relative" ref={adjustmentsDropdownRef}>
            <div
              className="p-2 px-2 bg-[#F7F7F7] hover:bg-slate-200 ml-2 rounded-full cursor-pointer"
              onClick={() => {
                setAdjustmentsOpen(!adjustmentsOpen);
                setSortOpen(false);
              }}
            >
              {selectedAdjustment || "Lead time"}
            </div>
            {adjustmentsOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-b-lg shadow-lg z-10">
                {adjustmentOptions.map((option) => (
                  <div
                    key={option}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleAdjustmentSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
