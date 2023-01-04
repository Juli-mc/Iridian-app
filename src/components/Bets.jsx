import React, { useState } from "react";
import { motion } from "framer-motion";

const Bets = ({ betsUser, deleteBets }) => {
  const [show, setShow] = useState(false);

  const betDelete = (selection) => {
    !betsUser.push(selection);
    console.log(betsUser);
  };

  return (
    <div className="component-bet">
      <nav className="bg-black border-gray-200 px-2 sm:px-4 p-6 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: [0, 1] }}
            className="self-center text-4xl font-bold ... bg-clip-text text-white to-white whitespace-nowrap"
          >
            <h2>Iridian-App</h2>
          </motion.div>

          <div className="flex md:order-2">
            <button
              onClick={() => setShow(true)}
              type="button"
              className="text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              My bets
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          !show && "hidden"
        } bg-gray-600/50 min-h-screen w-full top-0 left-0 right-0 fixed backdrop-blur-sm shadow-md`}
      ></div>
      <div
        className={`${
          !show ? "hidden" : "w-80"
        } bg-black min-h-screen w-80 top-0 left-50 fixed`}
      >
        <button
          onClick={() => setShow(false)}
          className={`${!show && "hidden"} m-4 text-4xl text-white`}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
        {betsUser.map((betUser) => (
          <div className="text-center text-white text-xl hover:bg-gray-400 p-2 m-2">
            <h1 className="text-xl">{betUser.title}</h1>
            <h2 className="font-bold text-3xl">{betUser.price}</h2>
            <p>{betUser.name}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: [0, 1] }}
              className="border-3 hover:text-red-600 text-2xl cursor-pointer"
              onClick={() => deleteBets(betUser.id)}
            >
              <i class="fa-solid fa-circle-minus"></i>
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bets;
