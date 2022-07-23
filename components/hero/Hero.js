import React from "react";
import Image from "next/image";
import Points from "../assets/book.svg";
import styles from "./main.module.css";
import fir from "../assets/round.png";
import sec from "../assets/series.png";

const Hero = () => {
  return (
    <div
      className={`flex py-36 px-40 justify-between items-center ${styles.bg}`}
    >
      <div className="relative">
        <h1 className="text-5xl text-white">
          Your Access To Unlimited <br></br>
          <span className={styles.resource}>Resources</span>
        </h1>
        <p className="text-white w-1/2 py-10">
          We are also focused on supporting members of the DAO which would in
          return be of a good cause, to the DAO community at large. Support
          include scholarships, grants and courses amongst others for members of
          the DAO
        </p>

        <div className="absolute bottom-3 left-1/3">
          <Image src={sec} alt="first" />
        </div>
      </div>

      {/* <div>
        <div>
          <Image src={sec} alt="first" />
        </div>

        <div>
          <Image src={fir} alt="first" />
        </div>
      </div> */}

      <div className="mr-20 relative">
        <div>
          <Image src={Points} alt="dots" width={800} height={800} />
        </div>
        <div className="absolute top-10">
          <Image src={fir} alt="first" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
