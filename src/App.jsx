import { useState, useEffect } from "react";
import axios from "axios";
import { motion, useScroll } from "framer-motion";
import "./App.css";
import Bets from "./components/Bets";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [events, setEvents] = useState([]);
  // let betsUser = [ ]
  const [betsUser, setBetsUser] = useState([]);
  const [loader, setLoader] = useState(true);
  const { scrollYProgress } = useScroll();

  const userBets = (selection, title) => {
    //  betsUser.push(selection)
    setBetsUser([...betsUser, { ...selection, title }]);
  };

  const deleteBets = (id) => {
    const filteredBets = betsUser.filter((bet) => bet.id !== id);
    setBetsUser(filteredBets);
  };
  console.log(betsUser);

  useEffect(() => {
    axios.get("http://www.mocky.io/v2/59f08692310000b4130e9f71").then((res) => {
      setEvents(res.data);
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <Bets betsUser={betsUser} deleteBets={deleteBets} />
      {loader ? (
        <Loader />
      ) : (
        <div className="events">
          {events
            .filter(
              (even) => !even.name.includes("Empty Event that shouldn't render")
            )
            .map((event, i) => (
              <div
                className="grid justify-items-center container my-14 w-3/6 p-6
          border-l-8 border-2 border-blue-500 shadow-xl rounded-lg bg-gray-100 "
                key={i}
              >
                <h1 className="font-normal container-grid justify-items-center my-2 text-2xl tracking-tight text-gray-900 dark:text-white h-auto w-auto p-6 mt-8 mx-20 rounded-lg bg-gray-300 border-2 border-blue-400">
                  {event.name}
                </h1>
                <div className="image">
                  <img
                    src="https://assets.laliga.com/assets/logos/laliga-santander-v/laliga-santander-v-1200x1200.png"
                    className="laliga"
                    alt=""
                    srcset=""
                  />
                </div>
                {event.markets.map((market, n) => (
                  <div key={n}>
                    <h2 className="font-bold text-xl border-t-4 border-gray-400 mx-8 p-4">
                      {market.name}
                    </h2>
                    {market.selections.map((selection, i) => (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ opacity: [0, 1] }}
                        key={i}
                        className="bet text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-2sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                        onClick={() => userBets(selection, market.name)}
                      >
                        <p>
                          {selection.name} {selection.price}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
      <Footer className="flex-grow" />
    </div>
  );
}

export default App;
