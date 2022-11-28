import React from "react";

//TODO different dot color for accessibility
//TODO truncate title if too long (responsive)
//TODO show task publisher name depending on whether it's own task or other's task

function SmallTask({ category, status, price, location, datetime }) {
  return (
    <div className="small-task">
      <div className="small-task-status-title-name">
        <div className="small-task-status-dot"></div>
        <div className="small-task-title">
          <p>{category}</p>
        </div>
      </div>
      <div className="small-task-money-location-deadine">
        <p>
          {status} | {price} | {location} | {datetime}
        </p>
      </div>
    </div>
  );
}

export default SmallTask;
