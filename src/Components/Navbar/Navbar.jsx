import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import "./Navbar.css"
const Navbar = () => {
    const { theme, themeHandler } = useTheme();
  return (
    <div className="navbar__container bg-gray-400 m-8 h-16 rounded-2xl flex">
      <div className="navbar__container--heading ml-8">HackProject</div>
      <div className="navbar__container--right m-8 flex justify-content items-center">
        <div className="navbar__container--date border p-2 rounded-xl">Date 1/2/2</div>
        <div className="navbar__container--theme ml-6 flex justify-content items-center">
          <span className="material-symbols-outlined border rounded-full p-2" onClick={themeHandler}>
            {theme==="light"?"dark_mode":"light_mode"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar