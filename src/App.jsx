import { useState } from "react";
import backgroundImage from "./image/banner.jpg";
import StartSelecting from "@/components/startSelecting";
import Seating from "./components/Seating";
import ConfirmSelecting from "./components/confirmSelecting";
import SeatingPlus from "./components/SeatingPlus";

function App() {
  return (
    <>
      {/* bg image */}
      <div className="background">
        {/* img */}

        {/* <img
          src={backgroundImage}
          alt="background image"
          className="absolute top-0 left-0 w-full h-dvh object-cover bg-center z-0"
        /> */}

        <div className="relative w-full z-10 py-5 ">
          {/* HEADER */}
          <header className="text-center w-6/12 mx-auto py-6">
            <h1 className="uppercase text-5xl text-white font-bold">
              Movie Seat Selection
            </h1>
          </header>

          {/* MAIN */}
          <main className="bg-[#8781814f] w-[700px] mx-auto text-white p-14 space-y-7">
            <StartSelecting />
            {/* <Seating /> */}
            <SeatingPlus />
            <ConfirmSelecting />
          </main>

          {/* FOOTER */}
          <footer className="text-center w-6/12 mx-auto py-3">
            <p className="text-white">
              © 2018 Movie Seat Selection . All Rights Reserved | Design by
              W3layouts
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
