import React from "react";

export default function Main() {
  return (
    <>
      <div className="bg-[url('/images/back.jpg')] bg-cover h-[100vh] md:h-[90vh]">
        <div className="absolute top-30 left-30 w-full md:w-1/2 px-4 py-20 md:p-20">
          <div className="text-white text-5xl pb-8 pt-20 font-bold">
            Donate to Humanity
          </div>
          <div className="text-3xl text-white py-4">
            With Care About Our Environment <br />
            Please support 'Humanity' and donate your crypto dust here, which
            will be evenly distributed between The Refugee Council
          </div>
          <div className=" w-full md:w-1/2">
            <div className="rounded-md border-2 border-gray-400 bg-white px-4 py-2">
              <input
                placeholder="Enter amount"
                className="bg-transparent focus-visible:outline-none"
              ></input>
            </div>
            <div className="py-4">
              <div className="cursor-pointer  rounded-md bg-green-500 py-2 text-white text-center text-lg font-bold">
                DONATE
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
