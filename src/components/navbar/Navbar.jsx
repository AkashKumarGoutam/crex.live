import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="bg-gray-800 items-center justify-center">
        <nav className="flex justify-between items-center container mx-auto h-16 w-[70%]">
          <div className="flex">
            <img
              src="https://crex.live/assets/logo/logo2.webp"
              alt="img"
              className="w-6"
            />
            <span className="text-white font-bold text-xl"> Crex</span>
          </div>
          <div className="flex gap-8">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/series" className="text-white flex items-center">
              Series
              <svg
                _ngcontent-app-root-c11=""
                width="6"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{transform: "rotate(90deg)", marginLeft: "10px"}}
              >
                <path
                  _ngcontent-app-root-c11=""
                  d="M1.17773 14.1875L6.43711 8L1.17773 1.8125"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
            <Link to="/fixtures" className="text-white">
              Fixtures
            </Link>
            <Link to="/stats_corner" className="text-white">
              🏏Stats Corner
            </Link>
            <Link to="/rankings" className="text-white">
              Rankings
            </Link>
            <Link to="/" className="text-white flex items-center gap-2">
             <img src="https://crex.live/assets/icon/moon.svg" className="w-4" alt="img"/>
              Dark
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
