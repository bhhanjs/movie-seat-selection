import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedSeat, addSelectedSeat } from "@/store/slices/seatSlice";

export default function SeatingPlus() {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => {
    return state.seatSlice.table;
  });
  const { seatsSelected, seatsCount } = useSelector((state) => {
    return state.seatSlice.user;
  });

  const handleClick = function (event) {
    const target = event.target;

    if (target.agName !== "INPUT" && target.type !== "checkbox") return;

    const seatId = target.id;
    console.log(seatId);
    console.log(target.checked);

    if (target.checked) {
      if (seatsSelected.length < seatsCount) {
        console.log("add the seat");
        dispatch(addSelectedSeat(seatId));
      } else {
        target.checked = false;
      }
    }
    if (!target.checked) {
      console.log("remove the seat");
      dispatch(removeSelectedSeat(seatId));
    }
  };

  return (
    <div className="space-y-10">
      {/* LABELS */}
      <div className="labels flex justify-start w-9/12 ">
        <ul className="flex justify-between items-center w-full">
          <li className="seatLabel selected before:bg-green-600 ">
            Selected Seat
          </li>
          <li className="seatLabel reserved before:bg-red-600">
            Reserved Seat
          </li>
          <li className="seatLabel empty before:bg-white before:border-t-2 before:border-amber-500 ">
            Empty Seat
          </li>
        </ul>
      </div>

      {/* SEATS */}
      <div>
        <p className="notification text-black bg-orange-500 w-7/12 mx-auto text-center mb-5">
          {" "}
          {isActive ? "Please Select your Seats NOW!" : ""}
        </p>
        <div className="seatMap">
          <table
            className={`table w-full ${!isActive ? "pointer-events-none" : ""}`}
            onClick={handleClick}
          >
            {/* seat column number */}
            <thead className="w-full ">
              <tr className="w-full">
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td></td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
            </thead>
            {/* seats rows */}
            <tbody>
              {/* A */}
              <tr>
                {/* 1 */}
                <td>A</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="A1" value="A1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="A2" value="A2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="A3" value="A3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="A4" value="A4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="A5" value="A5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="A6" value="A6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="A7" value="A7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="A8" value="A8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="A9" value="A9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="A10"
                    value="A10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="A11"
                    value="A11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="A12"
                    value="A12"
                  />
                </td>
              </tr>
              {/* B */}
              <tr>
                {/* 1 */}
                <td>B</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="B1" value="B1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="B2" value="B2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="B3" value="B3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="B4" value="B4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="B5" value="B5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="B6" value="B6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="B7" value="B7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="B8" value="B8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="B9" value="B9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="B10"
                    value="B10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="B11"
                    value="B11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="B12"
                    value="B12"
                  />
                </td>
              </tr>
              {/* C */}
              <tr>
                {/* 1 */}
                <td>C</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="C1" value="C1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="C2" value="C2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="C3" value="C3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="C4" value="C4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="C5" value="C5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="C6" value="C6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="C7" value="C7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="C8" value="C8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="F9" value="C9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="C10"
                    value="G10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="G11"
                    value="G11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="G12"
                    value="G12"
                  />
                </td>
              </tr>
              {/* D */}
              <tr>
                {/* 1 */}
                <td>D</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="D1" value="D1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="D2" value="D2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="D3" value="D3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="D4" value="D4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="D5" value="D5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="D6" value="D6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="D7" value="D7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="D8" value="D8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="D9" value="D9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="D10"
                    value="D10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="D11"
                    value="D11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="D12"
                    value="D12"
                  />
                </td>
              </tr>
              {/* E */}
              <tr>
                {/* 1 */}
                <td>E</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="E1" value="E1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="E2" value="E2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="E3" value="E3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="E4" value="E4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="E5" value="E5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="E6" value="E6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="E7" value="E7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="E8" value="E8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="E9" value="E9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="E10"
                    value="E10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="E11"
                    value="E11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="E12"
                    value="E12"
                  />
                </td>
              </tr>
              {/* AISLES */}
              <tr className="h-8"></tr>
              {/* F */}
              <tr>
                {/* 1 */}
                <td>F</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="F1" value="F1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="F2" value="F2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="F3" value="F3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="F4" value="F4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="F5" value="F5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="F6" value="F6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="F7" value="F7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="F8" value="F8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="F9" value="F9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="F10"
                    value="F10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="F11"
                    value="F11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="F12"
                    value="F12"
                  />
                </td>
              </tr>
              {/* G */}
              <tr>
                {/* 1 */}
                <td>G</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="G1" value="G1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="G2" value="G2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="G3" value="G3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="G4" value="G4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="G5" value="G5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="G6" value="G6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="G7" value="G7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="G8" value="G8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="G9" value="G9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="G10"
                    value="G10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="G11"
                    value="G11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="G12"
                    value="G12"
                  />
                </td>
              </tr>
              {/* H */}
              <tr>
                {/* 1 */}
                <td>H</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="H1" value="H1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="H2" value="H2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="H3" value="H3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="H4" value="H4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="H5" value="H5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="H6" value="H6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="H7" value="H7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="H8" value="H8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="H9" value="H9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="H10"
                    value="H10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="H11"
                    value="H11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="H12"
                    value="H12"
                  />
                </td>
              </tr>
              {/* I */}
              <tr>
                {/* 1 */}
                <td>I</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="I1" value="I1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="I2" value="I2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="I3" value="I3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="I4" value="I4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="I5" value="I5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="I6" value="I6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="I7" value="I7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="I8" value="I8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="I9" value="I9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="I10"
                    value="I10"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="I11"
                    value="I11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="I12"
                    value="I12"
                  />
                </td>
              </tr>
              {/* J */}
              <tr>
                {/* 1 */}
                <td>J</td>
                {/* 2 */}
                <td>
                  <input type="checkbox" className="seats" id="J1" value="J1" />
                </td>
                {/* 3 */}
                <td>
                  <input type="checkbox" className="seats" id="J2" value="J2" />
                </td>
                {/* 4 */}
                <td>
                  <input type="checkbox" className="seats" id="J3" value="J3" />
                </td>
                {/* 5 */}
                <td>
                  <input type="checkbox" className="seats" id="J4" value="J4" />
                </td>
                {/* 6 */}
                <td>
                  <input type="checkbox" className="seats" id="J5" value="J5" />
                </td>
                {/* 7 */}
                <td></td>
                {/* 8 */}
                <td>
                  <input type="checkbox" className="seats" id="J6" value="J6" />
                </td>
                {/* 9 */}
                <td>
                  <input type="checkbox" className="seats" id="J7" value="J7" />
                </td>
                {/* 10 */}
                <td>
                  <input type="checkbox" className="seats" id="J8" value="J8" />
                </td>
                {/* 11 */}
                <td>
                  <input type="checkbox" className="seats" id="J9" value="J9" />
                </td>
                {/* 12 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="J1O"
                    value="J1O"
                  />
                </td>
                {/* 13 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="J11"
                    value="J11"
                  />
                </td>
                {/* 14 */}
                <td>
                  <input
                    type="checkbox"
                    className="seats"
                    id="J12"
                    value="J12"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SCREEN */}
      <div className="w-full bg-amber-500 text-center py-5 mt-7">
        <h2 className="text-xl font-bold text-black uppercase tracking-widest">
          Screen this way
        </h2>
      </div>
    </div>
  );
}

/** IDEA:
 * - The UI has 4 parts: the label, the seat, the screen, the button
 *
 * 1. The label: ul => li => style the square color with :before
 * - To style the common: one same class for all
 * - To style the different: different unique class for each
 *
 * 2. The table: table => every row is a tr => every column is a td => 14 columns
 * - There is one notification <p></p>
 * - first row: first column empty, column 6th is empty
 * - other rows: first column is letter, column 6th is empty, other column is an input  with type checkbox,
 * - the input checkbox has the class seats for styling, and value attribute is the combination of letter and number
 *
 * 3. Screen: h2 with background
 *
 * 4. Button
 *
 *
 */
