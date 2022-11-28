import React, { useState } from "react";
// import loginImge from "../../assets/images/trending/chopper.jpg";
import { MdCancel } from "react-icons/md";
export default function RequestModal({
  showRequestModal,
  setShowRequestModal,
}) {
  const [animeName, setAnimeName] = useState("");
  const [mal, setMal] = useState("");
  const [details, setDetails] = useState("");

  return (
    <>
      {showRequestModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50">
            <div className="my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-neutral-900 text-white">
                {/* body  */}
                <section className="flex w-full mx-auto">
                  {/* <div className="hidden md:block w-1/2">
                    <img
                      className="w-[400px] h-[400px]"
                      src={loginImge}
                      alt="loginImage"
                    />
                  </div> */}
                  <form>
                    <div className="flex flex-col items-center mx-auto gap-3 px-8 py-8 relative">
                      <div className="absolute top-6 right-8">
                        <MdCancel
                          onClick={() => setShowRequestModal(false)}
                          className="text-xs text-white cursor-pointer"
                        />
                      </div>
                      <h2>Login</h2>
                      <p className="text-[10px]">Welcome back!</p>
                      <div>
                        <input
                          value={animeName}
                          onChange={(e) => setAnimeName(e.target.value)}
                          className="px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]"
                          type="text"
                          placeholder="Anime name"
                        />
                      </div>
                      <div>
                        <input
                          value={mal}
                          onChange={(e) => setMal(e.target.value)}
                          className="px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]"
                          type="text"
                          placeholder="Link to MAL/ anibd/ anilist or any if possible"
                        />
                      </div>
                      <div>
                        <input
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          className="px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px] h-16"
                          type="text"
                          placeholder="Link to MAL/ anibd/ anilist or any if possible"
                        />
                      </div>

                      <button type="submit" className="w-full py-2 text-sm">
                        Submit
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
