import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ConfirmSelecting() {
  const [isConfirm, setIsConfirm] = useState(false);
  const { name, seatsCount, seatsSelected } = useSelector(
    (state) => state.seatSlice.user
  );

  const handleConfirm = function () {
    if (seatsSelected.length === 0) return;
    setIsConfirm(true);
  };
  return (
    <div>
      {/* BUTTON */}
      <div className="flex justify-center items-center mb-10">
        <button
          className="text-black font-bold bg-white py-2 px-5 rounded-md"
          onClick={handleConfirm}
        >
          Confirm Selection
        </button>
      </div>

      {/* CONFIRM TABLE  */}
      <table className="custom__table bg-white w-full h-[100px]">
        <thead>
          <tr>
            <td>Name</td>
            <td>Number of seats</td>
            <td>Seats</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-light capitalize">{isConfirm ? name : ""}</td>
            <td className="font-light">{isConfirm ? seatsCount : ""}</td>
            <td className="font-light">{isConfirm ? seatsSelected.join(",") : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
