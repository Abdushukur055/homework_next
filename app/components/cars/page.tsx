"use client";
import React, { useState } from "react";
import Link from "next/link";

type CarsType = {
    id:number,
  name: string;
  color: string;
  price: number;
  position: number;
  year: number;
};

const Cars = () => {
  const [cars, setCars] = useState<Array<CarsType>>([
    {id:1, name: "Malibu", color: "Black", price: 12345, position: 3, year: 2024 },
    {id:2, name: "Gentra", color: "Black", price: 12345, position: 3, year: 2024 },
    {id:3, name: "Hyundai", color: "Black", price: 12345, position: 3, year: 2024 },
  ]);
  const [modal,setModal] = useState<boolean>(false)
  const DeleteCars =(index:number)=>{
    cars.splice(index,1)
    setCars([...cars])
  }
  return (
      <div className="min h-screen px-[450px] py-[100px]">
      <table className="w-[600px] border-[2px] border-gray-500">
        <thead>
          <tr>
            <th className="border-[2px] border-gray-500">T/R</th>
            <th className="border-[2px] border-gray-500">Name</th>
            <th className="border-[2px] border-gray-500">Color</th>
            <th className="border-[2px] border-gray-500">Price</th>
            <th className="border-[2px] border-gray-500">Position</th>
            <th className="border-[2px] border-gray-500">Year</th>
            <th className="border-[2px] border-gray-500">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item, index) => {
            return (
              <tr>
                <td className="border-[2px] border-gray-500 text-center">
                  {index + 1}
                </td>
                <td className="border-[2px] border-gray-500 text-center">
                  {item.name}
                </td>
                <td className="border-[2px] border-gray-500 text-center">
                  {item.color}
                </td>
                <td className="border-[2px] border-gray-500 text-center">
                  {item.price}
                </td>
                <td className="border-[2px] border-gray-500 text-center">
                  {item.position}
                </td>
                <td className="border-[2px] border-gray-500 text-center">
                  {item.year}
                </td>
                <td className="border-[2px] border-gray-500 text-center">
                    <button className="p-[10px] bg-red-600 rounded-xl text-white" onClick={()=>DeleteCars(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cars;
