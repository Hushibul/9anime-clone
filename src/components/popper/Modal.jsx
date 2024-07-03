import React, { useContext, useState } from 'react';
// import loginImge from "../../assets/images/trending/chopper.jpg";
import { MdCancel } from 'react-icons/md';
import { LoginContext } from '../../contexts/LoginContext';
import RegisterModal from './RegisterModal';
export default function Modal({ showModal, setShowModal }) {
  const [showRegModal, setShowRegModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const { setLoginData } = useContext(LoginContext);

  const saveLoginData = (e) => {
    e.preventDefault();
    setLoginData({ name: userName, password: userPassword });
    setShowModal(false);
    setShowRegModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex fixed inset-0 z-50'>
            <div className='my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg flex flex-col w-full bg-neutral-900 text-white'>
                {/* body  */}
                <section className='flex w-full mx-auto'>
                  {/* <div className="hidden md:block w-1/2">
                    <img
                      className="w-[400px] h-[400px]"
                      src={loginImge}
                      alt="loginImage"
                    />
                  </div> */}
                  <form onSubmit={saveLoginData}>
                    <div className='flex flex-col items-center mx-auto gap-3 px-8 py-8 relative'>
                      <div className='absolute top-6 right-8'>
                        <MdCancel
                          onClick={() => setShowModal(false)}
                          className='text-xs text-white cursor-pointer'
                        />
                      </div>
                      <h2>Login</h2>
                      <p className='text-[10px]'>Welcome back!</p>
                      <div>
                        <input
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className='px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]'
                          type='text'
                          placeholder='Username or email'
                        />
                      </div>
                      <div>
                        <input
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                          className='px-4 py-3 bg-neutral-800 placeholder:text-gray-500 rounded text-xs w-[400px]'
                          type='password'
                          placeholder='Password'
                        />
                      </div>
                      <button className='text-gray-600 text-left bg-transparent hover:text-gray-400'>
                        Forget password
                      </button>
                      <button
                        type='submit'
                        className='w-full py-2 text-sm bg-purple-600'
                      >
                        Submit
                      </button>
                      <p>
                        Don't have an account?{' '}
                        <span
                          className='text-purple-500 cursor-pointer hover:text-purple-700'
                          onClick={() => setShowRegModal(!showRegModal)}
                        >
                          Register
                        </span>
                      </p>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <RegisterModal
              showRegModal={showRegModal}
              setShowRegModal={setShowRegModal}
            />
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
