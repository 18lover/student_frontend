import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  const [select, setSelect] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleapply = () => {
    navigate("/", { state: { select } });
  };

  return (
    <>
      <div className="ms-8   w-1/4">
        <div className="flex justify-center items-center gap-5">

          <div className="flex flex-col">
            <label htmlFor="options" className="font-bold">
              Find By Course
            </label>

            <select
              id="options"
              className="bg-cyan-400 rounded-md  max-w-30 min-w-10"
              value={select}
              onChange={handleSelect}
            >
              <option value="All">All</option>
              <option value="computer">Computer</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-green-400 rounded-md mt-8 px-2"
            onClick={handleapply}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
