import Image from "next/image";
import React from "react";
import rec from "../assets/what.png";
import orange from "../assets/orange.png";
import purple from "../assets/purple.png";
import yellow from "../assets/yellow.png";
import green from "../assets/green.png";
import hori from "../assets/horizobtal.png";

const Body = () => {
  return (
    <div className="px-40 py-20">
      <div className="border-2 border-[#E11660] rounded">
        <div className="flex pl-7 pt-7 ">
          <Image src={rec} alt="box" />
          <h1 className="text-3xl text-[#C62CB6] pl-7 font-bold">
            What you get
          </h1>
        </div>

        <div className="flex py-14">
          <div className="pl-7 pr-7 pt-5">
            <Image src={orange} alt="orange" />
          </div>
          <div className="text-white">
            <h4 className=" text-2xl font-bold">
              Discover A Borderless Community
            </h4>
            <p className="mt-5 text-lg">
              We are also focused on supporting members of the DAO which would
              in return be of a good cause, to the DAO community at large.
              Support include scholarships, grants and courses amongst others
              for members of the DAO
            </p>
          </div>
        </div>

        <div className="flex py-14">
          <div className="pl-7 pr-7 pt-5">
            <Image src={purple} alt="purple" />
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-bold">Real Time Analytics </h4>
            <p className="mt-5 text-lg">
              We are also focused on supporting members of the DAO which would
              in return be of a good cause, to the DAO community at large.
              Support include scholarships, grants and courses amongst others
              for members of the DAO
            </p>
          </div>
        </div>

        <div className="flex py-14">
          <div className="pl-7 pr-7 pt-5">
            <Image src={yellow} alt="yellow" />
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-bold">Earn Rewards For Reading</h4>
            <p className="mt-5 text-lg">
              We are also focused on supporting members of the DAO which would
              in return be of a good cause, to the DAO community at large.
              Support include scholarships, grants and courses amongst others
              for members of the DAO
            </p>
          </div>
        </div>

        <div className="flex py-14">
          <div className="pl-7 pr-7 pt-5">
            <Image src={green} alt="green" />
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-bold">
              Get Rewards For Your Publication
            </h4>
            <p className="mt-5 text-lg">
              We are also focused on supporting members of the DAO which would
              in return be of a good cause, to the DAO community at large.
              Support include scholarships, grants and courses amongst others
              for members of the DAO
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 border-[#E11660] rounded my-20 text-white py-10">
        <div className="flex pl-7 pt-7 pb-4">
          <Image src={rec} alt="box" />
          <h1 className="text-3xl text-[#C62CB6] pl-7 font-bold">
            How it works
          </h1>
        </div>

        <div className="flex items-center pb-5">
          <div className="pl-7 pr-7 pt-5">
            <Image src={hori} alt="Horizontal" />
          </div>

          <div className="mt-5">
            <p>
              We are also focused on supporting members of the DAO which would
              in return be of a good cause, to the DAO{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center pb-5">
          <div className="pl-7 pr-7 pt-5">
            <Image src={hori} alt="Horizontal" />
          </div>

          <div className="mt-5">
            <p>
              We are also focused on supporting members of the DAO which would
              in return be of a good cause, to the DAO{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center pb-5">
          <div className="pl-7 pr-7 pt-5">
            <Image src={hori} alt="Horizontal" />
          </div>

          <div className="mt-5">
            <p>
              We are also focused on supporting members of the DAO which would
              in return be of a good cause, to the DAO{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
