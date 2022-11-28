import React, { useContext, useState } from "react";
// import loginImge from "../../assets/images/trending/chopper.jpg";
import { MdCancel } from "react-icons/md";
import { LoginContext } from "../../contexts/LoginContext";
export default function RegisterModal({ showRegModal, setShowRegModal }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { setShowModal } = useContext(LoginContext);

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for registering....", userName);
  };

  return (
    <>
      {showRegModal ? (
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
                  <form onSubmit={formSubmit}>
                    <div className="flex flex-col items-center mx-auto gap-3 px-8 py-8 relative">
                      <div className="absolute top-6 right-8">
                        <MdCancel
                          onClick={() => {
                            setShowModal(false);
                            setShowRegModal(false);
                          }}
                          className="text-xs text-white cursor-pointer"
                        />
                      </div>
                      <h2>Register</h2>
                      <p className="text-[10px]">
                        Create an account to use full range of function
                      </p>
                      <div>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <input
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <input
                          value={passwordConfirm}
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                          className="px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]"
                          type="password"
                          placeholder="Password Confirmation"
                        />
                      </div>

                      <button type="submit" className="w-full py-2 text-sm">
                        Submit
                      </button>
                      <p>
                        Already have an account?{" "}
                        <span
                          onClick={() => {
                            setShowModal(true);
                            setShowRegModal(false);
                          }}
                          className="text-purple-500 hover:text-purple-700 cursor-pointer"
                        >
                          {showRegModal ? "Login" : "Register"}
                        </span>
                      </p>
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
