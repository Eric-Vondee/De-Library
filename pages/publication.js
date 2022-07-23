import React from "react";
import { AiFillEye } from "react-icons/ai";

const Publication = () => {
  return (
    <div className="border-2 mx-40 mt-10">
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
          <p>...</p>
        </div>
      </div>

      <div className="flex px-20 py-10 justify-between items-center text-white">
        <div className="w-3/6">
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
          <p>$30</p>
          <p>12/12/20</p>
          <p>...</p>
        </div>
      </div>

      <div className="flex px-20 py-10 justify-between items-center text-white text-base">
        <div className="w-3/6">
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
          <p>$40</p>
          <p>12/12/20</p>
          <p>...</p>
        </div>
      </div>
    </div>
  );
};

export default Publication;
