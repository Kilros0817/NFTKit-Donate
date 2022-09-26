import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { useAccount, useNetwork } from "wagmi";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { utils } from "ethers";

import { env } from "../../constant";

export default function Main() {
  const [amount, setAmount] = useState("");
  const [debouncedValue] = useDebounce(amount, 500);

  const {chain} = useNetwork();
  const { config } = usePrepareSendTransaction({
    request: {
      to: env.contractAddress,
      value: debouncedValue ? utils.parseEther(debouncedValue) : undefined,
    },
  });
  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  const CountDisplay = () => {
    return (
      <div className=" text-xl text-white p-4">
        Successfully sent {amount} eth!
        <div className="underline">
          <a target="_blank" href={`https://mumbai.polygonscan.com//tx/${data?.hash}`}>Polygonscan</a>
        </div>
      </div>
    );
  };
  const displayToast = () => {
    toast.info(<CountDisplay />);
  };
  return (
    <>
      <div className="bg-[url('/images/back.jpg')] bg-cover h-[100vh] md:h-[90vh]">
        <div className="absolute top-30 left-30 w-full md:w-1/2 px-4 py-20 md:p-20">
          <div className="text-white  text-4xl sm:text-5xl pb-8 pt-20 font-bold">
            Donate to Humanity
          </div>
          <div className="text-2xl sm:text-3xl text-white py-4">
            With Care About Our Environment <br />
            Please support 'Humanity' and donate your crypto dust here, which
            will be evenly distributed between The Refugee Council
          </div>
          <div className=" w-full md:w-1/2">
            <div className="rounded-md border-2 border-gray-400 bg-white px-4 py-2">
              <input
                placeholder="Enter amount"
                className="bg-transparent focus-visible:outline-none"
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </div>
            <div className="py-4">
              <button
                disabled={isLoading || !sendTransaction || !amount || !chain }
                className="cursor-pointer  rounded-md bg-green-500 py-2 px-5 text-white text-center text-lg font-bold disabled:bg-black disabled:bg-opacity-75"
                onClick={(e) => {
                  e.preventDefault();
                  sendTransaction?.();
                }}
              >
                {isLoading ? "Sending..." : "Donate"}
              </button>
            </div>
            {isSuccess && displayToast()}
          </div>
        </div>
      </div>
      <ToastContainer
        draggable={false}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
