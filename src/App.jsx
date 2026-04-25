import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Players from "./components/players/Players";

const playerDataFetch = async () => {
  const res = await fetch("/playerData.json");
  const data = res.json();
  return data;
};

function App() {
  const playerPromise = playerDataFetch();
  const [coin, setCoin] = useState(2000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner loading-xl mx-auto mt-50 flex justify-center items-center"></span>
        }
      >
        <Players
          playerPromise={playerPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
