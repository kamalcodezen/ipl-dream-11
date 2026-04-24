import { Suspense } from "react";
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

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
