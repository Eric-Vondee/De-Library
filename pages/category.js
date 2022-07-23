import React from "react";
import { BiFilter } from "react-icons/bi";
import { arrayOfCategory } from "../utils/helpers";

const Category = () => {
  return (
    <div className="px-20 mx-20 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center  ">
        <div className="flex-1 bg-[#0b0723] w-48 sm:w-full p-7 mr-24">
          <h1 className="text-[#68667a]">Popular Categories</h1>
          <div className="flex w-96 text-[#27243e] justify-between py-4">
            <p>Mathematics</p>
            <p>Physics</p>
            <p>Biology</p>
            <p>Chemistry</p>
          </div>
          <div className="flex w-80 text-[#27243e] justify-between py-4">
            <p>Philosophy</p>
            <p>Economics</p>
            <p>Engineering</p>
          </div>
          <div className="flex w-56 text-[#27243e] justify-between py-4">
            <p>Religion</p>
            <p>Anatomy</p>
          </div>
        </div>

        <div className="flex-1 text-white">
          <div className="flex items-center">
            <p>Filter</p>
            <BiFilter color="#E11660" />
          </div>

          <div className="flex justify-between">
            <select
              name="pets"
              id="pet-select"
              className="flex-1 bg-white text-[#525253] px-5 mr-5"
            >
              <option value="">Select Category</option>
              {arrayOfCategory.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>

            <div className="flex flex-1">
              <div className="bg-white py-3 px-5 text-black rounded">
                Earnable
              </div>
              <div className="bg-[#52116A] py-3 px-5 rounded">Show all</div>
            </div>
          </div>
        </div>
      </div>

      {/* The category */}

      <div className="text-white py-10 border-b-2 border-[#570b35]">
        <div>
          <h4 className="text-3xl font-bold py-3">
            Basics of Financial Accounting
          </h4>
          <p className="text-[#535161] font-bold">
            Aurthur Valon <span>Dev 2022</span>
          </p>
          <div className="flex justify-between items-center w-3/4 py-1">
            <div>
              <p className="text-[#525253]">
                We are also focused on supporting members of the DAO{" "}
              </p>
              <ul className="flex py-3 text-xl justify-between items-center">
                <li>Cite</li>
                <li>Earnable</li>
                <li className="border-2 border-[#570b35] px-7 py-2 rounded">
                  Download
                </li>
              </ul>
            </div>

            <div className="py-3">
              <p>Read Summary</p>
              <p className="text-[#525253]">21 Available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white py-10 border-b-2 border-[#570b35]">
        <div>
          <h4 className="text-3xl font-bold py-3">
            Basics of Financial Accounting
          </h4>
          <p className="text-[#535161] font-bold">
            Aurthur Valon <span>Dev 2022</span>
          </p>
          <div className="flex justify-between items-center w-3/4 py-1">
            <div>
              <p className="text-[#525253]">
                We are also focused on supporting members of the DAO{" "}
              </p>
              <ul className="flex py-3 text-xl justify-between items-center">
                <li>Cite</li>
                <li>Earnable</li>
                <li className="border-2 border-[#570b35] px-7 py-2 rounded">
                  Download
                </li>
              </ul>
            </div>

            <div className="py-3">
              <p>Read Summary</p>
              <p className="text-[#525253]">21 Available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white py-10 border-b-2 border-[#570b35]">
        <div>
          <h4 className="text-3xl font-bold py-3">
            Basics of Financial Accounting
          </h4>
          <p className="text-[#535161] font-bold">
            Aurthur Valon <span>Dev 2022</span>
          </p>
          <div className="flex justify-between items-center w-3/4 py-1">
            <div>
              <p className="text-[#525253]">
                We are also focused on supporting members of the DAO{" "}
              </p>
              <ul className="flex py-3 text-xl justify-between items-center">
                <li>Cite</li>
                <li>Earnable</li>
                <li className="border-2 border-[#570b35] px-7 py-2 rounded">
                  Download
                </li>
              </ul>
            </div>

            <div className="py-3">
              <p>Read Summary</p>
              <p className="text-[#525253]">21 Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* The end */}
    </div>
  );
};

export default Category;
