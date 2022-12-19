import React from "react";
import { FaPaste } from "react-icons/fa";

const DonateModal = () => {
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50">
        <div className="my-6 mx-auto max-w-4xl">
          {/*content*/}
          <div className="border-0 rounded-lg flex flex-col w-full bg-neutral-900 text-white">
            {/* body  */}
            <section className="flex w-full mx-auto">
              <div className="hidden overflow-hidden md:block w-1/2">
                <img
                  className="w-[400px] h-[500px]"
                  src="https://i.pinimg.com/550x/e0/dc/e0/e0dce0f86668450d043385d8f44f5851.jpg"
                  alt="donateImage"
                />
              </div>

              <div className="flex flex-col w-1/2 items-center mx-auto gap-3 px-8 py-8 relative">
                <h2>Make Donation</h2>
                <p className="text-[11px] text-gray-300">
                  We need your help to keep going. By donating you can help us
                  to keep the site alive and even upgrade the servers for a
                  better experience.
                </p>
                <p className="text-[11px] text-gray-400">
                  Crypto: Please donate to 9anime with wallet addresses below:
                </p>
                <div className="w-full bg-black px-6 py-4 rounded">
                  <p className="text-[11px] text-gray-400">LiteCoin</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px]">
                      ltc1qha423z9qcudh6wjqwzfa42845d98fv8usj93he
                    </p>
                    <FaPaste className="text-[9px] text-gray-600" />
                  </div>
                </div>
                <div className="w-full bg-black px-6 py-4 rounded">
                  <p className="text-[11px] text-gray-400">USDT</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px]">
                      TSvXu88wq1ZLv5gPTs3c58rz6eYSEp12Ct
                    </p>
                    <FaPaste className="text-[9px] text-gray-600" />
                  </div>
                </div>
                <div className="w-full bg-black px-6 py-4 rounded">
                  <p className="text-[11px] text-gray-400">BitCoin</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px]">
                      bc1qqa5zm9zlgt0ppyrkq2gfqjxtslva9vn2xjrsgt
                    </p>
                    <FaPaste className="text-[9px] text-gray-600" />
                  </div>
                </div>
                <div className="w-full bg-black px-6 py-4 rounded">
                  <p className="text-[11px] text-gray-400">Eterium</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px]">
                      0x7c663023fA86d54aF2d47Ae9048a2FAe593933F3
                    </p>
                    <FaPaste className="text-[9px] text-gray-600" />
                  </div>
                </div>
                <div></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateModal;
