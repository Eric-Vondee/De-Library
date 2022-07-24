import Image from "next/image";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import graph from "../components/assets/graph.svg";
import Map from "../components/assets/Map.svg";
import one from "../components/assets/1.png";
import two from "../components/assets/2.png";
import three from "../components/assets/3.png";
import four from "../components/assets/4.png";
import six from "../components/assets/6.png";

const Analytics = () => {
  return (
    <div className="px-20">
      <div className="p-20 text-white flex justify-between">
        <h1>My Publications</h1>

        <div className="flex justify-between w-96 items-center">
          <p>Views</p>
          <p>Earnings</p>
          <p>Date Uploaded</p>
          <p>More</p>
        </div>
      </div>

      <div className="flex px-20 py-10 justify-between items-center text-white">
        <div className="w-3/6">
          <p className="text-[#E11660]">Anarchy</p>
          <p>
            We are also focused on supporting members of the DAO which would in
            return be of a good cause, to the DAO community at large. Support
          </p>
        </div>

        <div className="flex  justify-between w-96 items-center">
          <div className="flex items-center mr-3">
            <AiFillEye />
            <p>200</p>
          </div>
          <p>$27</p>
          <p>12/12/20</p>
          <p className="text-[#E11660]">...</p>
        </div>
      </div>

      <div className="flex px-20 py-10 justify-between items-center text-white">
        <div className="w-3/6">
          <p className="text-[#E11660]">Anarchy</p>
          <p>
            We are also focused on supporting members of the DAO which would in
            return be of a good cause, to the DAO community at large. Support
          </p>
        </div>

        <div className="flex  justify-between w-96 items-center">
          <div className="flex items-center mr-3">
            <AiFillEye />
            <p>200</p>
          </div>
          <p>$27</p>
          <p>12/12/20</p>
          <p className="text-[#E11660]">...</p>
        </div>
      </div>

      <div className="flex px-40 items-center py-20 justify-between">
        <div>
          <Image src={graph} alt="graph" />
        </div>
        <div>
          <Image src={Map} alt="map" />
        </div>
      </div>

      <div>
        <div className="bg-[#47013C] text-white px-40 mx-20 p-5">
          <p className="font-bold text-2xl">Comments</p>
        </div>
        <div className="px-40 mx-20 bg-white py-10 mb-10">
          <div className="flex py-5 justify-between">
            <div className="flex">
              <Image src={one} alt="one" />
              <p className="ml-5">
                We are also focused on supporting members of the DAO
              </p>
            </div>
            <p>Reply</p>
          </div>

          <div className="flex py-5 justify-between">
            <div className="flex">
              <Image src={two} alt="one" />
              <p className="ml-5">
                We are also focused on supporting members of the DAO
              </p>
            </div>
            <p>Reply</p>
          </div>

          <div className="flex py-5 justify-between">
            <div className="flex">
              <Image src={three} alt="one" />
              <p className="ml-5">
                We are also focused on supporting members of the DAO
              </p>
            </div>
            <p>Reply</p>
          </div>

          <div className="flex py-5 justify-between">
            <div className="flex">
              <Image src={four} alt="one" />
              <p className="ml-5">
                We are also focused on supporting members of the DAO
              </p>
            </div>
            <p>Reply</p>
          </div>

          <div className="flex py-5 justify-between">
            <div className="flex">
              <Image src={one} alt="one" />
              <p className="ml-5">
                We are also focused on supporting members of the DAO
              </p>
            </div>
            <p>Reply</p>
          </div>

          <div className="flex py-5 justify-between">
            <div className="flex">
              <Image src={two} alt="one" />
              <p className="ml-5">
                We are also focused on supporting members of the DAO
              </p>
            </div>
            <p>Reply</p>
          </div>

          <div className="flex py-5 justify-between">
            <div className="flex">
              <Image src={six} alt="one" />
              <p className="ml-5">
                We are also focused on supporting members of the DAO
              </p>
            </div>
            <p>Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
