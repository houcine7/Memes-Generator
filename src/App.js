import NavBar from "./components/NavBar";
import Main from "./components/Main";

import Footer from "./components/Footer";
import LoaderEff from "./components/LoaderEff";

import { useState, useEffect } from "react";
const App = () => {
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 4000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="App">
      {!loaded ? (
        <LoaderEff loading={true} />
      ) : (
        <>
          <LoaderEff loading={false} />
          <NavBar />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
