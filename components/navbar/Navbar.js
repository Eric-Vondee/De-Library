import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import prov from "../assets/rec.png";
import styles from "./Navbar.module.css";
import { BiWallet } from "react-icons/bi";
import { Web3Context } from "../../contexts/Web3Context";

const Navbar = () => {
  const { wallet, provider, connect, connectTo, disconnect } =
    useContext(Web3Context);

  return (
    <nav
      className={`font-body flex justify-between py-12 px-20  relative ${styles.navbar}`}
    >
      <div className="flex">
        <Link href="/">
          <h1 className="text-4xl font-bold text-[#47013C]">De-Library</h1>
        </Link>
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
        {!wallet ? (
          <button
            onClick={connect}
            className="border-2 bg-white text-[#E11660] px-7 py-3 rounded flex"
          >
            <BiWallet color="#E11660" size={24} />
            <span className="ml-3">Connect Wallet</span>
          </button>
        ) : (
          <button
            onClick={disconnect}
            className="border-2 bg-white text-[#E11660] px-7 py-3 rounded flex"
          >
            <BiWallet color="#E11660" size={24} />
            <span className="ml-3">Disconnect</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
