import React from "react";
import Image from "next/image";
import { BiRectangle } from "react-icons/bi";
import img1 from "../components/assets/pdf.svg";
import img2 from "../components/assets/x.svg";

const Create = () => {
  return (
    <div className="px-20 border-2 border-[#3a072c] mx-20 py-10 mt-10">
      <input
        placeholder="Enter Title"
        type="text"
        className="w-full px-10 py-5 bg-[#0a0722]"
      />

      <textarea
        placeholder="Enter a brief description"
        type="text"
        className="w-full px-10 py-5 my-10 h-80 bg-[#0a0722]"
      />

      <div className="flex ">
        <div className="text-white flex-1">
          <h1 className="pb-10">Upload file</h1>

          <div className="flex w-60 justify-between">
            <Image src={img1} alt="" />
            <Image src={img2} alt="" />
          </div>

          <p className="py-10">Only Pdf and Xls files are supported</p>
        </div>

        <div className="text-white flex-1">
          <h1>Select Category</h1>

          <div className="flex py-10">
            <div className="flex-1 flex items-center">
              <BiRectangle color="#52116A" />
              <p className="ml-7">Premium</p>
            </div>

            <div className="flex-1 flex items-center">
              <BiRectangle color="white" />
              <p className="ml-7">Free</p>
            </div>
          </div>

          <p className="text-[#46D0E2]">
            Note: please note that you would not get any incentive on free
            category.
          </p>

          <button className="bg-white w-full text-[#E11660] py-4 rounded font-bold my-10">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
