import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo, activeTable } from "@/store/slices/seatSlice";

export default function StartSelecting() {
  const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    dispatch(
      setUserInfo({
        name: data.name,
        seatsCount: data.seatsCount,
      })
    );

    dispatch(activeTable());
    setIsSubmit(true);
  };

  return (
    <div>
      <h5 className="text-yellow-500 mb-9">
        Fill the required details below and select your seats
      </h5>
      <form id="seatForm" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-2 w-full mb-7 ">
          <div className="formGroup flex flex-col justify-center gap-3 items-start w-6/12">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="border border-white w-11/12 text-lg px-4 py-3"
              disabled={isSubmit}
            />
          </div>
          <div className="formGroup flex flex-col justify-center gap-3 items-start w-6/12">
            <label htmlFor="seatsCount">
              Number of Seats <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="seatsCount"
              id="seatsCount"
              required
              min="1"
              className="border border-white w-8/12 text-lg px-4 py-3"
              disabled={isSubmit}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-black bg-white text-md px-6 py-2 rounded-lg tracking-wide font-bold"
        >
          Start Selecting
        </button>
      </form>
    </div>
  );
}
