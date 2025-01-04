import React from "react";
import { overviewData } from "./data";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {overviewData.map((service) => {

        // Convert the percentage to a number for comparison
        const percentage = parseInt(service.number.replace('%', ''), 10);
        const isPositive = percentage > 50;

        return (
          <div key={service.id} className="p-4 rounded-lg shadow-sm border border-gray-400 ">
            <h3 className="text-base text-gray-500 font-normal font-inter mb-6 capitalize">
              {service.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold font-inter">{service.count}</p>
              <div className="flex items-center space-x-2">
                {isPositive ? (
                  <BsArrowUp className="text-blue-500" />
                ) : (
                  <BsArrowDown className="text-red-500" />
                )}
                <p className="text-gray-600 font-inter text-xs">{service.number}</p>
                <p className="text-gray-600 font-inter text-xs">{service.day}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;