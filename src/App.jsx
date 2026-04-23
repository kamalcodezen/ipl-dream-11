import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

const navaLinkFetch = async () => {
  const res = await fetch("/public/navbarLinkData.json");
  return res.json();
};

function App() {
  const navLinkPromise = navaLinkFetch();
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-dots loading-lg"></span>}
      >
        <Navbar navLinkPromise={navLinkPromise}></Navbar>
      </Suspense>
    </>
  );
}

export default App;
