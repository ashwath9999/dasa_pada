import { useState } from "react";
import List from "./components/List";
import Add from "./components/Add";
import Del from "./components/Del";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { db } from "./db-config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { collection } from "firebase/firestore";

function App() {
  const padaCollectionRef = collection(db, "padas");
  const [alert, setAlert] = useState(null);
  const [songs, setsongs] = useState([]);

  const show_alert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  return (
    <>
      <Router>
        <Navbar />
        <div className="container-fluid text-center ">
        <Alert alert={alert}/>
        </div>
        <div>
          <Routes>
            <Route>
              <Route
                exact
                path="/add"
                element={<Add padaCollectionRef={padaCollectionRef} showalert={show_alert} />}
              ></Route>
              <Route exact path="/del" element={
              <Del 
              db={db}
              padaCollectionRef={padaCollectionRef}
              showalert={show_alert}
              />}></Route>
              <Route
                exact
                path="/dasa_pada"
                element={<List 
                  padaCollectionRef={padaCollectionRef}
                  setsongs={setsongs}
                  songs={songs}
                />}
              ></Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
