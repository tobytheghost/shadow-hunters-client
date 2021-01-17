import React from "react";

import Location from "../../components/Location/Location";

import "./Area.scss";

const Area = ({ locations }) => {
  return (
    <div className="area">
      {locations.map((location) => (
        <Location key={location.name} location={location} />
      ))}
    </div>
  );
};

export default Area;
