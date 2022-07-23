import React from "react";
import Image from "next/image";
import prov from "../assets/rec.png";
import styles from "./Navbar.module.css";
import { BiWallet } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav
      className={`font-body flex justify-between py-12 px-20  relative ${styles.navbar}`}
    >
      <div className="flex">
        <a href="/">
          <h1 className="text-4xl font-bold text-[#47013C]">De-Library</h1>
        </a>
        <div className="absolute left-96 bottom-16">
          <a href="./category">
            <Image src={prov} alt="prov" />
          </a>
        </div>
      </div>

      <div className=" flex flex-col sm:flex-row flex-start justify-around w-96 text-white">
        <a
          href="./create"
          className="border-2 border-[#570b35] px-7 rounded flex items-center"
        >
          <p>Upload Publication</p>
        </a>

        <a href="./analytics">
          <div className=" flex flex-col items-center">
            <p className="font-bold">Total Earning</p>
            <p>$3000</p>
          </div>
        </a>
      </div>

      <div className="text-white">
        <a href="./publication">
          <button className="border-2 bg-white text-[#E11660] px-7 py-3 rounded flex">
            <BiWallet color="#E11660" size={24} />
            <span className="ml-3">Connect Wallet</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
