import React from 'react'

export default function Seating() {
  return (
    <div>

    </div>
  )
}

/** IDEA:
 * - The UI has 4 parts: the label, the seat, the screen, the button
 * - Using the Button Component shadcn
 * 
 * 
 * Outside the component
 * 1. Static data for seats: 
 * + rows: 10 rows 
 * + cols: 12 cols for seats 
 * 
 * Inside the component
 * 1. State for selectedSeats: array data 
 * 
 * 2. Function to selected seat: receive the seatID
 * -  if in the selectedSeats array INCLUDE() that id => remove it by FIlTER 
 * - if in the selectedSeats array NOT included that id => then add to the array
 * 
 * 3. Function to SET STATUS for the seat: reserved, selected, or empty
 * - if including in the array of reserved => return "reserved"
 * - If including in the array of selectedSeats => return " selected"
 * - otherwise  return empty
 * 
 * 4. Build the UI and event logic
 * a. Label 
 * - div container with flex 
 * - built-in custom component use for the 3 label with different prop: label, color
 * 
 * b. 
 */
