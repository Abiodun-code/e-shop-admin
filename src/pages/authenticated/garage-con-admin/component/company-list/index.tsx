import React, { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BsArrowsAngleContract } from "react-icons/bs";
import gc from '../../../../../assets/gc.png'
import git from "../../../../../assets/git.jpg"
import big from "../../../../../assets/gc.png"
import { truncateText } from '../../../../../utils/TruncateText';
const data = [
  { id: git, date: 'garageconnect@gmail.com', sender: '2023', destination: '09012121212', amount: '₦3500', status: 'Disable', icons: HiOutlineDotsVertical, name: "garage connect", more: "more details" },
  { id: gc, date: 'garageconnect@gmail.com', sender: '2023', destination: '09012121212', amount: '₦3500', status: 'Active', icons: HiOutlineDotsVertical, name: "garage connect", more: "more details" },
  { id: big, date: 'garageconnect@gmail.com', sender: '2023', destination: '09012121212', amount: '₦3500', status: 'Active', icons: HiOutlineDotsVertical, name: "garage connect", more: "more details" },
  { id: git, date: 'garageconnect@gmail.com', sender: '2023', destination: '09012121212', amount: '₦3500', status: 'Assigned', icons: HiOutlineDotsVertical, name: "garage connect", more: "more details" },
  { id: big, date: 'garageconnect@gmail.com', sender: '2023', destination: '09012121212', amount: '₦3500', status: 'Not assigned', icons: HiOutlineDotsVertical, name: "garage connect", more: "more details" },
  { id: gc, date: 'garageconnect@gmail.com', sender: '2023', destination: '09012121212', amount: '₦3500', status: 'Delivered', icons: HiOutlineDotsVertical, name: "garage connect", more: "more details" },
];
const CompanyList = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const handleIconClick = (vehicle: React.SetStateAction<null>) => {
    setSelectedVehicle(vehicle);
  };
  const closeSidebar = () => {
    setSelectedVehicle(null);
  };
  return (
    <div className=" border border-gray-400 rounded-md">
      <table className="w-full text-center">
        <thead className="bg-gray-100">
          <tr className="border-b">
            <th className="py-4 font-inter font-medium text-sm capitalize">Garage company</th>
            <th className="py-4 font-inter font-medium text-sm capitalize">Email Address</th>
            <th className="py-4 font-inter font-medium text-sm capitalize">Company Hotline</th>
            <th className="py-4 font-inter font-medium text-sm capitalize">Destination</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b font-league text-center capitalize font-normal text-lg">
              <td className="py-3 flex items-center gap-x-3 justify-center">
                <img src={item.id} className='w-10 h-10 bg-center object-contain rounded-full p-2 border border-gray-400' alt="" />
                <h1 className='font-inter font-medium text-sm capitalize text-gray-800'>{item.name}</h1>
              </td>
              <td className="py-3"><h1 className='font-inter font-medium text-sm capitalize text-gray-800'>{truncateText(item.date, 15)}</h1></td>
              <td className="py-3"><h1 className='font-inter font-medium text-sm capitalize text-gray-800'>{item.destination}</h1></td>
              <td className="py-3">
                {item.status === 'Active' ? (
                  <span className="text-green-500 font-inter font-medium text-sm capitalize">● Active</span>
                ) : (
                    <span className="text-gray-500 font-inter font-medium text-sm capitalize">● Disable</span>
                )}
              </td>
              <td className="text-lg text-gray-900">
                <span className="text-blue-500 cursor-pointer font-inter font-medium text-sm capitalize" onClick={() => handleIconClick(item)}>more details</span>
                {/* <HiOutlineDotsVertical className="cursor-pointer" /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Sidebar for vehicle details */}
      {selectedVehicle && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="w-1/3 bg-white p-6 shadow-lg">
            <div className='flex items-center justify-between mb-5'>
              <h2 className="text-base font-semibold font-inter">More details</h2>
              <button onClick={closeSidebar} className="text-black text-xl hover:text-gray-700"><BsArrowsAngleContract /></button>
            </div>
            <img src={selectedVehicle.id} className='py-10 h-[40%] w-full bg-center object-contain' alt="" />
            <div className='border-b pb-3'>
              <h2 className='text-base font-inter font-medium'>Vehicle</h2>
              <p className='text-base font-inter font-light'>{selectedVehicle.id}</p>
            </div>
            <div className='border-b py-3'>
              <h2 className='text-base font-inter font-medium'>Model</h2>
              <p className='text-base font-inter font-light'>{selectedVehicle.date}</p>
            </div>
            <div className='border-b py-3'>
              <h2 className='text-base font-inter font-medium'>Status</h2>
              <p className='text-base font-inter font-light'>{selectedVehicle.status}</p>
            </div>
            <div className='border-b py-3 border-t'>
              <h2 className='text-base font-inter font-medium'>Amount</h2>
              <p className='text-base font-inter font-light'>{selectedVehicle.amount}</p>
            </div>
            <div className='border-b py-3'>
              <h2 className='text-base font-inter font-medium'>Service date</h2>
              <p className='text-base font-inter font-light'>09/12/2024</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CompanyList;