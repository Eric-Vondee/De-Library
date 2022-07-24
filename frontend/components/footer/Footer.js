import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="flex px-40 pb-16 text-white justify-between items-center">
      <h1 className="text-4xl text-[#47013C] font-bold">De-Library</h1>

      <ul className="flex justify-around w-96">
        <li>About Us</li>
        <li>News</li>
        <li>Careers</li>
        <li>Help</li>
        <li>Center</li>
      </ul>

      <p>Copyright 2022</p>
    </footer>
  );
};

export default Footer;
