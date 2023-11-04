import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { user, isAuthenticate } = useSelector((state) => state.user);

  const [BB, setBB] = useState(0);
  const [Toggle, setToggle] = useState(false);
  return (
    <div className="h-[8vh] w-full text-white  ">
      <div className="h-[8vh] w-full bg-[#101020] fixed top-0 z-10">
        <div className="flex h-full w-full items-center justify-between px-3">
          {/* header 1s items */}
          <div className="w-[40%] ">
            <img src="/images/logo.png" className="h-[50px]" alt="" />
          </div>

          <div className=" hidden 800px:block w-[60%] 1200px:w-[40%] ">
            <nav className="flex justify-between ">
              <Link to={"/"}>
                <div className="relative ">
                  <h1
                    onClick={() => setBB(0)}
                    className={
                      "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                    }
                  >
                    Home
                  </h1>
                  <div
                    className={`${
                      BB === 0 ? "block" : "hidden"
                    } h-1 w-20 absolute -bottom-3 rounded-md bg-[red] transition duration-300 ease-in-out`}
                  ></div>
                </div>
              </Link>
              <Link to={"/about"}>
                <div className="relative ">
                  <h1
                    onClick={() => setBB(1)}
                    className={
                      "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                    }
                  >
                    About
                  </h1>
                  <div
                    className={`${
                      BB === 1 ? "block" : "hidden"
                    } h-1 w-20 absolute -bottom-3 rounded-md bg-[red] transition duration-300 ease-in-out`}
                  ></div>
                </div>
              </Link>
              <Link to="/pricing">
                <div className="relative ">
                  <h1
                    onClick={() => setBB(2)}
                    className={
                      "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                    }
                  >
                    Pricing
                  </h1>
                  <div
                    className={`${
                      BB === 2 ? "block" : "hidden"
                    } h-1 w-20 absolute -bottom-3 rounded-md bg-[red] transition duration-300 ease-in-out`}
                  ></div>
                </div>
              </Link>
              {user?.role === "admin" ? (
                <Link to="/collect-bill">
                  <div className="relative ">
                    <h1
                      onClick={() => setBB(3)}
                      className={
                        "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                      }
                    >
                      Collect bill
                    </h1>
                    <div
                      className={`${
                        BB === 3 ? "block" : "hidden"
                      } h-1 w-28 absolute -bottom-3 rounded-md bg-[red] transition duration-300 ease-in-out`}
                    ></div>
                  </div>
                </Link>
              ) : null}
              <div className="">
                {isAuthenticate ? (
                  <Link to={"/me"}>
                    <div onClick={() => setBB(10)} className=" ">
                      <img
                        src={user?.image?.url}
                        className="h-[45px] w-[45px] rounded-full object-cover "
                        alt=""
                      />
                    </div>
                  </Link>
                ) : (
                  <Link to="/login">
                    <h1
                      onClick={() => setBB(4)}
                      className={
                        "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                      }
                    >
                      Login
                    </h1>
                  </Link>
                )}
              </div>
            </nav>
          </div>

          <div className=" 800px:hidden">
            <AiOutlineMenu
              onClick={() => setToggle(!Toggle)}
              size={40}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className=" 800px:hidden">
          <AnimatePresence>
            {Toggle && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                className="min-h-[20vh]  400px:w-[40vw] 600px:w-[20vw] bg-black rounded-sm p-2 fixed right-0"
              >
                <nav className="flex justify-between flex-col gap-y-2">
                  <Link to="/">
                    <div className="relative ">
                      <h1
                        onClick={() => {
                          setBB(0);
                          setToggle(!Toggle);
                        }}
                        className={
                          "text-[20px]  rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                        }
                      >
                        Home
                      </h1>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div className="relative ">
                      <h1
                        onClick={() => {
                          setBB(1);
                          setToggle(!Toggle);
                        }}
                        className={
                          "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                        }
                      >
                        About
                      </h1>
                    </div>
                  </Link>
                  <Link to="/pricing">
                    <div className="relative ">
                      <h1
                        onClick={() => {
                          setBB(2);
                          setToggle(!Toggle);
                        }}
                        className={
                          "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                        }
                      >
                        Pricing
                      </h1>
                    </div>
                  </Link>
                  <Link to="/collect-bill">
                    <div className="relative ">
                      <h1
                        onClick={() => {
                          setBB(3);
                          setToggle(!Toggle);
                        }}
                        className={
                          "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                        }
                      >
                        Collect bill
                      </h1>
                    </div>
                  </Link>

                  <div className=" mx-auto">
                    {isAuthenticate ? (
                      <Link to={"/me"}>
                        <div className=" ">
                          <img
                            onClick={() => setToggle(!Toggle)}
                            src={user?.image?.url}
                            className="h-[45px] w-[45px] rounded-full object-cover "
                            alt=""
                          />
                        </div>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <h1
                          onClick={() => {
                            setBB(4);
                            setToggle(!Toggle);
                          }}
                          className={
                            "text-[20px] ml-1 rounded-sm font-semibold px-2 py-1 hover:bg-[#aaa7a771] cursor-pointer transition duration-300 ease-in-out"
                          }
                        >
                          Login
                        </h1>
                      </Link>
                    )}
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
